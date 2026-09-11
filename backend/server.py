import os
import re
import logging
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

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
