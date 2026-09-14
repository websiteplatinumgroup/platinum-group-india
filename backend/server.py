import os
import re
import logging
import uuid
import asyncio
import ipaddress
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, EmailStr, Field, field_validator
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
LEADS_NOTIFY_EMAIL = os.environ["LEADS_NOTIFY_EMAIL"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
PUBLIC_APP_URL = os.environ["PUBLIC_APP_URL"].rstrip("/")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} ≠ real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> None:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        logging.getLogger(__name__).info("Lead email sent: %s", resp.json().get("id"))
    except Exception as e:
        logging.getLogger(__name__).error("Lead email send failed: %s", str(e))


async def notify_lead_email(doc: dict) -> None:
    try:
        row = lambda label, value: (
            f'<tr><td style="padding:8px 16px;color:#8a8f98;font-size:12px;'
            f'text-transform:uppercase;letter-spacing:1px">{label}</td>'
            f'<td style="padding:8px 16px;color:#111;font-size:14px">{escape(str(value or "-"))}</td></tr>'
        )
        subject = f"New Enquiry: {escape(doc.get('name', ''))} — {doc.get('project', 'opulence').title()}"
        html = (
            '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td '
            'style="padding:24px;font-family:Arial,sans-serif">'
            f'<h2 style="margin:0 0 4px;color:#111">New Website Enquiry</h2>'
            f'<p style="margin:0 0 16px;color:#666;font-size:13px">Platinum Group — {escape(doc.get("intent", "enquiry").replace("-", " ").title())}</p>'
            '<table role="presentation" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px">'
            f'{row("Name", doc.get("name"))}'
            f'{row("Mobile", doc.get("mobile"))}'
            f'{row("Email", doc.get("email"))}'
            f'{row("Project", doc.get("project"))}'
            f'{row("Intent", doc.get("intent"))}'
            f'{row("Message", doc.get("message"))}'
            f'{row("Source", doc.get("source"))}'
            f'{row("Time", doc.get("created_at"))}'
            '</table>'
            f'<p style="font-size:12px;color:#888;margin-top:16px">Sent by {escape(EMAIL_FROM_NAME)} website lead capture.</p>'
            '</td></tr></table>'
        )
        await send_email(to=LEADS_NOTIFY_EMAIL, subject=subject, html=html)
        await send_lead_autoreply(doc)
    except Exception as e:
        logging.getLogger(__name__).error("notify_lead_email failed: %s", str(e))


async def send_lead_autoreply(doc: dict) -> None:
    recipient = doc.get("email")
    if not recipient:
        return
    brochure_url = f"{PUBLIC_APP_URL}/brochure/platinum-greens-opulence-brochure.pdf"
    first_name = escape(str(doc.get("name", "there")).split()[0])
    subject = "Thank you for your enquiry — Platinum Group"
    html = (
        '<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td '
        'style="padding:32px 24px;font-family:Arial,sans-serif;background:#ffffff">'
        '<p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;color:#b08d3f">PLATINUM GROUP</p>'
        f'<h2 style="margin:0 0 16px;color:#111;font-weight:600">Thank you, {first_name}.</h2>'
        '<p style="margin:0 0 16px;color:#333;font-size:14px;line-height:1.6">'
        'We have received your enquiry for Platinum Greens Opulence. Our team will reach '
        'out to you shortly on your mobile number.</p>'
        '<p style="margin:0 0 24px;color:#333;font-size:14px;line-height:1.6">'
        'Meanwhile, you can download the official e-brochure here:</p>'
        f'<a href="{brochure_url}" '
        'style="display:inline-block;background:#b08d3f;color:#ffffff;text-decoration:none;'
        'font-size:12px;letter-spacing:2px;padding:14px 28px">DOWNLOAD BROCHURE</a>'
        '<p style="margin:32px 0 0;font-size:12px;color:#888;line-height:1.6">'
        f'Sent by {escape(EMAIL_FROM_NAME)}. Simply reply to this email if you have any questions. '
        'We never ask for your password or payment details by email.</p>'
        '</td></tr></table>'
    )
    await send_email(to=recipient, subject=subject, html=html)

app = FastAPI()
api_router = APIRouter(prefix="/api")

VALID_PROJECTS = {"opulence", "greens", "upcoming", "other"}
VALID_INTENTS = {"site-visit", "brochure", "price", "sales", "enquiry", "floor-plan"}


class LeadCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    mobile: str
    email: Optional[EmailStr] = None
    project: str = "opulence"
    intent: str = "enquiry"
    message: Optional[str] = Field(default=None, max_length=1000)
    source: Optional[str] = Field(default=None, max_length=120)

    @field_validator("mobile")
    @classmethod
    def normalize_mobile(cls, v: str) -> str:
        digits = re.sub(r"\D", "", v)
        if len(digits) == 12 and digits.startswith("91"):
            digits = digits[2:]
        if not re.fullmatch(r"[6-9]\d{9}", digits):
            raise ValueError("Enter a valid 10-digit Indian mobile number")
        return digits

    @field_validator("project")
    @classmethod
    def check_project(cls, v: str) -> str:
        return v if v in VALID_PROJECTS else "other"

    @field_validator("intent")
    @classmethod
    def check_intent(cls, v: str) -> str:
        return v if v in VALID_INTENTS else "enquiry"


@api_router.get("/")
async def root():
    return {"message": "Platinum Group API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/leads", status_code=201)
async def create_lead(payload: LeadCreate):
    doc = payload.model_dump()
    doc.update({
        "id": str(uuid.uuid4()),
        "created_at": datetime.now(timezone.utc).isoformat(),
        "status": "new",
    })
    await db.leads.insert_one(doc)
    asyncio.create_task(notify_lead_email(doc))
    return {"ok": True, "id": doc["id"]}


@api_router.get("/leads")
async def list_leads():
    return await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
