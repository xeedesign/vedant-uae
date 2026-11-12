import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "../data/content";

export default function Preloader({ done }: { done: () => void }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 2000;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setExit(true), 300);
        setTimeout(() => done(), 1250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-navy-950 px-6 py-6 md:px-12 md:py-8"
      animate={exit ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-cream p-1">
            <img src={BRAND.logoDark} alt="Vedant Ocean Container Line LLC" className="h-full w-full object-contain" />
          </div>
          <div className="font-grotesk text-[11px] font-bold uppercase tracking-[0.3em] text-cream/70">
            Vedant Ocean Container Line LLC
          </div>
        </div>
        <div className="hidden items-center gap-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50 md:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-vedant" />
          Loading experience
        </div>
      </div>

      {/* center image */}
      <div className="flex flex-1 items-center justify-center py-6">
        <motion.div
          initial={{ clipPath: "inset(12% 18% 12% 18% round 28px)", scale: 0.92 }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)", scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[36vh] w-full max-w-4xl overflow-hidden md:h-[42vh]"
        >
          <motion.img
            src="https://images.pexels.com/photos/14392678/pexels-photo-14392678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            alt="Container ship"
            className="h-full w-full object-cover"
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-white/25 bg-white/10 px-6 py-2 font-grotesk text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-md">
            Worldwide shipping · Simplified
          </div>
        </motion.div>
      </div>

      {/* bottom counter */}
      <div className="flex items-end justify-between">
        <div className="font-display text-[24vw] leading-[0.8] text-cream md:text-[10vw]">
          {count}
          <span className="text-vedant">%</span>
        </div>
        <div className="mb-3 hidden max-w-[220px] text-right font-grotesk text-[12px] font-semibold uppercase tracking-[0.2em] text-cream/50 md:block">
          Around the globe, deliver operational with excellence
        </div>
      </div>

      {/* progress line */}
      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-white/10">
        <div
          className="h-full bg-vedant transition-[width] duration-100"
          style={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  );
}
