import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Eyebrow label (Manuport style: — Label) ---------- */
export function Eyebrow({
  children,
  light = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal>
      <div
        className={cn(
          "flex items-center gap-3 font-grotesk text-[13px] font-bold uppercase tracking-[0.22em]",
          light ? "text-cream/80" : "text-vedant",
          className
        )}
      >
        <span className={cn("h-[2px] w-10", light ? "bg-cream/70" : "bg-vedant")} />
        {children}
      </div>
    </Reveal>
  );
}

/* ---------- Magnetic button ---------- */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 14, mass: 0.4 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({
          x: (e.clientX - r.left - r.width / 2) * 0.28,
          y: (e.clientY - r.top - r.height / 2) * 0.28,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function PillButton({
  children,
  onClick,
  variant = "red",
  className,
  arrow = true,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "red" | "navy" | "white" | "outline-light" | "outline-navy";
  className?: string;
  arrow?: boolean;
}) {
  const styles: Record<string, string> = {
    red: "bg-vedant text-white hover:bg-vedant-dark shadow-[0_18px_40px_-12px_rgba(226,37,19,0.6)]",
    navy: "bg-navy-900 text-cream hover:bg-navy-950 shadow-[0_18px_40px_-12px_rgba(10,37,64,0.6)]",
    white: "bg-cream text-navy-900 hover:bg-white",
    "outline-light":
      "border border-cream/40 text-cream hover:bg-cream hover:text-navy-900 backdrop-blur",
    "outline-navy":
      "border border-navy-900/25 text-navy-900 hover:bg-navy-900 hover:text-cream",
  };
  return (
    <Magnetic>
      <button
        onClick={onClick}
        className={cn(
          "group inline-flex cursor-pointer items-center gap-3 rounded-full px-7 py-4 font-grotesk text-[13px] font-bold uppercase tracking-[0.14em] transition-all duration-300",
          styles[variant],
          className
        )}
      >
        {children}
        {arrow && (
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        )}
      </button>
    </Magnetic>
  );
}

/* ---------- Split lines hero text ---------- */
export function SplitLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.12,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%", rotate: 2 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{
              duration: 1.1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/* ---------- Marquee ---------- */
export function Marquee({
  children,
  reverse = false,
  slow = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  slow?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          slow
            ? reverse
              ? "animate-marquee-reverse [animation-duration:70s]"
              : "animate-marquee-slow"
            : reverse
              ? "animate-marquee-reverse"
              : "animate-marquee"
        )}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- Animated counter ---------- */
export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) =>
        setDisplay(
          v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        ),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);
  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------- Parallax image ---------- */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  speed = 0.15,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.25 }}
        className={cn("h-full w-full object-cover", imgClassName)}
        loading="lazy"
      />
    </div>
  );
}

/* ---------- Service row arrow link ---------- */
export function ArrowLink({
  children,
  onClick,
  light = false,
}: {
  children: ReactNode;
  onClick?: () => void;
  light?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-2 font-grotesk text-[13px] font-bold uppercase tracking-[0.16em]",
        light ? "text-cream" : "text-vedant"
      )}
    >
      <span className="link-underline">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </button>
  );
}

/* ---------- Page transition wrapper ---------- */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
