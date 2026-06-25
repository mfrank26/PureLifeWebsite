"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion, motion } from "framer-motion";

/* ── Data ──────────────────────────────────────────────────────────── */

const carriers = [
  "Humana",
  "UnitedHealthcare",
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "Wellcare",
];

const stats = [
  { value: 1200, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Carriers Compared" },
  { value: 15, suffix: "", label: "States Licensed" },
  { value: 30, suffix: " sec", label: "Avg. Agent Response" },
];

/* ── Counter ───────────────────────────────────────────────────────── */

function useCountUp(target: number, duration: number, start: boolean, reduced: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }

    let rafId: number;
    let startTs: number | null = null;

    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration, reduced]);

  return value;
}

/* ── Stat card ─────────────────────────────────────────────────────── */

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  shouldStart: boolean;
  reduced: boolean;
  delay: number;
}

function StatCard({ value, suffix, label, shouldStart, reduced, delay }: StatProps) {
  const count = useCountUp(value, 1200, shouldStart, reduced);

  return (
    <motion.div
      className="flex flex-col items-center gap-1 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldStart ? 1 : 0 }}
      transition={{ duration: 0.4, delay: reduced ? 0 : delay }}
    >
      <div
        className="font-display font-semibold italic text-white leading-none"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
        aria-label={`${value}${suffix} ${label}`}
      >
        {count.toLocaleString()}
        <span className="text-cyan-500">{suffix}</span>
      </div>
      <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.09em] text-silver-500 text-center">
        {label}
      </p>
    </motion.div>
  );
}

/* ── CredibilityBar ────────────────────────────────────────────────── */

export function CredibilityBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      ref={ref}
      className="relative bg-navy-900 border-t border-b"
      style={{ borderColor: "rgba(168,178,188,0.10)" }}
      aria-label="Carrier partners and company statistics"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-14 sm:py-16">
        {/* Section label */}
        <motion.p
          className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-silver-500 text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Independent Agency — Trusted Carrier Partners
        </motion.p>

        {/* Carrier logos */}
        <div
          className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12"
          role="list"
          aria-label="Insurance carrier partners"
        >
          {carriers.map((carrier, i) => (
            <motion.div
              key={carrier}
              role="listitem"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 0.55 : 0 }}
              whileHover={{ opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.35,
                  delay: reduced ? 0 : i * 0.06,
                },
              }}
              aria-label={`${carrier} — carrier partner`}
            >
              <span className="font-ui font-semibold text-[15px] text-silver-300 tracking-wide whitespace-nowrap">
                {carrier}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-12"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(168,178,188,0.2), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              shouldStart={isInView}
              reduced={reduced}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
