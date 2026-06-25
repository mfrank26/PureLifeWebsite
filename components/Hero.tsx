"use client";

import { useReducedMotion, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── Animation helpers ─────────────────────────────────────────────── */

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

/* ── Background ────────────────────────────────────────────────────── */

const particles = [
  { x: "12%", y: "28%", size: 2,   opacity: 0.11, dur: 44, dx: 18,  dy: -12 },
  { x: "78%", y: "18%", size: 2.5, opacity: 0.07, dur: 58, dx: -14, dy: 20  },
  { x: "35%", y: "72%", size: 2,   opacity: 0.09, dur: 50, dx: 22,  dy: -8  },
  { x: "88%", y: "65%", size: 2.5, opacity: 0.06, dur: 38, dx: -10, dy: -16 },
  { x: "55%", y: "42%", size: 2,   opacity: 0.08, dur: 62, dx: -20, dy: 14  },
  { x: "22%", y: "58%", size: 3,   opacity: 0.06, dur: 46, dx: 15,  dy: 20  },
];

function HeroBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(168,178,188,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Cyan ambient glow — upper right */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "-15%",
          right: "-10%",
          width: "clamp(420px, 52vw, 660px)",
          height: "clamp(420px, 52vw, 660px)",
          background:
            "radial-gradient(circle, rgba(43,200,232,0.13) 0%, rgba(43,200,232,0.04) 50%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={
          reduced
            ? { opacity: 1 }
            : {
                opacity: [0.7, 1, 0.8, 1, 0.7],
                x: [0, 18, -10, 12, 0],
                y: [0, -14, 8, -6, 0],
              }
        }
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

      {/* Second ambient glow — lower center */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-10%",
          left: "30%",
          width: "clamp(300px, 36vw, 480px)",
          height: "clamp(300px, 36vw, 480px)",
          background: "radial-gradient(circle, rgba(43,200,232,0.05) 0%, transparent 65%)",
        }}
        initial={{ opacity: 0 }}
        animate={reduced ? { opacity: 1 } : { opacity: [0.5, 0.9, 0.5], x: [0, -20, 0], y: [0, 10, 0] }}
        transition={
          reduced ? { duration: 0.8 } : { duration: 40, repeat: Infinity, ease: "linear" }
        }
      />

      {/* Navy depth — lower left */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-15%",
          width: "clamp(500px, 60vw, 800px)",
          height: "clamp(500px, 60vw, 800px)",
          background: "radial-gradient(circle, rgba(27,82,152,0.22) 0%, transparent 65%)",
        }}
      />

      {/* Silver wing — left arc */}
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
            "linear-gradient(to top right, rgba(168,178,188,0.10) 0%, rgba(168,178,188,0.04) 45%, transparent 70%)",
          borderRadius: "0 60% 0 0",
          filter: "blur(32px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
      />

      {/* Silver wing — right arc */}
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
            "linear-gradient(to top left, rgba(168,178,188,0.10) 0%, rgba(168,178,188,0.04) 45%, transparent 70%)",
          borderRadius: "60% 0 0 0",
          filter: "blur(32px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
      />

      {/* Center lift */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(200px, 30vw, 400px)",
          height: "clamp(200px, 30vh, 320px)",
          background: "radial-gradient(ellipse, rgba(168,178,188,0.06) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Floating particles */}
      {!reduced &&
        particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: "#2BC8E8",
              opacity: p.opacity,
            }}
            animate={{ x: [0, p.dx, 0], y: [0, p.dy, 0] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "linear", delay: i * 3.5 }}
          />
        ))}
    </div>
  );
}

/* ── Hero Video ─────────────────────────────────────────────────────── */

function HeroVideo({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="w-full"
      initial={reduced ? false : { opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.85, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Premium container — rounded, deep shadow, glass border */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          boxShadow: [
            "0 40px 100px rgba(4,16,31,0.65)",
            "0 16px 48px rgba(4,16,31,0.45)",
            "0 0 0 1px rgba(255,255,255,0.1)",
          ].join(", "),
        }}
      >
        {/* Video — autoplay, muted, loop, playsInline for mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/PureLifeHeroVideo.mp4"
          className="w-full h-full object-cover block"
        />

        {/* Glass border overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.12)", zIndex: 10 }}
          aria-hidden="true"
        />

        {/* Subtle bottom gradient for visual continuity with dark hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 55%, rgba(4,16,31,0.2) 100%)",
            zIndex: 5,
          }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
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

      {/* Two-column layout: copy left, video right */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-28 pb-14 lg:py-0 flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-14">

        {/* Left — copy */}
        <div className="flex-1 lg:max-w-[52%]">
          <motion.div
            className="glass-panel-hero rounded-2xl p-8 sm:p-12 lg:p-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* WHO badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full mb-6 px-4 py-1.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              variants={fadeIn(0.15, 0.5)}
              initial="hidden"
              animate="visible"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
                style={reduced ? {} : { animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-silver-300">
                Licensed Medicare &amp; Life Insurance Advisors &nbsp;·&nbsp; 15 States
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold italic leading-[1.08] tracking-[-0.02em] text-white mb-6 text-balance"
              variants={fadeUp(0.3, 0.7)}
              initial="hidden"
              animate="visible"
            >
              You Shouldn&apos;t Have to Figure Out Medicare Alone.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-sans text-[clamp(1rem,1.8vw,1.2rem)] text-silver-300 leading-relaxed mb-8 max-w-[520px]"
              variants={fadeUp(0.55, 0.5)}
              initial="hidden"
              animate="visible"
            >
              Pure Life Insurance compares plans from 50+ carriers to find the
              right coverage for your specific situation — at no cost to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              variants={fadeUp(0.75, 0.4)}
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
              variants={fadeIn(1.05, 0.3)}
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

        {/* Right — video (all screen sizes) */}
        <div className="flex flex-1 items-center justify-center mt-10 lg:mt-0">
          <HeroVideo reduced={reduced} />
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
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
