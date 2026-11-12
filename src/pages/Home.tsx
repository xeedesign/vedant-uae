import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Clock,
  Container,
  Globe2,
  Package,
  Quote,
  Ship,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  BRAND,
  CERTIFICATIONS,
  GLOBAL_HUBS,
  HOME_COPY,
  SERVICES,
  STATS,
  WHY_CHOOSE,
  CONTACT_INFO,
} from "../data/content";
import type { PageKey } from "../components/Navbar";
import {
  ArrowLink,
  Counter,
  Eyebrow,
  Marquee,
  PageShell,
  ParallaxImage,
  PillButton,
  Reveal,
  SplitLines,
} from "../components/ui";

export default function Home({ go }: { go: (p: PageKey) => void }) {
  const [hoverService, setHoverService] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageShell>
      {/* ============ HERO — Manuport giant type over video ============ */}
      <section ref={heroRef} className="relative flex min-h-[108svh] flex-col overflow-hidden bg-navy-950">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/photos/14392678/pexels-photo-14392678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            className="h-full w-full object-cover"
          >
            <source src={BRAND.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/45 to-navy-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroFade }} className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-end px-5 pb-10 pt-36 md:px-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-5 flex items-center gap-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.28em] text-cream/80 md:text-[13px]"
          >
            <span className="h-[2px] w-12 bg-vedant" />
            {HOME_COPY.eyebrow}
          </motion.div>

          <SplitLines
            lines={[HOME_COPY.heroLine1, HOME_COPY.heroLine2, HOME_COPY.heroLine3]}
            className="hero-giant text-cream"
            lineClassName="hero-giant text-[13vw] sm:text-[12vw] md:text-[9.5vw] lg:text-[8.8vw]"
            delay={0.35}
          />

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-xl font-grotesk text-lg font-medium leading-snug text-cream/85 md:text-2xl"
            >
              {HOME_COPY.heroSub}
              <span className="mt-3 block text-sm font-normal text-cream/60 md:text-base">
                NVOCC · International Freight Forwarding · Door-to-Door · Cross Trade — from a
                single port in Dubai to consignees across six continents.
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3"
            >
              <PillButton variant="red" onClick={() => go("contact")}>
                Request Quote
              </PillButton>
              <PillButton variant="outline-light" onClick={() => go("about")}>
                About Us
              </PillButton>
            </motion.div>
          </div>

          {/* hero bottom meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-10 flex items-center justify-between border-t border-white/15 pt-5 font-grotesk text-[11px] font-bold uppercase tracking-[0.22em] text-cream/60"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 animate-bounce place-items-center rounded-full border border-white/25">
                <ArrowDown className="h-4 w-4" />
              </span>
              Scroll to explore
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <span className="flex items-center gap-2">
                <Ship className="h-4 w-4 text-vedant" /> 60+ Countries
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-vedant" /> 99.6% On-time
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-vedant" /> 2-hr quote response
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* floating experience badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-6 top-32 z-10 hidden lg:block xl:right-14"
        >
          <div className="relative grid h-36 w-36 place-items-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
              <defs>
                <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-cream/80 font-grotesk" fontSize="9.2" fontWeight="700" letterSpacing="2.5">
                <textPath href="#circ">TWO DECADES • GLOBAL REACH • VEDANT •</textPath>
              </text>
            </svg>
            <div className="grid h-16 w-16 place-items-center rounded-full bg-vedant text-white shadow-2xl">
              <Container className="h-7 w-7" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ============ RED MARQUEE ============ */}
      <div className="relative z-20 -mt-1 border-y-4 border-navy-950 bg-vedant py-4">
        <Marquee>
          {SERVICES.concat(SERVICES).map((s, i) => (
            <button
              key={i}
              onClick={() => go(`service-${s.slug}` as PageKey)}
              className="group flex cursor-pointer items-center gap-4 pr-8 font-display text-lg uppercase text-white md:text-xl"
            >
              {s.title}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-white/40 transition group-hover:bg-white group-hover:text-vedant">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          ))}
        </Marquee>
      </div>

      {/* ============ INTRO — sticky title + image stack ============ */}
      <section className="relative bg-cream-light px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Who we are</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-navy-900 md:text-6xl">
                Optimizing logistics, <span className="text-vedant">sourcing,</span> global supply
                solutions.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-navy-900/75 md:text-[17px]">
                <p>{HOME_COPY.intro1}</p>
                <p className="border-l-4 border-vedant pl-5 font-medium text-navy-900">
                  {HOME_COPY.intro2}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton variant="navy" onClick={() => go("about")}>
                  More About Us
                </PillButton>
                <PillButton variant="outline-navy" onClick={() => go("services")}>
                  All Services
                </PillButton>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            {[
              "https://vedantgroup.org/wp-content/uploads/2026/08/Container-Ship-at-International-Port-1.jpg",
              "https://vedantgroup.org/wp-content/uploads/2026/08/Global-Container-Shipping-Logistics-1.jpg",
              "https://vedantgroup.org/wp-content/uploads/2026/08/Novcc-Shipping-1.jpg",
            ].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div className={`card-sheen group relative overflow-hidden rounded-[28px] shadow-2xl ${i === 1 ? "ml-0 md:ml-14" : i === 2 ? "ml-0 md:mr-14" : ""}`}>
                  <ParallaxImage src={src} alt="Vedant logistics" className="h-[280px] md:h-[360px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <span className="rounded-full bg-vedant px-4 py-1.5 font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-white">
                      {["Ocean Freight", "Global Network", "NVOCC Line"][i]}
                    </span>
                  </div>
                  <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-cream/90 font-display text-lg text-navy-900 backdrop-blur">
                    0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="grain relative overflow-hidden bg-navy-950 px-5 py-16 md:px-10 md:py-20">
        <div className="dotted-map pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-vedant/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy-600/30 blur-[120px]" />
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`px-6 text-center ${i !== 0 ? "lg:border-l lg:border-white/12" : ""}`}>
                <div className="font-display text-5xl text-cream md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-2 font-grotesk text-[11px] font-black uppercase tracking-[0.24em] text-vedant-light">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICES — Manuport "How we Move" list ============ */}
      <section className="relative bg-cream px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <Reveal delay={0.05}>
                <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.98] text-navy-900 md:text-7xl">
                  Welcome to <span className="text-vedant">Vedant</span> Ocean Container Line LLC
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-900/70 md:text-lg">
                  {HOME_COPY.welcomeText}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="max-w-xs rounded-3xl border border-navy-900/12 bg-white/70 p-5 backdrop-blur">
                <div className="font-grotesk text-[11px] font-black uppercase tracking-[0.22em] text-vedant">
                  — {HOME_COPY.additionalTitle}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/75">{HOME_COPY.additionalText}</p>
              </div>
            </Reveal>
          </div>

          {/* floating hover image (desktop) */}
          <div className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block">
            <motion.div
              animate={{
                opacity: hoverService ? 1 : 0,
                scale: hoverService ? 1 : 0.8,
                rotate: hoverService ? 3 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {hoverService && (
                <img
                  src={SERVICES.find((s) => s.slug === hoverService)?.image}
                  alt=""
                  className="h-56 w-80 rounded-3xl object-cover shadow-2xl"
                  style={{ transform: "translate(0,0)" }}
                  id="hover-preview"
                />
              )}
            </motion.div>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px] border border-navy-900/10 bg-cream-light shadow-xl">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)} y={20}>
                <button
                  onClick={() => go(`service-${s.slug}` as PageKey)}
                  onMouseEnter={(e) => {
                    setHoverService(s.slug);
                    const img = document.getElementById("hover-preview");
                    if (img) {
                      const move = (ev: MouseEvent) => {
                        img.style.position = "fixed";
                        img.style.left = ev.clientX + 24 + "px";
                        img.style.top = ev.clientY - 110 + "px";
                      };
                      move(e.nativeEvent as unknown as MouseEvent);
                    }
                  }}
                  onMouseMove={(e) => {
                    const img = document.getElementById("hover-preview");
                    if (img) {
                      img.style.position = "fixed";
                      img.style.left = (e.clientX as number) + 24 + "px";
                      img.style.top = (e.clientY as number) - 110 + "px";
                    }
                  }}
                  onMouseLeave={() => setHoverService(null)}
                  className={`group flex w-full cursor-pointer items-center gap-4 px-5 py-5 text-left transition-all duration-300 hover:bg-navy-950 md:gap-8 md:px-10 md:py-6 ${i !== 0 ? "border-t border-navy-900/10" : ""}`}
                >
                  <span className="font-display text-sm text-vedant md:text-base">{s.index}</span>
                  <span className="hidden h-14 w-20 shrink-0 overflow-hidden rounded-xl md:block lg:hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl leading-tight text-navy-900 transition group-hover:text-cream md:text-3xl">
                      {s.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-[13px] leading-relaxed text-navy-900/55 transition group-hover:text-cream/65 md:text-sm">
                      {s.short}
                    </span>
                  </span>
                  <span className="hidden rounded-full border border-navy-900/15 px-4 py-1.5 font-grotesk text-[11px] font-bold uppercase tracking-[0.14em] text-navy-900/60 transition group-hover:border-white/25 group-hover:text-cream/70 xl:block">
                    {s.mode}
                  </span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-cream transition-all duration-300 group-hover:rotate-45 group-hover:bg-vedant md:h-14 md:w-14">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 text-center">
              <PillButton variant="red" onClick={() => go("services")}>
                Explore All Services
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE US — Manuport "We're Different Because" ============ */}
      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 md:px-10 md:py-28">
        <div className="dotted-map pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-[1400px]">
          <Eyebrow light>{HOME_COPY.whyEyebrow}</Eyebrow>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={0.05}>
              <h2 className="max-w-3xl font-display text-4xl leading-[0.98] text-cream md:text-6xl">
                {HOME_COPY.whyTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-md text-[15px] leading-relaxed text-cream/65 md:text-lg">
                {HOME_COPY.whyText}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {WHY_CHOOSE.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex min-h-[480px] flex-col justify-end overflow-hidden rounded-[26px]"
              >
                <img
                  src={w.image}
                  alt={w.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full bg-cream/15 px-4 py-1.5 font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-cream backdrop-blur-md">
                    {w.tag}
                  </span>
                </div>
                <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-vedant font-display text-base text-white">
                  0{i + 1}
                </div>
                <div className="relative p-6">
                  <h3 className="font-display text-[22px] leading-tight text-cream">{w.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/70 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {w.text}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70 transition-all duration-500 group-hover:hidden">
                    {w.text.slice(0, 72)}…
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-vedant transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GLOBAL PRESENCE — Manuport "Our Locations" ============ */}
      <section className="relative overflow-hidden bg-cream-light px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <Eyebrow className="justify-center">Our Global Presence</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[0.98] text-navy-900 md:text-6xl">
                Around the world, our teams move <span className="text-vedant">your business.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] text-navy-900/65 md:text-lg">
                Outstanding connectivity and network in important ports in the UAE,
                Far East, Middle East, Europe, UK, US and other major global trading hubs.
              </p>
            </Reveal>
          </div>

          {/* map panel */}
          <Reveal delay={0.1}>
            <div className="relative mt-12 overflow-hidden rounded-[32px] bg-navy-950 p-6 shadow-2xl md:p-12">
              <div className="dotted-map absolute inset-0 opacity-50" />
              {/* stylised world dots */}
              <div className="relative mx-auto aspect-[16/8] w-full max-w-5xl">
                <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full opacity-25">
                  <path
                    d="M120,200 Q300,80 500,180 T880,160"
                    fill="none"
                    stroke="#E22513"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                  />
                  <path
                    d="M140,260 Q420,380 620,260 T900,300"
                    fill="none"
                    stroke="#F4F1EA"
                    strokeWidth="1.5"
                    strokeDasharray="6 8"
                    opacity="0.7"
                  />
                  <ellipse cx="500" cy="250" rx="470" ry="225" fill="none" stroke="rgba(244,241,234,0.25)" strokeWidth="1" />
                </svg>
                {GLOBAL_HUBS.map((h, i) => (
                  <motion.div
                    key={h.region}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 200, damping: 14 }}
                    className="group absolute"
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  >
                    <div className="relative">
                      <span className="absolute -inset-3 animate-pulse-ring rounded-full bg-vedant/50" style={{ animationDelay: `${i * 0.35}s` }} />
                      <div className="relative grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-vedant text-white shadow-[0_0_30px_rgba(226,37,19,0.8)] transition-transform group-hover:scale-125">
                        <MapPinIcon />
                      </div>
                      <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-48 -translate-x-1/2 rounded-2xl border border-white/15 bg-navy-950/95 p-3 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                        <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.15em] text-cream">
                          {h.region}
                        </div>
                        <div className="mt-1 text-[12px] text-cream/65">{h.ports}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2">
                {GLOBAL_HUBS.map((h) => (
                  <span key={h.region} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.16em] text-cream/80">
                    {h.region}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* location card marquees like Manuport */}
          <div className="mt-8 space-y-4">
            <Marquee slow>
              {[
                                { t: "Jebel Ali · Dubai", img: "https://images.pexels.com/photos/39621561/pexels-photo-39621561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
                { t: "Singapore · Port Klang", img: "https://images.pexels.com/photos/26224666/pexels-photo-26224666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
                { t: "Rotterdam · Antwerp", img: "https://images.pexels.com/photos/4941340/pexels-photo-4941340.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
              ].map((c, i) => (
                <div key={i} className="mx-2 flex w-72 items-center gap-3 rounded-2xl border border-navy-900/10 bg-white p-3 shadow-md">
                  <img src={c.img} alt={c.t} className="h-14 w-20 rounded-xl object-cover" />
                  <div className="font-grotesk text-[13px] font-bold text-navy-900">{c.t}</div>
                </div>
              ))}
            </Marquee>
            <Marquee slow reverse>
              {[
                { t: "Felixstowe · UK", img: "https://images.pexels.com/photos/21728446/pexels-photo-21728446.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
                { t: "New York · Houston", img: "https://images.pexels.com/photos/9222605/pexels-photo-9222605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
                { t: "Dammam · Jeddah", img: "https://images.pexels.com/photos/27603789/pexels-photo-27603789.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
                { t: "Shanghai · Far East", img: "https://images.pexels.com/photos/14392676/pexels-photo-14392676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" },
              ].map((c, i) => (
                <div key={i} className="mx-2 flex w-72 items-center gap-3 rounded-2xl border border-navy-900/10 bg-white p-3 shadow-md">
                  <img src={c.img} alt={c.t} className="h-14 w-20 rounded-xl object-cover" />
                  <div className="font-grotesk text-[13px] font-bold text-navy-900">{c.t}</div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE MOVE / HOW WE MOVE split ============ */}
      <section className="grid lg:grid-cols-2">
        <div className="grain relative overflow-hidden bg-vedant px-6 py-16 md:px-14 md:py-24">
          <Truck className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 text-white/10" />
          <Eyebrow className="!text-white [&>span]:!bg-white">How we Move</Eyebrow>
          <Reveal delay={0.05}>
            <h3 className="mt-4 font-display text-4xl leading-[0.98] text-white md:text-5xl">
              Ship, plane, truck — or a combination. We move mountains.
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/85">
              Air Cargo (aeroplanes), Ocean Freight (cargo ships), Rail (trains), Road (trucks) —
              Vedant takes pride in providing customised solutions for every shipment, no matter
              the mode.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Ocean", "Air", "Rail", "Road"].map((m) => (
                <span key={m} className="rounded-full border border-white/40 px-5 py-2 font-grotesk text-[12px] font-black uppercase tracking-[0.2em] text-white">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-8">
            <button onClick={() => go("services")} className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-navy-950 px-7 py-3.5 font-grotesk text-[13px] font-bold uppercase tracking-[0.14em] text-cream transition hover:bg-navy-900">
              How we move <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <ParallaxImage
            src="https://images.pexels.com/photos/26224664/pexels-photo-26224664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="How we move"
            className="h-full min-h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <div className="font-grotesk text-[12px] font-bold uppercase tracking-[0.2em] text-white">
              FCL · LCL · Cross Trade · Door-to-Door
            </div>
            <Package className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="relative order-3 overflow-hidden lg:order-none">
          <ParallaxImage
            src="https://images.pexels.com/photos/4483556/pexels-photo-4483556.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="What we move"
            className="h-full min-h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <div className="font-grotesk text-[12px] font-bold uppercase tracking-[0.2em] text-white">
              Packaging · Sourcing · Supply Chain
            </div>
            <Globe2 className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="relative overflow-hidden bg-navy-950 px-6 py-16 md:px-14 md:py-24">
          <div className="dotted-map pointer-events-none absolute inset-0 opacity-40" />
          <Eyebrow light>What we Move</Eyebrow>
          <Reveal delay={0.05}>
            <h3 className="mt-4 font-display text-4xl leading-[0.98] text-cream md:text-5xl">
              Behind every shipment lies your growth story.
            </h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/70">
              We can optimize your packaging, manage your materials sourcing, and orchestrate the
              complete supply chain — so you can focus on growth, not paperwork.
            </p>
          </Reveal>
          <div className="mt-8">
            <button onClick={() => go("about")} className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-cream px-7 py-3.5 font-grotesk text-[13px] font-bold uppercase tracking-[0.14em] text-navy-900 transition hover:bg-white">
              What we move <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </section>

      {/* ============ NUMBER ONE / CERTIFICATIONS ============ */}
      <section className="relative bg-cream px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px] text-center">
          <Eyebrow className="justify-center">Number One</Eyebrow>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[0.98] text-navy-900 md:text-6xl">
              Trusted worldwide. <span className="text-vedant">Celebrated locally.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 font-grotesk text-[12px] font-black uppercase tracking-[0.22em] text-cream">
              <Award className="h-4 w-4 text-vedant-light" /> {CONTACT_INFO.bestBadge}
            </div>
          </Reveal>
        </div>
        <div className="mt-12">
          <Marquee>
            {CERTIFICATIONS.concat(CERTIFICATIONS).map((c, i) => (
              <div key={i} className="mx-3 flex w-64 flex-col items-center rounded-3xl border border-navy-900/10 bg-white p-6 shadow-lg">
                <div className="h-16 w-full overflow-hidden rounded-xl bg-cream">
                  <img src={c.image} alt={c.name} className="h-full w-full object-contain p-1" />
                </div>
                <div className="mt-3 font-grotesk text-[13px] font-black uppercase tracking-[0.14em] text-navy-900">
                  {c.name}
                </div>
              </div>
            ))}
          </Marquee>
          <Reveal>
            <div className="mt-8 text-center">
              <ArrowLink onClick={() => go("certifications")}>View all certifications</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ LEADERSHIP TEASER ============ */}
      <section className="relative overflow-hidden bg-navy-950 px-5 py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-vedant/20 blur-[120px]" />
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="card-sheen overflow-hidden rounded-[32px]">
                <img
                  src="https://images.pexels.com/photos/1267329/pexels-photo-1267329.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Vedant leadership"
                  className="h-[420px] w-full object-cover md:h-[520px]"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-vedant p-5 shadow-2xl md:left-10 md:right-auto md:w-80">
                <Quote className="h-6 w-6 text-white/70" />
                <p className="mt-2 font-grotesk text-[15px] font-semibold leading-snug text-white">
                  “Ethical practices, flexibility, and customer satisfaction — on time, every time.”
                </p>
                <div className="mt-3 font-grotesk text-[11px] font-black uppercase tracking-[0.22em] text-white/80">
                  Leadership doctrine
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Eyebrow light>With a heart for logistics</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl leading-[0.98] text-cream md:text-5xl">
                Led by <span className="text-vedant-light">Mr. Mahesh Krishna Minde,</span>{" "}
                Managing Director
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15px] leading-relaxed text-cream/70 md:text-lg">
                With over two decades of experience, he leads a skilled and dedicated team
                committed to ethical practices, flexibility, and delivering customer satisfaction
                on time — from Dubai to six continents.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { icon: ShieldCheck, t: "Reliable" },
                  { icon: BadgeCheck, t: "Secure" },
                  { icon: Clock, t: "Timely" },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-white/12 bg-white/5 p-4 text-center backdrop-blur">
                    <x.icon className="mx-auto h-6 w-6 text-vedant-light" />
                    <div className="mt-2 font-grotesk text-[12px] font-black uppercase tracking-[0.18em] text-cream">
                      {x.t}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton variant="red" onClick={() => go("about")}>
                  Our Story
                </PillButton>
                <PillButton variant="outline-light" onClick={() => go("contact")}>
                  Talk to us
                </PillButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
