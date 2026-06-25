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

/* ── Brand Background ─────────────────────────────────────────────────
   Every element is derived from the Pure Life logo:
   • Heart glow   → the cyan gradient heart at the logo's center
   • Wing arcs    → the silver eagle wings spreading outward
   • Wing root    → the glowing origin point where wings meet the heart
   • Rim light    → the boundary between the brand world and the viewer
─────────────────────────────────────────────────────────────────────── */

function BrandBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* Navy atmosphere — lower left */}
      <div style={{
        position: "absolute",
        bottom: "-20%", left: "-15%",
        width: "clamp(500px,60vw,820px)",
        height: "clamp(500px,60vw,820px)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(22,72,140,0.28) 0%, transparent 65%)",
      }} />

      {/* ── HEART GLOW — upper right, echoes the logo's cyan heart ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "-8%", right: "3%",
          width: "clamp(340px,43vw,600px)",
          height: "clamp(340px,43vw,600px)",
        }}
        initial={{ opacity: 0 }}
        animate={reduced
          ? { opacity: 0.85 }
          : { opacity: [0.6, 0.95, 0.68, 0.92, 0.6] }
        }
        transition={reduced
          ? { duration: 1.2, ease: "easeOut" }
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Left lobe */}
        <div style={{
          position: "absolute",
          width: "54%", height: "57%",
          top: "8%", left: "3%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,200,232,0.24) 0%, rgba(43,200,232,0.08) 45%, transparent 70%)",
          filter: "blur(32px)",
        }} />
        {/* Right lobe */}
        <div style={{
          position: "absolute",
          width: "54%", height: "57%",
          top: "8%", right: "3%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,200,232,0.24) 0%, rgba(43,200,232,0.08) 45%, transparent 70%)",
          filter: "blur(32px)",
        }} />
        {/* Bottom tip — elongated downward */}
        <div style={{
          position: "absolute",
          width: "34%", height: "52%",
          bottom: "2%",
          left: "50%", transform: "translateX(-50%)",
          borderRadius: "0 0 50% 50%",
          background: "radial-gradient(ellipse at top, rgba(43,200,232,0.14) 0%, transparent 68%)",
          filter: "blur(26px)",
        }} />
      </motion.div>

      {/* ── SILVER WINGS — large, sweeping, echoes the eagle wings ── */}

      {/* Left wing */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-6%", left: "-18%",
          width: "72vw", height: "76vh",
          background: "linear-gradient(142deg, transparent 18%, rgba(215,222,230,0.10) 48%, rgba(170,180,190,0.07) 66%, rgba(200,210,220,0.04) 80%, transparent 91%)",
          borderRadius: "0 78% 58% 0 / 0 52% 78% 0",
          filter: "blur(42px)",
          transformOrigin: "bottom right",
          transform: "rotate(-23deg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
      />

      {/* Right wing */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-6%", right: "-18%",
          width: "72vw", height: "76vh",
          background: "linear-gradient(218deg, transparent 18%, rgba(215,222,230,0.10) 48%, rgba(170,180,190,0.07) 66%, rgba(200,210,220,0.04) 80%, transparent 91%)",
          borderRadius: "78% 0 0 58% / 52% 0 0 78%",
          filter: "blur(42px)",
          transformOrigin: "bottom left",
          transform: "rotate(23deg)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
      />

      {/* Wing root — where the wings meet the heart */}
      <div style={{
        position: "absolute",
        bottom: "-4%",
        left: "50%", transform: "translateX(-50%)",
        width: "clamp(220px,28vw,440px)",
        height: "clamp(200px,26vh,360px)",
        background: "radial-gradient(ellipse, rgba(170,182,194,0.10) 0%, transparent 68%)",
        filter: "blur(28px)",
      }} />

      {/* Rim light — vertical boundary between copy and video, desktop only */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "6%", bottom: "6%",
          left: "44%",
          width: "170px",
          background: "radial-gradient(ellipse at center, rgba(43,200,232,0.11) 0%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

    </div>
  );
}

/* ── Hero Video — Desktop ──────────────────────────────────────────────
   Absolute-positioned, fills the right 58% of the hero.
   No card. No rounded container. No border.
   Left edge fades into the brand background via CSS mask gradient.
   The video IS the visual — the brand world is built around it.
─────────────────────────────────────────────────────────────────────── */

function HeroVideoDesktop({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="absolute right-0 top-0 bottom-0 hidden lg:block pointer-events-none"
      style={{ width: "58%", zIndex: 10 }}
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
    >
      {/* Mask wrapper: left edge gradient blend into brand background */}
      <div
        className="w-full h-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 6%, rgba(0,0,0,0.80) 18%, black 30%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 6%, rgba(0,0,0,0.80) 18%, black 30%, black 100%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/PureLifeHeroVideo.mp4"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Bottom gradient — fades video into the dark hero floor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 52%, rgba(4,16,31,0.38) 100%)",
          zIndex: 5,
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* ── Hero Video — Mobile ──────────────────────────────────────────────
   In-flow below the copy. Premium card with shadow and border.
─────────────────────────────────────────────────────────────────────── */

function HeroVideoMobile({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="w-full mt-10"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 28, delay: 0.4 }}
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          boxShadow:
            "0 32px 72px rgba(4,16,31,0.65), 0 8px 24px rgba(4,16,31,0.40), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/PureLifeHeroVideo.mp4"
          className="w-full h-full object-cover block"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 58%, rgba(4,16,31,0.28) 100%)",
            zIndex: 5,
          }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────── */

export function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="main-content"
      className="relative min-h-screen bg-navy-950 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      <BrandBackground reduced={reduced} />
      <HeroVideoDesktop reduced={reduced} />

      {/* Content — sits above the video */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 flex flex-col justify-start lg:justify-center min-h-screen pt-28 pb-16 lg:pt-0 lg:pb-0">

        {/* Copy panel — left 49% on desktop, full-width on mobile */}
        <div className="w-full lg:w-[49%]">
          <motion.div
            className="glass-panel-hero rounded-2xl p-8 sm:p-12 lg:p-14"
            style={{ background: "rgba(4,16,31,0.48)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {/* WHO badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full mb-6 px-4 py-1.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
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
              <TrustItem icon={null} text="Agent answers in &lt; 30 seconds" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile video — below copy, only on mobile */}
        <div className="lg:hidden">
          <HeroVideoMobile reduced={reduced} />
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
