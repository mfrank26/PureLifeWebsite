"use client";

import { useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Animation variants ────────────────────────────────────────────── */

const fadeUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
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

/* ── Decorative background elements ───────────────────────────────── */

function HeroBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base deep navy — already set by body bg */}

      {/* Cyan glow — upper right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: "clamp(400px, 50vw, 640px)",
          height: "clamp(400px, 50vw, 640px)",
          background:
            "radial-gradient(circle, rgba(43,200,232,0.14) 0%, rgba(43,200,232,0.04) 50%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={reduced ? { opacity: 1 } : {
          opacity: [0.7, 1, 0.8, 1, 0.7],
          x: [0, 18, -10, 12, 0],
          y: [0, -14, 8, -6, 0],
        }}
        transition={
          reduced
            ? { duration: 0.8, ease: "easeOut" }
            : {
                opacity: { duration: 0.8, ease: "easeOut" },
                x: { duration: 55, repeat: Infinity, ease: "linear" },
                y: { duration: 55, repeat: Infinity, ease: "linear" },
              }
        }
      />

      {/* Navy depth gradient — lower left */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-15%",
          width: "clamp(500px, 60vw, 800px)",
          height: "clamp(500px, 60vw, 800px)",
          background:
            "radial-gradient(circle, rgba(27,82,152,0.22) 0%, transparent 65%)",
        }}
      />

      {/* Silver wing gradient — left arc */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-8%",
          left: "50%",
          width: "clamp(300px, 44vw, 580px)",
          height: "clamp(320px, 60vh, 640px)",
          transformOrigin: "bottom right",
          transform: "translateX(-100%) rotate(-12deg)",
          background:
            "linear-gradient(to top right, rgba(168,178,188,0.11) 0%, rgba(168,178,188,0.04) 45%, transparent 70%)",
          borderRadius: "0 60% 0 0",
          filter: "blur(32px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Silver wing gradient — right arc */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-8%",
          right: "50%",
          width: "clamp(300px, 44vw, 580px)",
          height: "clamp(320px, 60vh, 640px)",
          transformOrigin: "bottom left",
          transform: "translateX(100%) rotate(12deg)",
          background:
            "linear-gradient(to top left, rgba(168,178,188,0.11) 0%, rgba(168,178,188,0.04) 45%, transparent 70%)",
          borderRadius: "60% 0 0 0",
          filter: "blur(32px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      />

      {/* Subtle center light — lifts the wings */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 30vw, 400px)",
          height: "clamp(200px, 30vh, 320px)",
          background:
            "radial-gradient(ellipse, rgba(168,178,188,0.06) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}

/* ── Hero ──────────────────────────────────────────────────────────── */

export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="main-content"
      className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <HeroBackground reduced={reduced} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-32 lg:py-0">
        <div className="lg:max-w-[58%]">
          {/* Glass panel */}
          <motion.div
            className="glass-panel-hero rounded-2xl p-8 sm:p-12 lg:p-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <motion.p
              className="font-ui text-xs font-semibold uppercase tracking-[0.1em] text-silver-400 mb-5"
              variants={fadeUp(0.2, 0.5)}
              initial="hidden"
              animate="visible"
            >
              Independent Medicare &amp; Insurance Advisory
            </motion.p>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold italic leading-[1.08] tracking-[-0.02em] text-white mb-6 text-balance"
              variants={fadeUp(0.35, 0.7)}
              initial="hidden"
              animate="visible"
            >
              You Shouldn&apos;t Have to Figure Out Medicare Alone.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-sans text-[clamp(1rem,1.8vw,1.2rem)] text-silver-300 leading-relaxed mb-8 max-w-[520px]"
              variants={fadeUp(0.6, 0.5)}
              initial="hidden"
              animate="visible"
            >
              Pure Life Insurance compares plans from 50+ carriers to find the
              right coverage for your specific situation — at no cost to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              variants={fadeUp(0.8, 0.4)}
              initial="hidden"
              animate="visible"
            >
              <Link href="/quote/medicare" className="btn-emerald">
                Get My Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/medicare" className="btn-ghost-cyan">
                Explore Medicare Plans
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-1.5"
              variants={fadeIn(1.1, 0.3)}
              initial="hidden"
              animate="visible"
            >
              <TrustItem icon="🔒" text="Licensed in 15 states" />
              <span className="text-white/20 hidden sm:block">·</span>
              <TrustItem icon={null} text="50+ carriers compared" />
              <span className="text-white/20 hidden sm:block">·</span>
              <TrustItem icon={null} text="Agent answers in < 30 seconds" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        variants={fadeIn(1.4, 0.4)}
        initial="hidden"
        animate="visible"
      >
        <span className="font-ui text-[11px] uppercase tracking-[0.12em] text-silver-600">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-silver-600 to-transparent" />
      </motion.div>
    </section>
  );
}

function TrustItem({ icon, text }: { icon: string | null; text: string }) {
  return (
    <span className="flex items-center gap-1.5 font-ui text-[13px] text-silver-500">
      {icon && <span>{icon}</span>}
      {text}
    </span>
  );
}
