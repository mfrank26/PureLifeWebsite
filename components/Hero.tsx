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

/* ── Brand Background ─────────────────────────────────────────────────
   Elements derived from the Pure Life logo:
   • Heart glow   → the cyan gradient heart at the logo's center
   • Wing arcs    → the silver eagle wings spreading outward
   • Arc lines    → barely-visible curved outlines echoing logo geometry
─────────────────────────────────────────────────────────────────────── */

function BrandBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* Navy atmosphere — lower left depth */}
      <div style={{
        position: "absolute",
        bottom: "-20%", left: "-15%",
        width: "clamp(500px,60vw,820px)",
        height: "clamp(500px,60vw,820px)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(22,72,140,0.26) 0%, transparent 65%)",
      }} />

      {/* ── HEART GLOW — echoes the logo's cyan heart ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "-8%", right: "3%",
          width: "clamp(340px,43vw,600px)",
          height: "clamp(340px,43vw,600px)",
        }}
        initial={{ opacity: 0 }}
        animate={reduced
          ? { opacity: 0.78 }
          : { opacity: [0.55, 0.88, 0.62, 0.86, 0.55] }
        }
        transition={reduced
          ? { duration: 1.2, ease: "easeOut" }
          : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <div style={{
          position: "absolute",
          width: "54%", height: "57%",
          top: "8%", left: "3%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,200,232,0.22) 0%, rgba(43,200,232,0.07) 45%, transparent 70%)",
          filter: "blur(32px)",
        }} />
        <div style={{
          position: "absolute",
          width: "54%", height: "57%",
          top: "8%", right: "3%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,200,232,0.22) 0%, rgba(43,200,232,0.07) 45%, transparent 70%)",
          filter: "blur(32px)",
        }} />
        <div style={{
          position: "absolute",
          width: "34%", height: "52%",
          bottom: "2%",
          left: "50%", transform: "translateX(-50%)",
          borderRadius: "0 0 50% 50%",
          background: "radial-gradient(ellipse at top, rgba(43,200,232,0.13) 0%, transparent 68%)",
          filter: "blur(26px)",
        }} />
      </motion.div>

      {/* ── SILVER WINGS — echoes the eagle wings ── */}

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
        transition={{ duration: 2.4, delay: 0.5, ease: "easeOut" }}
      />

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
        transition={{ duration: 2.4, delay: 0.5, ease: "easeOut" }}
      />

      {/* Wing root glow */}
      <div style={{
        position: "absolute",
        bottom: "-4%",
        left: "50%", transform: "translateX(-50%)",
        width: "clamp(220px,28vw,440px)",
        height: "clamp(200px,26vh,360px)",
        background: "radial-gradient(ellipse, rgba(170,182,194,0.10) 0%, transparent 68%)",
        filter: "blur(28px)",
      }} />

      {/* ── LOGO LANGUAGE — barely-visible arc outlines ── */}

      {/* Left upper wing arc outline */}
      <div style={{
        position: "absolute",
        top: "8%", left: "-10%",
        width: "58vw", height: "52vh",
        borderRadius: "0 90% 0 0",
        border: "1px solid rgba(195,208,220,0.068)",
        background: "transparent",
        transformOrigin: "bottom right",
        transform: "rotate(-14deg)",
      }} />

      {/* Right upper wing arc outline */}
      <div style={{
        position: "absolute",
        top: "8%", right: "-10%",
        width: "58vw", height: "52vh",
        borderRadius: "90% 0 0 0",
        border: "1px solid rgba(195,208,220,0.068)",
        background: "transparent",
        transformOrigin: "bottom left",
        transform: "rotate(14deg)",
      }} />

      {/* Inner heart circle — echoes the circular logo emblem */}
      <div style={{
        position: "absolute",
        top: "-12%", right: "4%",
        width: "clamp(260px,34vw,480px)",
        height: "clamp(260px,34vw,480px)",
        borderRadius: "50%",
        border: "1px solid rgba(43,200,232,0.052)",
        background: "transparent",
      }} />

      {/* Rim light — boundary between copy and video, desktop only */}
      <div
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "6%", bottom: "6%",
          left: "44%",
          width: "170px",
          background: "radial-gradient(ellipse at center, rgba(43,200,232,0.10) 0%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

    </div>
  );
}

/* ── Trust Card ────────────────────────────────────────────────────────
   Floating minimal social proof over the lower corner of the video.
   Non-interactive decoration — conveys trust without adding noise.
─────────────────────────────────────────────────────────────────────── */

