import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { ArrowUp, MessageCircle } from "lucide-react";
import Navbar, { type PageKey } from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import { SERVICES } from "./data/content";

function hashToPage(hash: string): PageKey {
  const h = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  if (!h || h === "") return "home";
  if (h === "about") return "about";
  if (h === "services") return "services";
  if (h === "certifications" || h === "our-clients") return "certifications";
  if (h === "contact") return "contact";
  if (h.startsWith("services/")) {
    const slug = h.replace("services/", "");
    const found = SERVICES.find((s) => s.slug === slug);
    if (found) return `service-${slug}` as PageKey;
    return "services";
  }
  // legacy slugs
  const legacy: Record<string, PageKey> = {
    nvocc: "service-nvocc",
    "international-freight-forwarding": "service-international-freight-forwarding",
    "door-to-door-delivery": "service-door-to-door-delivery",
    "cross-trade-services": "service-cross-trade-services",
    "custom-clearance": "service-custom-clearance",
    "road-transport": "service-road-transport",
    warehousing: "service-warehousing",
    "cargo-insurance": "service-cargo-insurance",
    "about-us": "about",
    "services-2": "services",
    "our-clients": "certifications",
  };
  if (legacy[h]) return legacy[h];
  return "home";
}

function pageToHash(p: PageKey): string {
  if (p === "home") return "#/";
  if (p.startsWith("service-")) return `#/services/${p.replace("service-", "")}`;
  return `#/${p}`;
}

const TITLES: Record<string, string> = {
  home: "Vedant Ocean Container Line LLC — Worldwide Shipping, Simplified",
  about: "About Us — Vedant Ocean Container Line LLC",
  services: "Our Services — Vedant Ocean Container Line LLC",
  certifications: "Our Certifications — Vedant Ocean Container Line LLC",
  contact: "Contact Us — Vedant Ocean Container Line LLC",
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<PageKey>(() =>
    typeof window !== "undefined" ? hashToPage(window.location.hash) : "home"
  );
  const [showTop, setShowTop] = useState(false);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  // hash sync
  useEffect(() => {
    const onHash = () => setPage(hashToPage(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // title + scroll top on page change
  useEffect(() => {
    const base = page.startsWith("service-")
      ? `${SERVICES.find((s) => `service-${s.slug}` === page)?.title} — Vedant Ocean Container Line LLC`
      : TITLES[page] || TITLES.home;
    document.title = base;
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = useCallback(
    (p: PageKey) => {
      if (p === page) {
        const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
        if (lenis) lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      window.location.hash = pageToHash(p);
      setPage(p);
    },
    [page]
  );

  const serviceSlug = page.startsWith("service-") ? page.replace("service-", "") : null;
  const service = serviceSlug ? SERVICES.find((s) => s.slug === serviceSlug) : null;

  return (
    <div className="min-h-screen bg-cream-light">
      {loading && <Preloader done={() => setLoading(false)} />}

      <Navbar page={page} go={go} />

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {page === "home" && <Home go={go} />}
          {page === "about" && <About go={go} />}
          {page === "services" && <Services go={go} />}
          {page === "certifications" && <Certifications go={go} />}
          {page === "contact" && <Contact go={go} />}
          {service && <ServiceDetail service={service} go={go} />}
        </motion.div>
      </AnimatePresence>

      <Footer go={go} />

      {/* floating actions */}
      <div className="fixed bottom-5 right-5 z-[80] flex flex-col gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => {
                const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
                if (lenis) lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-white/20 bg-navy-950 text-cream shadow-2xl transition hover:bg-navy-800"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        {page !== "contact" && (
          <motion.button
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            onClick={() => go("contact")}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-vedant py-3 pl-4 pr-5 font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_45px_-10px_rgba(226,37,19,0.8)] transition hover:bg-vedant-dark"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:-rotate-12" />
            Get Quote
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
