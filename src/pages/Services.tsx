import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/content";
import type { PageKey } from "../components/Navbar";
import PageHero from "../components/PageHero";
import { Eyebrow, Marquee, PageShell, PillButton, Reveal } from "../components/ui";

export default function Services({ go }: { go: (p: PageKey) => void }) {
  return (
    <PageShell>
      <PageHero
        go={go}
        eyebrow="Our Services"
        lines={["Eight ways", "we move", "your world."]}
        sub="Vedant Ocean Container Line LLC is an extension of Vedant Clearing Pvt Ltd. Vedant Ocean Container Line LLC provides comprehensive services in NVOCC, International freight forwarding, taking your business around the globe."
        image="https://images.pexels.com/photos/26224666/pexels-photo-26224666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        crumbs={[{ label: "Home", page: "home" }, { label: "Services" }]}
      />

      <div className="border-y-4 border-navy-950 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 pr-6 font-display text-base uppercase text-white md:text-lg">
              NVOCC <span className="h-2 w-2 rounded-full bg-white/60" />
              Freight Forwarding <span className="h-2 w-2 rounded-full bg-white/60" />
              Door to Door <span className="h-2 w-2 rounded-full bg-white/60" />
              Cross Trade <span className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          ))}
        </Marquee>
      </div>

      <section className="bg-cream-light px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>All capabilities</Eyebrow>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1] text-navy-900 md:text-6xl">
                Comprehensive, flexible, <span className="text-vedant">integrated.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-md text-[15px] text-navy-900/65">
                From NVOCC consolidation to cargo insurance — every service is custom-made to
                provide highly adaptable, reliable solutions for your needs.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.button
                key={s.slug}
                onClick={() => go(`service-${s.slug}` as PageKey)}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-pointer overflow-hidden rounded-[28px] bg-navy-950 text-left shadow-xl transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden md:h-72">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="rounded-full bg-vedant px-4 py-1.5 font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      {s.index}
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-grotesk text-[11px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                      {s.mode}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-5 grid h-14 w-14 place-items-center rounded-full bg-cream text-navy-900 transition-all duration-300 group-hover:rotate-45 group-hover:bg-vedant group-hover:text-white">
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl leading-tight text-cream transition group-hover:text-vedant-light md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-cream/65 md:text-[15px]">
                    {s.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.capabilities.slice(0, 3).map((c) => (
                      <span key={c} className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-cream/70">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-vedant transition-all duration-700 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-vedant p-8 md:flex-row md:p-12">
              <div>
                <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-white/80">
                  Not sure which service fits?
                </div>
                <h3 className="mt-2 font-display text-3xl leading-tight text-white md:text-4xl">
                  Tell us about your shipment — get a tailored quote within two hours.
                </h3>
              </div>
              <PillButton variant="navy" onClick={() => go("contact")} className="shrink-0">
                Request Quote
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
