import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { CONTACT_INFO, SERVICES } from "../data/content";
import type { PageKey } from "../components/Navbar";
import PageHero from "../components/PageHero";
import { Eyebrow, Marquee, PageShell, Reveal } from "../components/ui";

export default function Contact({ go }: { go: (p: PageKey) => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "NVOCC",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <PageShell>
      <PageHero
        go={go}
        eyebrow="Contact Us"
        lines={["Ready to ship", "smarter, safer,", "sooner?"]}
        sub="Tell us about your shipment. Our team responds with a tailored quote within two hours."
        image="https://images.pexels.com/photos/39621561/pexels-photo-39621561.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        crumbs={[{ label: "Home", page: "home" }, { label: "Contact" }]}
      />

      <div className="border-y-4 border-navy-950 bg-vedant py-3">
        <Marquee>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-5 pr-6 font-grotesk text-[13px] font-black uppercase tracking-[0.22em] text-white">
              <Phone className="h-4 w-4" /> {CONTACT_INFO.phoneUAE}
              <span className="h-2 w-2 rounded-full bg-white/60" />
              <Clock className="h-4 w-4" /> {CONTACT_INFO.hours}
            </div>
          ))}
        </Marquee>
      </div>

      <section className="bg-cream-light px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1350px] gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* left info */}
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-[28px] bg-navy-950 p-7 shadow-2xl md:p-9">
                <Eyebrow light>Get in touch</Eyebrow>
                <h2 className="mt-3 font-display text-3xl leading-tight text-cream md:text-4xl">
                  Two offices. One global promise.
                </h2>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${CONTACT_INFO.emailUAE}`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-4 transition hover:border-vedant/60 hover:bg-white/8"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-vedant text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-cream/50">
                        Email
                      </span>
                      <span className="block font-grotesk text-[15px] font-bold text-cream">
                        {CONTACT_INFO.emailUAE}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 text-vedant-light opacity-0 transition group-hover:opacity-100" />
                  </a>
                  <a
                    href={CONTACT_INFO.phoneUAEHref}
                    className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-4 transition hover:border-vedant/60 hover:bg-white/8"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-vedant text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-cream/50">
                        Call · UAE
                      </span>
                      <span className="block font-grotesk text-[15px] font-bold text-cream">
                        {CONTACT_INFO.phoneUAE}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto h-5 w-5 text-vedant-light opacity-0 transition group-hover:opacity-100" />
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/5 p-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream/15 text-cream">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-grotesk text-[11px] font-black uppercase tracking-[0.2em] text-cream/50">
                        Hours
                      </span>
                      <span className="block font-grotesk text-[15px] font-bold text-cream">
                        {CONTACT_INFO.hours}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={0.1}>
                <div className="h-full rounded-[26px] bg-vedant p-6 shadow-lg">
                  <div className="flex items-center gap-2 font-grotesk text-[12px] font-black uppercase tracking-[0.2em] text-white">
                    <MapPin className="h-4 w-4" /> United Arab Emirates
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {CONTACT_INFO.addressUAE}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Al+Rifaa+Plaza+Al+Fahidi+Dubai"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-white hover:text-navy-950"
                  >
                    View on map <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* right form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[32px] border border-navy-900/10 bg-white p-7 shadow-2xl md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-vedant/10 blur-3xl" />
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[480px] flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                    className="grid h-24 w-24 place-items-center rounded-full bg-green-500/15"
                  >
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-3xl text-navy-900 md:text-4xl">
                    Request received!
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] text-navy-900/65">
                    Thank you, {form.name || "shipper"}. Our team responds with a tailored quote
                    within two hours ({CONTACT_INFO.hours}). For urgent cargo, call{" "}
                    <a href={CONTACT_INFO.phoneUAEHref} className="font-bold text-vedant">
                      {CONTACT_INFO.phoneUAE}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer rounded-full border border-navy-900/20 px-7 py-3 font-grotesk text-[12px] font-bold uppercase tracking-[0.16em] text-navy-900 transition hover:bg-navy-900 hover:text-cream"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="relative">
                  <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.24em] text-vedant">
                    — Request Quote
                  </div>
                  <h2 className="mt-2 font-display text-3xl text-navy-900 md:text-4xl">
                    Tell us about your shipment
                  </h2>
                  <p className="mt-2 text-sm text-navy-900/60">
                    Two-hour tailored quote response · {CONTACT_INFO.hours}
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-navy-900/60">
                        Full name *
                      </span>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-navy-900/15 bg-cream-light px-5 py-3.5 text-[15px] font-medium text-navy-900 outline-none transition placeholder:text-navy-900/35 focus:border-vedant focus:ring-4 focus:ring-vedant/15"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-navy-900/60">
                        Email *
                      </span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-navy-900/15 bg-cream-light px-5 py-3.5 text-[15px] font-medium text-navy-900 outline-none transition placeholder:text-navy-900/35 focus:border-vedant focus:ring-4 focus:ring-vedant/15"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-navy-900/60">
                        Phone *
                      </span>
                      <input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+971 ..."
                        className="w-full rounded-2xl border border-navy-900/15 bg-cream-light px-5 py-3.5 text-[15px] font-medium text-navy-900 outline-none transition placeholder:text-navy-900/35 focus:border-vedant focus:ring-4 focus:ring-vedant/15"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-navy-900/60">
                        Service needed
                      </span>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full cursor-pointer appearance-none rounded-2xl border border-navy-900/15 bg-cream-light px-5 py-3.5 text-[15px] font-medium text-navy-900 outline-none transition focus:border-vedant focus:ring-4 focus:ring-vedant/15"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.slug}>{s.title}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block font-grotesk text-[12px] font-black uppercase tracking-[0.16em] text-navy-900/60">
                        Shipment details *
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Route, cargo type, container size, ready date…"
                        className="w-full resize-none rounded-2xl border border-navy-900/15 bg-cream-light px-5 py-3.5 text-[15px] font-medium text-navy-900 outline-none transition placeholder:text-navy-900/35 focus:border-vedant focus:ring-4 focus:ring-vedant/15"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-vedant px-8 py-4 font-grotesk text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_20px_45px_-12px_rgba(226,37,19,0.6)] transition hover:bg-vedant-dark"
                  >
                    Send quote request
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                  <p className="mt-4 text-center text-[12px] text-navy-900/50">
                    Prefer email?{" "}
                    <a href={`mailto:${CONTACT_INFO.emailUAE}`} className="font-bold text-vedant">
                      {CONTACT_INFO.emailUAE}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* visit strip */}
        <div className="mx-auto mt-10 max-w-[1350px]">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] bg-navy-950">
              <div className="grid md:grid-cols-3">
                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                  <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.22em] text-vedant-light">
                    Email
                  </div>
                  <div className="mt-2 font-grotesk text-[15px] font-bold text-cream">
                    {CONTACT_INFO.emailUAE}
                  </div>
                </div>
                <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                  <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.22em] text-vedant-light">
                    Visit · Dubai
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-cream/75">
                    {CONTACT_INFO.addressUAE}
                  </div>
                </div>
                <div className="p-7">
                  <div className="font-grotesk text-[12px] font-black uppercase tracking-[0.22em] text-vedant-light">
                    Hours
                  </div>
                  <div className="mt-2 font-grotesk text-[15px] font-bold text-cream">
                    {CONTACT_INFO.hours}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
