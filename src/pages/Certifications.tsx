import { motion } from "framer-motion";
import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/content";
import type { PageKey } from "../components/Navbar";
import PageHero from "../components/PageHero";
import { Eyebrow, Marquee, PageShell, PillButton, Reveal } from "../components/ui";

export default function Certifications({ go }: { go: (p: PageKey) => void }) {
  return (
    <PageShell>
      <PageHero
        go={go}
        eyebrow="Our Certifications"
        lines={["Certified", "excellence in", "global logistics."]}
        sub="Vedant Ocean Container Line LLC is committed to maintaining the highest standards of quality, compliance, and operational excellence."
        image="https://images.pexels.com/photos/4941340/pexels-photo-4941340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        crumbs={[{ label: "Home", page: "home" }, { label: "Our Certifications" }]}
      />

      <div className="border-y-4 border-navy-950 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 pr-6 font-display text-base uppercase text-white">
              ISO <span className="h-2 w-2 rounded-full bg-white/60" />
              MTO <span className="h-2 w-2 rounded-full bg-white/60" />
              MSME <span className="h-2 w-2 rounded-full bg-white/60" />
              FFI · FICCI <span className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          ))}
        </Marquee>
      </div>

      <section className="bg-cream-light px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Certified Excellence</Eyebrow>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-4xl leading-[1] text-navy-900 md:text-5xl">
                  Certified Excellence in Global Logistics & Supply Chain Services
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p className="border-l-4 border-vedant pl-5 text-[15px] leading-relaxed text-navy-900/75 md:text-lg">
                Vedant Ocean Container Line LLC is committed to maintaining the highest
                standards of quality, compliance, and operational excellence. Our
                industry-recognized certifications reflect our dedication to delivering reliable,
                secure, and efficient logistics solutions. These credentials demonstrate our
                commitment to international best practices, regulatory compliance, and continuous
                improvement, giving our clients confidence in every shipment we handle.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-[28px] border border-navy-900/10 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-vedant/10 transition-all duration-500 group-hover:scale-[3]" />
                <div className="relative">
                  <div className="flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-cream p-3">
                    <img src={c.image} alt={c.name} className="max-h-full w-auto object-contain" />
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-vedant" />
                    <h3 className="font-display text-xl text-navy-900">{c.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* trust band */}
          <Reveal>
            <div className="grain relative mt-12 overflow-hidden rounded-[32px] bg-navy-950 p-8 md:p-12">
              <div className="dotted-map pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex items-center gap-3 font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant-light">
                    <Award className="h-5 w-5" /> Confidence in every shipment
                  </div>
                  <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-cream md:text-4xl">
                    International best practices. Regulatory compliance. Continuous improvement.
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Quality", "Compliance", "Security", "Efficiency", "Reliability"].map((t) => (
                      <span key={t} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-cream/80">
                        <ShieldCheck className="h-3.5 w-3.5 text-vedant-light" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
                <PillButton variant="red" onClick={() => go("contact")} className="shrink-0">
                  Ship with confidence
                </PillButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
