"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion, motion } from "framer-motion";

/* ── Carrier data ──────────────────────────────────────────────────── */

interface Carrier {
  name: string;
  display: string;
  weight: number;
  size: string;
  spacing: string;
  color: string;
}

const carriers: Carrier[] = [
  { name: "humana",   display: "Humana",             weight: 700, size: "19px", spacing: "-0.02em", color: "#3BAF5E" },
  { name: "unitedhc", display: "UnitedHealthcare",   weight: 700, size: "12px", spacing: "0.01em",  color: "#1B5EC1" },
  { name: "aetna",    display: "Aetna",              weight: 600, size: "20px", spacing: "0.04em",  color: "#7A1E6C" },
  { name: "bcbs",     display: "Blue Cross Blue Shield", weight: 600, size: "11px", spacing: "0.02em", color: "#0066B2" },
  { name: "cigna",    display: "Cigna",              weight: 700, size: "21px", spacing: "0.02em",  color: "#006A8E" },
  { name: "wellcare", display: "Wellcare",           weight: 700, size: "17px", spacing: "0",       color: "#005CA9" },
];

/* ── Stat data ─────────────────────────────────────────────────────── */

const stats = [
  { value: 1200, suffix: "+",    prefix: "",  label: "Families Helped" },
  { value: 50,   suffix: "+",    prefix: "",  label: "Insurance Carriers" },
  { value: 15,   suffix: "",     prefix: "",  label: "Licensed States" },
  { value: 30,   suffix: " sec", prefix: "<", label: "Average Response" },
];

/* ── Counter hook ──────────────────────────────────────────────────── */

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
  prefix: string;
  label: string;
  shouldStart: boolean;
  reduced: boolean;
  delay: number;
  isLast: boolean;
}

function StatCard({ value, suffix, prefix, label, shouldStart, reduced, delay, isLast }: StatProps) {
  const count = useCountUp(value, 1400, shouldStart, reduced);

  return (
    <motion.div
      className="flex flex-col items-center gap-2 px-6 py-2"
      style={
        !isLast
          ? { borderRight: "1px solid rgba(15,23,42,0.08)" }
          : undefined
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldStart ? 1 : 0 }}
      transition={{ duration: 0.5, delay: reduced ? 0 : delay }}
    >
      {/* Cyan accent line — brand accent */}
      <div
        className="w-8 h-px mb-1"
        style={{ background: "rgba(43,200,232,0.55)" }}
        aria-hidden="true"
      />

      {/* Number */}
      <div
        className="font-display font-semibold italic leading-none text-center"
        style={{
          fontSize: "clamp(2.25rem, 3.5vw, 3rem)",
          color: "#04101F",
        }}
        aria-label={`${prefix}${value}${suffix} ${label}`}
      >
        {prefix}
        {count.toLocaleString()}
        <span style={{ color: "#2BC8E8" }}>{suffix}</span>
      </div>

      {/* Label */}
      <p
        className="font-ui text-[12px] font-medium text-center tracking-[0.03em] leading-snug"
        style={{ color: "#64748B" }}
      >
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
      className="relative"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
      aria-label="Carrier partners and company statistics"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-14 sm:py-16">
        {/* Section label */}
        <motion.p
          className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-center mb-10"
          style={{ color: "#94A3B8" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          Independent Agency — Trusted Carrier Partners
        </motion.p>

        {/* Carrier logos — colored on light background */}
        <div
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 mb-12"
          role="list"
          aria-label="Insurance carrier partners"
        >
          {carriers.map((carrier, i) => (
            <motion.div
              key={carrier.name}
              role="listitem"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.4, delay: reduced ? 0 : i * 0.07 }}
              aria-label={`${carrier.display} — carrier partner`}
            >
              <div className="carrier-wrap-light hover:opacity-100">
                <span
                  className="font-ui whitespace-nowrap select-none"
                  style={{
                    fontWeight: carrier.weight,
                    fontSize: carrier.size,
                    letterSpacing: carrier.spacing,
                    color: carrier.color,
                    lineHeight: 1.2,
                  }}
                >
                  {carrier.display}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient divider */}
        <div
          className="w-full h-px mb-12"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(15,23,42,0.1), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Stats — vertical dividers on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              shouldStart={isInView}
              reduced={reduced}
              delay={i * 0.12}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
