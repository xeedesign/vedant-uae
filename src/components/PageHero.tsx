import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { PageKey } from "./Navbar";
import { SplitLines } from "./ui";

export default function PageHero({
  eyebrow,
  lines,
  sub,
  image,
  crumbs,
  go,
}: {
  eyebrow: string;
  lines: string[];
  sub?: string;
  image: string;
  crumbs: { label: string; page?: PageKey }[];
  go: (p: PageKey) => void;
}) {
  return (
    <section className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden bg-navy-950">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt={eyebrow} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/55 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/25 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-12 pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="flex flex-wrap items-center gap-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.22em] text-cream/60"
        >
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-vedant" />}
              {c.page ? (
                <button onClick={() => go(c.page!)} className="cursor-pointer transition hover:text-cream">
                  {c.label}
                </button>
              ) : (
                <span className="text-cream">{c.label}</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-5 flex items-center gap-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.28em] text-cream/85"
        >
          <span className="h-[2px] w-12 bg-vedant" />
          {eyebrow}
        </motion.div>

        <SplitLines
          lines={lines}
          className="mt-4"
          lineClassName="hero-giant text-cream text-[10.5vw] sm:text-[9vw] md:text-[6.6vw] lg:text-[6vw]"
          delay={0.35}
        />

        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-6 max-w-2xl font-grotesk text-base font-medium leading-relaxed text-cream/75 md:text-xl"
          >
            {sub}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-[5px] w-full bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full origin-left bg-vedant"
        />
      </div>
    </section>
  );
}