function TrustCard({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="absolute bottom-10 right-6"
      style={{
        zIndex: 15,
        background: "rgba(255,255,255,0.93)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.65)",
        borderRadius: "16px",
        padding: "16px 20px",
        boxShadow: "0 8px 32px rgba(4,16,31,0.16), 0 2px 8px rgba(4,16,31,0.08)",
        minWidth: "210px",
      }}
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reduced
        ? {}
        : { type: "spring", stiffness: 300, damping: 28, delay: 1.7 }
      }
    >
      {/* Stars */}
      <div className="flex gap-px mb-2" aria-label="5 stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#F59E0B", fontSize: "13px", lineHeight: 1 }}>★</span>
        ))}
      </div>

      {/* Primary trust statement */}
      <p style={{
        fontFamily: "var(--font-ui)",
        fontWeight: 700,
        fontSize: "13px",
        lineHeight: 1.25,
        color: "#0A1628",
        marginBottom: "2px",
      }}>
        Trusted by 1,200+ Families
      </p>

      {/* Secondary descriptor */}
      <p style={{
        fontFamily: "var(--font-ui)",
        fontSize: "11px",
        color: "#64748B",
        lineHeight: 1.3,
        marginBottom: "10px",
      }}>
        Licensed Medicare Advisors
      </p>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(10,22,40,0.07)", paddingTop: "10px" }}>
        <p style={{
          fontFamily: "var(--font-ui)",
          fontSize: "11px",
          fontWeight: 600,
          color: "#059669",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}>
          <span style={{ fontSize: "12px" }}>✓</span>
          No Cost Consultation
        </p>
      </div>
    </motion.div>
  );
}

/* ── Hero Video — Desktop ──────────────────────────────────────────────
   Absolute-positioned, fills right 58% of hero. No card, no border.
   CSS mask gradient blends the left edge into the brand background.
   Bottom gradient obscures the lower portion (tablet area in video).
─────────────────────────────────────────────────────────────────────── */

function HeroVideoDesktop({ reduced }: { reduced: boolean }) {
  return (
    <motion.div
      className="absolute right-0 top-0 bottom-0 hidden lg:block pointer-events-none"
      style={{ width: "58%", zIndex: 10 }}
      initial={reduced ? false : { opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Mask: left edge fades into the brand background */}
      <div
        className="w-full h-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.32) 6%, rgba(0,0,0,0.82) 20%, black 32%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.32) 6%, rgba(0,0,0,0.82) 20%, black 32%, black 100%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/videos/PureLifeHeroVideo.mp4"
          poster="/videos/PureLifeHeroPoster.jpg"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Bottom gradient — obscures the lower frame (tablet), reveals faces */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 44%, rgba(4,16,31,0.28) 70%, rgba(4,16,31,0.56) 100%)",
          zIndex: 5,
        }}
        aria-hidden="true"
      />

      {/* Floating trust card */}
      <TrustCard reduced={reduced} />
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
      initial={reduced ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 28, delay: 0.5 }}
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
          poster="/videos/PureLifeHeroPoster.jpg"
          className="w-full h-full object-cover block"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 52%, rgba(4,16,31,0.32) 100%)",
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

      {/* Content layer — above the video */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 flex flex-col justify-start lg:justify-center min-h-screen pt-28 pb-16 lg:pt-0 lg:pb-0">

        {/* Copy panel — left 49% on desktop, full-width on mobile */}
        <div className="w-full lg:w-[49%]">
          <motion.div
            className="glass-panel-hero rounded-2xl p-8 sm:p-12 lg:p-14"
            style={{
              background: "rgba(10,20,40,0.30)",
              border: "1px solid rgba(255,255,255,0.13)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* WHO badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full mb-8 px-4 py-1.5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.11)",
              }}
              variants={fadeIn(0.18, 0.55)}
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
              variants={fadeUp(0.32, 0.75)}
              initial="hidden"
              animate="visible"
            >
              You Shouldn&apos;t Have to Figure Out Medicare Alone.
            </motion.h1>

            {/* Value proposition — the 5-second clarity statement */}
            <motion.p
              className="font-ui font-medium leading-relaxed mb-10 text-balance"
              style={{
                fontSize: "clamp(0.9375rem,1.5vw,1.0625rem)",
                color: "rgba(184,196,206,0.92)",
              }}
              variants={fadeUp(0.52, 0.6)}
              initial="hidden"
              animate="visible"
            >
              Independent, licensed Medicare advisors who compare plans from 50+ insurance carriers across 15 states — at no cost to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              variants={fadeUp(0.72, 0.45)}
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
              variants={fadeIn(1.1, 0.35)}
              initial="hidden"
              animate="visible"
            >
              <TrustItem icon="🔒" text="Licensed in 15 states" />
              <span className="text-white/18 hidden sm:block" aria-hidden="true">·</span>
              <TrustItem text="50+ carriers compared" />
              <span className="text-white/18 hidden sm:block" aria-hidden="true">·</span>
              <TrustItem text="Answers in &lt; 30 seconds" />
            </motion.div>

          </motion.div>
        </div>

        {/* Mobile video — below copy */}
        <div className="lg:hidden">
          <HeroVideoMobile reduced={reduced} />
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
