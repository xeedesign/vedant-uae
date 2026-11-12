import { motion } from "framer-motion";
import {
  Anchor,
  Award,
  Clock,
  Globe2,
  HeartHandshake,
  Radar,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { ABOUT_COPY, CONTACT_INFO, GLOBAL_HUBS, STATS } from "../data/content";
import type { PageKey } from "../components/Navbar";
import PageHero from "../components/PageHero";
import { Counter, Eyebrow, Marquee, PageShell, ParallaxImage, PillButton, Reveal } from "../components/ui";

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Ethical Practices",
    text: "A skilled and dedicated team committed to ethical practices in every shipment, every port, every time.",
  },
  {
    icon: Anchor,
    title: "Flexibility",
    text: "Flexible, customer-centric routing across air, ocean, rail and road — adapted to your business, not the other way around.",
  },
  {
    icon: Clock,
    title: "On-time Satisfaction",
    text: "Delivering customer satisfaction on time — the calm certainty of a team that has done this thousands of times.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    text: "Reliable, secure and timely services through a strong global network of partners and agents.",
  },
];

const PILLARS = [
  { icon: UserCheck, t: "24 Hours Support", d: "Round-the-clock assistance for every consignment." },
  { icon: Globe2, t: "Global Supply Chain", d: "UAE · Far East · Middle East · Europe · UK · US." },
  { icon: Radar, t: "Shipment Tracking", d: "Paperwork, customs codes & port windows — obsessed." },
  { icon: ShieldCheck, t: "Careful Handling", d: "Your goods are in safe hands with Vedant." },
];

export default function About({ go }: { go: (p: PageKey) => void }) {
  return (
    <PageShell>
      <PageHero
        go={go}
        eyebrow={ABOUT_COPY.eyebrow}
        lines={[ABOUT_COPY.titleA, ABOUT_COPY.titleB, ABOUT_COPY.titleC]}
        sub="Vedant Ocean Container Line LLC, an extension of Vedant Clearing Pvt. Ltd. — comprehensive NVOCC and international freight forwarding, taking your business around the globe."
        image="https://images.pexels.com/photos/3848789/pexels-photo-3848789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        crumbs={[{ label: "Home", page: "home" }, { label: "About Us" }]}
      />

      {/* red strip */}
      <div className="border-y-4 border-navy-950 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 pr-6 font-display text-base uppercase text-white md:text-lg">
              Two-decade-old logistics group
              <span className="h-2 w-2 rounded-full bg-white/60" />
              Six continents
              <span className="h-2 w-2 rounded-full bg-white/60" />
              Ethical · Flexible · On-time
              <span className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* who we are */}
      <section className="bg-cream-light px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-navy-900 md:text-6xl">
                An extension of a <span className="text-vedant">two-decade</span> legacy.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[16px] leading-relaxed text-navy-900/78 md:text-lg">
                {ABOUT_COPY.body}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.slice(0, 4).map((s) => (
                  <div key={s.label} className="rounded-3xl border border-navy-900/10 bg-white p-5 shadow-md">
                    <div className="font-display text-3xl text-navy-900 md:text-4xl">
                      <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                    </div>
                    <div className="mt-1 font-grotesk text-[11px] font-black uppercase tracking-[0.18em] text-vedant">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <div className="space-y-5">
            <Reveal>
              <div className="card-sheen overflow-hidden rounded-[28px] shadow-2xl">
                <ParallaxImage
                  src="https://vedantgroup.org/wp-content/uploads/2026/08/Container-Ship-at-International-Port-1.jpg"
                  alt="Vedant port operations"
                  className="h-[300px] md:h-[380px]"
                />
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-[24px] shadow-xl">
                  <img
                    src="https://vedantgroup.org/wp-content/uploads/2026/08/Global-Container-Shipping-Logistics-1.jpg"
                    alt="Global shipping"
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110 md:h-56"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="flex h-48 flex-col justify-between rounded-[24px] bg-navy-950 p-5 md:h-56">
                  <Award className="h-8 w-8 text-vedant-light" />
                  <div>
                    <div className="font-display text-lg leading-tight text-cream">{CONTACT_INFO.bestBadge}</div>
                    <div className="mt-1 font-grotesk text-[11px] font-bold uppercase tracking-[0.2em] text-cream/50">
                      NVOCC · Freight Forwarding
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* leader */}
      <section className="grain relative overflow-hidden bg-navy-950 px-5 py-20 md:px-10 md:py-28">
        <div className="dotted-map pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-vedant/20 blur-[140px]" />
        <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[36px] border border-vedant/40" />
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="https://images.pexels.com/photos/4483556/pexels-photo-4483556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt={ABOUT_COPY.leader}
                  className="h-[440px] w-full object-cover md:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                    <div className="font-display text-2xl text-cream">{ABOUT_COPY.leader}</div>
                    <div className="mt-1 font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant-light">
                      {ABOUT_COPY.role}
                    </div>
                  </div>
                </div>
              </div>
              {/* rotating badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -right-8 -top-8 grid h-28 w-28 place-items-center rounded-full bg-vedant text-center shadow-2xl"
              >
                <div className="font-grotesk text-[10px] font-black uppercase leading-tight tracking-[0.2em] text-white">
                  20+<br />Years<br />Legacy
                </div>
              </motion.div>
            </div>
          </Reveal>
          <div>
            <Eyebrow light>Leadership</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl leading-[1] text-cream md:text-6xl">
                At the helm of affairs — calm, certain, <span className="text-vedant-light">customer-first.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-[16px] leading-relaxed text-cream/70 md:text-lg">
                Led by Managing Director {ABOUT_COPY.leader}, Vedant Clearing Pvt. Ltd. and Vedant
                Ocean Container Line LLC have built a strong reputation in the logistics and supply chain
                industry. With over two decades of experience, he leads a skilled and dedicated
                team committed to ethical practices, flexibility, and delivering customer
                satisfaction on time.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="rounded-3xl border border-white/12 bg-white/5 p-5 backdrop-blur transition hover:border-vedant/60 hover:bg-white/8"
                >
                  <v.icon className="h-7 w-7 text-vedant-light" />
                  <div className="mt-3 font-grotesk text-[15px] font-black uppercase tracking-[0.08em] text-cream">
                    {v.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="bg-cream px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <Eyebrow className="justify-center">Why Vedant</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1] text-navy-900 md:text-6xl">
                Four pillars. Zero compromise.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="group rounded-[26px] border border-navy-900/10 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-navy-950 hover:shadow-2xl"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-vedant/10 text-vedant transition group-hover:bg-vedant group-hover:text-white">
                  <p.icon className="h-7 w-7" />
                </div>
                <div className="mt-5 font-display text-xl text-navy-900 transition group-hover:text-cream">
                  {p.t}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60 transition group-hover:text-cream/65">
                  {p.d}
                </p>
                <div className="mt-4 font-display text-4xl text-navy-900/8 transition group-hover:text-white/10">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* network strip */}
          <Reveal>
            <div className="mt-12 overflow-hidden rounded-[28px] bg-navy-950 p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant-light">
                    Outstanding connectivity
                  </div>
                  <h3 className="mt-2 max-w-xl font-display text-3xl leading-tight text-cream md:text-4xl">
                    Network across the UAE, Far East, Middle East, Europe, UK, US & global hubs.
                  </h3>
                </div>
                <PillButton variant="red" onClick={() => go("services")}>
                  See what we do
                </PillButton>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {GLOBAL_HUBS.map((h) => (
                  <span key={h.region} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-cream/80">
                    {h.region} · {h.ports}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
