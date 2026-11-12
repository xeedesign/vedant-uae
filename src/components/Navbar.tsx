import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Phone, Ship } from "lucide-react";
import { BRAND, CONTACT_INFO, NAV_LINKS, SERVICES } from "../data/content";
import { cn } from "../utils/cn";

export type PageKey =
  | "home"
  | "about"
  | "services"
  | "certifications"
  | "contact"
  | `service-${string}`;

export function pageToHash(p: PageKey): string {
  if (p === "home") return "#/";
  if (p.startsWith("service-")) return `#/services/${p.replace("service-", "")}`;
  return `#/${p}`;
}

export default function Navbar({
  page,
  go,
}: {
  page: PageKey;
  go: (p: PageKey) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const isServicePage = page.startsWith("service-");

  return (
    <>
      {/* top utility strip */}
      <div className="fixed inset-x-0 top-0 z-[60] hidden border-b border-white/10 bg-navy-950/95 backdrop-blur lg:block">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-2 font-grotesk text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/70">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-vedant" />
            {BRAND.tagline}
          </div>
          <div className="flex items-center gap-6">
            <a href={CONTACT_INFO.phoneUAEHref} className="flex items-center gap-2 transition hover:text-cream">
              <Phone className="h-3 w-3" /> {CONTACT_INFO.phoneUAE} · UAE
            </a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500 lg:top-[33px]",
          scrolled ? "bg-navy-950/90 shadow-2xl backdrop-blur-xl" : "bg-gradient-to-b from-navy-950/80 to-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-8">
          {/* logo */}
          <button onClick={() => go("home")} className="group flex cursor-pointer items-center gap-3">
            <div className="relative h-12 overflow-hidden rounded-xl bg-white px-2 py-1 shadow-lg transition-transform duration-300 group-hover:scale-105 md:h-14">
              <img src={BRAND.logoDark} alt="Vedant Ocean Container Line LLC" className="h-full w-auto object-contain" />
            </div>
          </button>

          {/* desktop links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => {
              const active =
                page === l.path || (l.path === "services" && (page === "services" || isServicePage));
              if (l.path === "services") {
                return (
                  <div
                    key={l.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => go("services")}
                      className={cn(
                        "cursor-pointer rounded-full px-5 py-2.5 font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] transition-all",
                        active ? "bg-cream text-navy-900" : "text-cream/85 hover:bg-white/10 hover:text-cream"
                      )}
                    >
                      Services
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 14, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-4"
                        >
                          <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-3xl border border-white/10 bg-navy-950/98 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                            {SERVICES.map((s) => (
                              <button
                                key={s.slug}
                                onClick={() => {
                                  setServicesOpen(false);
                                  go(`service-${s.slug}` as PageKey);
                                }}
                                className="group flex cursor-pointer items-center gap-4 rounded-2xl p-3 text-left transition hover:bg-white/10"
                              >
                                <div className="h-12 w-16 shrink-0 overflow-hidden rounded-xl">
                                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div>
                                  <div className="font-grotesk text-[13px] font-bold text-cream">
                                    {s.title}
                                  </div>
                                  <div className="font-grotesk text-[11px] font-medium uppercase tracking-wider text-cream/50">
                                    {s.mode}
                                  </div>
                                </div>
                                <ArrowUpRight className="ml-auto h-4 w-4 text-vedant opacity-0 transition group-hover:opacity-100" />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <button
                  key={l.path}
                  onClick={() => go(l.path as PageKey)}
                  className={cn(
                    "cursor-pointer rounded-full px-5 py-2.5 font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] transition-all",
                    active ? "bg-cream text-navy-900" : "text-cream/85 hover:bg-white/10 hover:text-cream"
                  )}
                >
                  {l.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="group hidden cursor-pointer items-center gap-2 rounded-full bg-vedant px-6 py-3 font-grotesk text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_36px_-10px_rgba(226,37,19,0.7)] transition-all hover:bg-vedant-dark sm:inline-flex"
            >
              <Ship className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              Request Quote
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/5 text-cream backdrop-blur transition hover:bg-cream hover:text-navy-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* fullscreen mobile menu — Manuport style */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] flex flex-col bg-navy-950"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="h-12 overflow-hidden rounded-xl bg-white px-2 py-1">
                  <img src={BRAND.logoDark} alt="Vedant" className="h-full w-auto object-contain" />
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-vedant text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-8 pt-4">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.07 }}
                >
                  <button
                    onClick={() => {
                      setOpen(false);
                      go(l.path as PageKey);
                    }}
                    className="group flex w-full cursor-pointer items-center justify-between border-b border-white/10 py-4 text-left"
                  >
                    <span className="font-display text-4xl text-cream transition group-hover:text-vedant">
                      {l.label}
                    </span>
                    <span className="font-grotesk text-xs font-bold text-cream/40">0{i + 1}</span>
                  </button>
                </motion.div>
              ))}
              <div className="mt-6 grid grid-cols-2 gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => {
                      setOpen(false);
                      go(`service-${s.slug}` as PageKey);
                    }}
                    className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-3 text-left font-grotesk text-[12px] font-bold uppercase tracking-wider text-cream/80 active:bg-vedant"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-2 font-grotesk text-sm text-cream/70">
                <a href={CONTACT_INFO.phoneUAEHref} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-vedant" /> {CONTACT_INFO.phoneUAE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
