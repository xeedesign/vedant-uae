import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES, type Service } from "../data/content";
import type { PageKey } from "../components/Navbar";
import PageHero from "../components/PageHero";
import { Eyebrow, Marquee, PageShell, ParallaxImage, PillButton, Reveal } from "../components/ui";

export default function ServiceDetail({
  service,
  go,
}: {
  service: Service;
  go: (p: PageKey) => void;
}) {
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const TITLE_LINES: Record<string, string[]> = {
    nvocc: ["NVOCC"],
    "international-freight-forwarding": ["International", "Freight", "Forwarding"],
    "door-to-door-delivery": ["Door to Door", "Delivery"],
    "cross-trade-services": ["Cross Trade", "Services"],
    "custom-clearance": ["Custom", "Clearance"],
    "road-transport": ["Road", "Transport"],
    warehousing: ["Warehousing"],
    "cargo-insurance": ["Cargo", "Insurance"],
  };
  const titleLines = TITLE_LINES[service.slug] || [service.title];

  return (
    <PageShell>
      <PageHero
        go={go}
        eyebrow={`Service ${service.index} · ${service.mode}`}
        lines={titleLines}
        sub={service.description}
        image={service.image}
        crumbs={[
          { label: "Home", page: "home" },
          { label: "Services", page: "services" },
          { label: service.title },
        ]}
      />

      <div className="border-y-4 border-navy-950 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 pr-6 font-display text-base uppercase text-white">
              {service.title} <span className="h-2 w-2 rounded-full bg-white/60" />
              {service.mode} <span className="h-2 w-2 rounded-full bg-white/60" />
            </div>
          ))}
        </Marquee>
      </div>

      {/* body */}
      <section className="bg-cream-light px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-[1.02] text-navy-900 md:text-5xl">
                {service.short}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {service.long.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p
                    className={
                      i === 0
                        ? "border-l-4 border-vedant pl-5 text-[16px] font-medium leading-relaxed text-navy-900 md:text-lg"
                        : "text-[15px] leading-relaxed text-navy-900/72 md:text-[16px]"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="card-sheen mt-8 overflow-hidden rounded-[28px] shadow-2xl">
                <ParallaxImage src={service.image} alt={service.title} className="h-[320px] md:h-[420px]" />
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <div className="space-y-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="rounded-[28px] bg-navy-950 p-7 shadow-2xl">
                <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant-light">
                  Key capabilities
                </div>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[14px] font-medium leading-snug text-cream/85">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-vedant" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-white/12 pt-6">
                  <PillButton variant="red" onClick={() => go("contact")} className="w-full justify-center">
                    Get a quote
                  </PillButton>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[28px] border border-navy-900/12 bg-white p-7 shadow-lg">
                <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant">
                  All services
                </div>
                <div className="mt-4 space-y-1">
                  {SERVICES.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => go(`service-${s.slug}` as PageKey)}
                      className={`group flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left font-grotesk text-[13px] font-bold transition ${
                        s.slug === service.slug
                          ? "bg-navy-950 text-cream"
                          : "text-navy-900/70 hover:bg-cream"
                      }`}
                    >
                      <span>
                        <span className="mr-2 text-vedant">{s.index}</span>
                        {s.title}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* more services */}
      <section className="bg-cream px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>Keep exploring</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-navy-900 md:text-5xl">More services</h2>
            </div>
            <button
              onClick={() => go("services")}
              className="hidden cursor-pointer items-center gap-2 font-grotesk text-[13px] font-bold uppercase tracking-[0.16em] text-vedant md:inline-flex"
            >
              All services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {others.map((s) => (
              <Reveal key={s.slug}>
                <button
                  onClick={() => go(`service-${s.slug}` as PageKey)}
                  className="group w-full cursor-pointer overflow-hidden rounded-[24px] bg-navy-950 text-left shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <div className="font-display text-lg text-cream">{s.title}</div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-vedant text-white transition group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* prev / next */}
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <button
              onClick={() => go(`service-${prev.slug}` as PageKey)}
              className="group flex cursor-pointer items-center gap-4 rounded-[24px] border border-navy-900/12 bg-white p-5 text-left transition hover:bg-navy-950"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-cream transition group-hover:bg-vedant">
                <ArrowLeft className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-navy-900/50 transition group-hover:text-cream/60">
                  Previous · {prev.index}
                </span>
                <span className="block font-display text-xl text-navy-900 transition group-hover:text-cream">
                  {prev.title}
                </span>
              </span>
            </button>
            <button
              onClick={() => go(`service-${next.slug}` as PageKey)}
              className="group flex cursor-pointer items-center justify-end gap-4 rounded-[24px] border border-navy-900/12 bg-white p-5 text-right transition hover:bg-navy-950"
            >
              <span>
                <span className="block font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-navy-900/50 transition group-hover:text-cream/60">
                  Next · {next.index}
                </span>
                <span className="block font-display text-xl text-navy-900 transition group-hover:text-cream">
                  {next.title}
                </span>
              </span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-900 text-cream transition group-hover:bg-vedant">
                <ArrowRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
