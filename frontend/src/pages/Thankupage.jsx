import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { waLink } from "../lib/config";

export default function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ink px-6 py-20">
      <div className="w-full max-w-lg flex flex-col items-start gap-6">
        <span className="flex h-14 w-14 items-center justify-center border border-gold text-gold">
          <Check size={24} />
        </span>

        <p className="font-mono text-[11px] tracking-[0.3em] text-gold">
          REQUEST RECEIVED
        </p>

        <h1 className="font-display text-4xl text-bone md:text-5xl leading-tight">
          THANK YOU FOR
          <br />
          REACHING OUT.
        </h1>

        <p className="max-w-md font-body text-sm leading-relaxed text-platinum/70">
          Our senior team has received your enquiry and will get in touch with
          you shortly. For an immediate conversation, feel free to reach us
          directly on WhatsApp.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={waLink(
            //   "Hi Platinum Group, I just submitted an enquiry on your website and wanted to follow up."
            "https://api.whatsapp.com/send/?phone=919660223377&text=Hi+Platinum+Group%2C+I%27m+interested+in+Platinum+Greens+Opulence+and+would+like+more+details.&type=phone_number&app_absent=0"
            )}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-eglow/50 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-eglow transition-colors hover:bg-eglow hover:text-ink"
          >
            CONTINUE ON WHATSAPP <ArrowUpRight size={13} />
          </a>

          <Link
            to="/"
            className="flex items-center gap-2 border border-white/15 px-6 py-3 font-mono text-[11px] tracking-[0.25em] text-platinum/70 transition-colors hover:border-white/40 hover:text-bone"
          >
            BACK TO HOME
          </Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 w-full">
          <p className="font-mono text-[10px] tracking-[0.3em] text-platinum/40">
            PLATINUM GROUP
          </p>
        </div>
      </div>
    </section>
  );
}