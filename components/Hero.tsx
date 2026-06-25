"use client";

import { useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Animation helpers ─────────────────────────────────────────────── */

const fadeUp = (delay = 0, duration = 0.65) => ({
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

/* ── Trust Card ────────────────────────────────────────────────────── */

function TrustCard({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      style={{
        background: "rgba(255,255,255,0.93)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.65)",
        borderRadius: "16px",
        padding: "16px 20px",
        boxShadow: "0 8px 32px rgba(4,16,31,0.20), 0 2px 8px rgba(4,16,31,0.10)",
        minWidth: "210px",
      }}
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reduced
        ? {}
        : { type: "spring", stiffness: 300, damping: 28, delay: 1.8 }
      }
    >
      <div className="flex gap-px mb-2" aria-label="5 stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#F59E0B", fontSize: "13px", lineHeight: 1 }}>★</span>
        ))}
      </div>
      <p style={{ fontFamily: "var(--font-ui)", fontWeight: 700, fontSize: "13px", lineHeight: 1.25, color: "#0A1628", marginBottom: "2px" }}>
        Trusted by 1,200+ Families
      </p>
      <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "#64748B", lineHeight: 1.3, marginBottom: "10px" }}>
        Licensed Medicare Advisors
      </p>
      <div style={{ borderTop: "1px solid rgba(10,22,40,0.07)", paddingTop: "10px" }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontWeight: 600, color: "#059669", display: "flex", alignItems: "center", gap: "5px" }}>
          <span style={{ fontSize: "12px" }}>✓</span>
          No Cost Consultation
        </p>
      </div>
    </motion.div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────
   Architecture:
   section (bg-navy-950, padding creates the inset margin)
   └── hero-container (relative, rounded corners, overflow-hidden)
       ├── video          z-1   fills container, object-cover
       ├── gradients      z-2   readability overlays
       ├── logo arcs      z-3   barely-visible brand lines
       ├── content        z-20  glass panel floats on left
       └── trust card     z-20  floating lower-right (desktop only)
─────────────────────────────────────────────────────────────────────── */

export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      className="relative bg-navy-950 p-3 sm:p-4 lg:p-5 xl:p-7"
      aria-labelledby="hero-headline"
    >
      {/* ── Cinematic container ── */}
      <div
        id="main-content"
        className="relative rounded-2xl lg:rounded-3xl overflow-hidden min-h-screen lg:min-h-0 lg:h-[760px] bg-navy-950"
      >

        {/* ── 1. VIDEO — fills container, shifted slightly right ── */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            transform: "scale(1.10) translateX(4.5%)",
            transformOrigin: "50% 50%",
          }}
          aria-hidden="true"
        >
          <motion.div
            className="w-full h-full"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/PureLifeHeroPoster.jpg"
              src="/videos/PureLifeHeroVideo.mp4"
              className="w-full h-full object-cover block"
              style={{ objectPosition: "center 40%" }}
            />
          </motion.div>
        </div>

        {/* ── 2. GRADIENT OVERLAYS ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden="true">
          {/* Mobile: flat dark overlay */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: "rgba(4,16,31,0.52)" }}
          />
          {/* Desktop: left panel scrim, fades quickly past the panel edge (~42%) */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: "linear-gradient(to right, rgba(4,16,31,0.86) 0%, rgba(4,16,31,0.55) 30%, rgba(4,16,31,0.18) 48%, rgba(4,16,31,0.03) 70%, transparent 100%)" }}
          />
          {/* Top vignette — nav area */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(4,16,31,0.55) 0%, transparent 26%)" }}
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(4,16,31,0.65) 0%, transparent 52%)" }}
          />
          {/* Soft radial edge vignette — cinematic focus on the centre */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 85% at 58% 46%, transparent 38%, rgba(4,16,31,0.50) 100%)" }}
          />
        </div>

        {/* ── 3. AMBIENT DEPTH — soft radial, no geometry ── */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }} aria-hidden="true">
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 55% 65% at 18% 50%, rgba(4,16,31,0.30) 0%, transparent 72%)",
          }} />
        </div>

        {/* ── 4. CONTENT — glass panel floats over the video ── */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16"
          style={{ paddingTop: "96px", paddingBottom: "64px" }}
        >
          {/* Copy panel — constrained left on desktop, full-width on mobile */}
          <div className="w-full lg:w-auto lg:max-w-[min(480px,40%)]">
            <motion.div
              className="glass-panel-hero rounded-2xl p-7 sm:p-9 lg:p-10"
              style={{
                background: "rgba(4,16,31,0.62)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >

              {/* WHO badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full mb-8 px-4 py-1.5"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                variants={fadeIn(0.20, 0.55)}
                initial="hidden"
                animate="visible"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                  style={reduced ? {} : { animation: "pulse-glow 2s ease-in-out infinite" }}
                />
                <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-silver-300">
                  Licensed Medicare &amp; Life Insurance Advisors&nbsp;&nbsp;·&nbsp;&nbsp;15 States
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                id="hero-headline"
                className="font-display font-semibold italic leading-[1.07] tracking-[-0.02em] text-white mb-6 text-balance"
                style={{ fontSize: "clamp(2.2rem,4.8vw,4rem)" }}
                variants={fadeUp(0.34, 0.75)}
                initial="hidden"
                animate="visible"
              >
                You Shouldn&apos;t Have to Figure Out Medicare Alone.
              </motion.h1>

              {/* Value proposition */}
              <motion.p
                className="font-ui font-medium leading-relaxed mb-10 text-balance"
                style={{
                  fontSize: "clamp(0.9375rem,1.4vw,1.0625rem)",
                  color: "rgba(184,196,206,0.92)",
                }}
                variants={fadeUp(0.54, 0.6)}
                initial="hidden"
                animate="visible"
              >
                Independent, licensed Medicare advisors who compare plans from 50+ insurance carriers across 15 states — at no cost to you.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 mb-10"
                variants={fadeUp(0.74, 0.45)}
                initial="hidden"
                animate="visible"
              >
                <Link href="/quote/medicare" className="btn-emerald">
                  Get My Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/medicare" className="btn-ghost-cyan">
                  Explore Medicare Plans
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                className="flex flex-wrap items-center gap-x-4 gap-y-1.5"
                variants={fadeIn(1.12, 0.35)}
                initial="hidden"
                animate="visible"
              >
                <TrustItem icon="🔒" text="Licensed in 15 states" />
                <span className="text-white/20 hidden sm:block" aria-hidden="true">·</span>
                <TrustItem text="50+ carriers compared" />
                <span className="text-white/20 hidden sm:block" aria-hidden="true">·</span>
                <TrustItem text="Answers in < 30 seconds" />
              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* ── 5. TRUST CARD — lower-right corner, desktop only ── */}
        <div className="absolute bottom-10 right-8 lg:bottom-14 lg:right-12 hidden lg:block z-20">
          <TrustCard reduced={reduced} />
        </div>

      </div>
    </section>
  );
}

function TrustItem({ icon, text }: { icon?: string; text: string }) {
  return (
    <span className="flex items-center gap-1.5 font-ui text-[13px] text-silver-500">
      {icon && <span aria-hidden="true">{icon}</span>}
      {text}
    </span>
  );
}
