import { ArrowUpRight, Mail, MapPin, Phone, Ship } from "lucide-react";
import { BRAND, CONTACT_INFO, SERVICES } from "../data/content";
import type { PageKey } from "./Navbar";
import { Reveal, Marquee } from "./ui";

export default function Footer({ go }: { go: (p: PageKey) => void }) {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream">
      {/* red marquee divider */}
      <div className="border-y border-white/10 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 pr-6 font-grotesk text-[13px] font-black uppercase tracking-[0.25em] text-white">
              <Ship className="h-4 w-4" />
              {CONTACT_INFO.bestBadge}
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              Worldwide Shipping · Simplified
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* big CTA */}
      <div className="relative px-5 pt-16 md:px-12 md:pt-24">
        <Reveal>
          <div className="mx-auto max-w-[1400px] text-center">
            <div className="mb-5 flex items-center justify-center gap-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.3em] text-cream/60">
              <span className="h-[2px] w-10 bg-vedant" /> Contact Us
              <span className="h-[2px] w-10 bg-vedant" />
            </div>
            <h2 className="font-display text-[11vw] leading-[0.9] md:text-[6.5vw]">
              Ready to ship
              <br />
              <span className="text-vedant">smarter, safer,</span> sooner?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-cream/65 md:text-lg">
              Tell us about your shipment. Our team responds with a tailored quote within two hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => go("contact")}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-vedant px-9 py-4 font-grotesk text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_20px_50px_-12px_rgba(226,37,19,0.7)] transition hover:bg-vedant-dark"
              >
                Request Quote
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </button>
              <a
                href={CONTACT_INFO.phoneUAEHref}
                className="inline-flex items-center gap-3 rounded-full border border-cream/25 px-9 py-4 font-grotesk text-sm font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-cream hover:text-navy-900"
              >
                <Phone className="h-4 w-4" /> {CONTACT_INFO.phoneUAE}
              </a>
            </div>
          </div>
        </Reveal>

        {/* columns */}
        <div className="mx-auto mt-16 grid max-w-[1400px] gap-10 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 inline-block overflow-hidden rounded-2xl bg-white p-2">
              <img src={BRAND.logoDark} alt="Vedant Ocean Container Line LLC" className="h-14 w-auto object-contain" />
            </div>
            <div className="mb-3 font-grotesk text-[12px] font-black uppercase tracking-[0.25em] text-vedant">
              About Vedant
            </div>
            <p className="text-sm leading-relaxed text-cream/60">{CONTACT_INFO.footerAbout}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-vedant/50 bg-vedant/10 px-4 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.18em] text-vedant-light">
              <Ship className="h-3.5 w-3.5" /> {CONTACT_INFO.bestBadge}
            </div>
          </div>

          <div>
            <div className="mb-5 font-grotesk text-[12px] font-black uppercase tracking-[0.25em] text-cream/50">
              Useful Links
            </div>
            <ul className="space-y-3 font-grotesk text-[15px] font-semibold">
              {[
                { l: "About Us", p: "about" as PageKey },
                { l: "Services", p: "services" as PageKey },
                { l: "Our Certifications", p: "certifications" as PageKey },
                { l: "Contact", p: "contact" as PageKey },
              ].map((x) => (
                <li key={x.l}>
                  <button
                    onClick={() => go(x.p)}
                    className="group flex cursor-pointer items-center gap-2 text-cream/75 transition hover:text-cream"
                  >
                    <span className="h-[2px] w-0 bg-vedant transition-all duration-300 group-hover:w-5" />
                    {x.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 font-grotesk text-[12px] font-black uppercase tracking-[0.25em] text-cream/50">
              Our Services
            </div>
            <ul className="space-y-3 font-grotesk text-[15px] font-semibold">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => go(`service-${s.slug}` as PageKey)}
                    className="group flex cursor-pointer items-center gap-2 text-cream/75 transition hover:text-cream"
                  >
                    <span className="h-[2px] w-0 bg-vedant transition-all duration-300 group-hover:w-5" />
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 font-grotesk text-[12px] font-black uppercase tracking-[0.25em] text-cream/50">
              Head Office
            </div>
            <div className="space-y-5 text-sm leading-relaxed">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-vedant-light">
                  <MapPin className="h-3.5 w-3.5" /> United Arab Emirates
                </div>
                <p className="text-cream/70">{CONTACT_INFO.addressUAE}</p>
                <a href={CONTACT_INFO.phoneUAEHref} className="mt-2 flex items-center gap-2 font-semibold text-cream">
                  <Phone className="h-3.5 w-3.5 text-vedant" /> {CONTACT_INFO.phoneUAE}
                </a>
                <a href={`mailto:${CONTACT_INFO.emailUAE}`} className="mt-1 flex items-center gap-2 text-cream/70 hover:text-cream">
                  <Mail className="h-3.5 w-3.5 text-vedant" /> {CONTACT_INFO.emailUAE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* giant word */}
      <div className="pointer-events-none mt-10 select-none overflow-hidden px-2">
        <div className="font-display whitespace-nowrap text-center text-[18vw] leading-[0.8] text-white/[0.05]">
          VEDANT
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-5 font-grotesk text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/45 md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Vedant Ocean Container Line LLC</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-vedant" />
            {BRAND.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
