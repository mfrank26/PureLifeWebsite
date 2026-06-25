"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  RefreshCw,
  Heart,
  Shield,
  Landmark,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ── Types ─────────────────────────────────────────────────────────── */

interface AudiencePath {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  personalizedMessage: string;
  recommendedLink: { label: string; href: string };
  ctaLabel: string;
  ctaHref: string;
}

/* ── Data ──────────────────────────────────────────────────────────── */

const paths: AudiencePath[] = [
  {
    id: "turning-65",
    icon: Calendar,
    title: "I'm Turning 65",
    description: "First-time Medicare coverage. Start here.",
    personalizedMessage:
      "You're in the right place. Medicare enrollment has strict windows — missing them can cost you. We'll walk you through every decision at no cost.",
    recommendedLink: {
      label: "Read the Turning 65 Complete Guide",
      href: "/knowledge/medicare/turning-65-guide",
    },
    ctaLabel: "Talk to a Medicare Specialist",
    ctaHref: "/quote/medicare?source=turning-65",
  },
  {
    id: "already-medicare",
    icon: RefreshCw,
    title: "I Already Have Medicare",
    description: "Reviewing or switching plans.",
    personalizedMessage:
      "Smart move. Plans change every year, and you may be paying more than you should — or missing better coverage. Annual reviews are free.",
    recommendedLink: {
      label: "Compare Plans in Your Area",
      href: "/medicare/compare",
    },
    ctaLabel: "Review My Current Plan",
    ctaHref: "/quote/medicare?source=review",
  },
  {
    id: "helping-parents",
    icon: Heart,
    title: "I'm Helping My Parents",
    description: "Navigating coverage for someone I love.",
    personalizedMessage:
      "Helping a parent navigate Medicare can feel overwhelming. We specialize in exactly this — and we can include you in every conversation.",
    recommendedLink: {
      label: "Read the Caregiver's Medicare Guide",
      href: "/knowledge/medicare/caregiver-guide",
    },
    ctaLabel: "Schedule a Family Consultation",
    ctaHref: "/quote/medicare?source=caregiver",
  },
  {
    id: "life-insurance",
    icon: Shield,
    title: "I Need Life Insurance",
    description: "Term, whole, final expense, or mortgage protection.",
    personalizedMessage:
      "From term life to final expense, we compare policies from multiple carriers to find coverage that fits your life and your budget.",
    recommendedLink: {
      label: "See Life Insurance Options",
      href: "/life-insurance",
    },
    ctaLabel: "Get a Free Life Insurance Quote",
    ctaHref: "/quote/life-insurance",
  },
  {
    id: "government-benefits",
    icon: Landmark,
    title: "Government Benefits",
    description: "SNAP, Medicaid, ACA, and more.",
    personalizedMessage:
      "Many people qualify for SNAP, Medicaid, ACA subsidies, and other programs they don't know about. Let's find out what you're entitled to.",
    recommendedLink: {
      label: "Check Your Eligibility",
      href: "/benefits",
    },
    ctaLabel: "See What I Qualify For",
    ctaHref: "/quote/benefits-check",
  },
  {
    id: "licensed-agent",
    icon: Briefcase,
    title: "I'm a Licensed Agent",
    description: "Looking for a better agency.",
    personalizedMessage:
      "Join a modern agency with AI-powered lead tools, a premium brand, and the support structure to build the career you deserve.",
    recommendedLink: {
      label: "Explore the Opportunity",
      href: "/agents/join",
    },
    ctaLabel: "Talk to Our Recruiting Team",
    ctaHref: "/agents/join",
  },
];

/* ── Card ──────────────────────────────────────────────────────────── */

interface CardProps {
  path: AudiencePath;
  selected: boolean;
  dimmed: boolean;
  onSelect: () => void;
  reduced: boolean;
}

function PathCard({ path, selected, dimmed, onSelect, reduced }: CardProps) {
  const Icon = path.icon;

  return (
    <motion.button
      onClick={onSelect}
      className="group relative text-left w-full rounded-2xl p-6 focus:outline-none"
      style={{
        background: selected ? "rgba(10,22,40,0.03)" : "#FFFFFF",
        border: selected ? "2px solid #0A1628" : "1px solid #E2E8F0",
        boxShadow: selected
          ? "0 4px 24px rgba(10,22,40,0.12)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
      }}
      animate={{
        opacity: dimmed ? 0.38 : 1,
        scale: selected ? 1.02 : 1,
      }}
      whileHover={!selected && !dimmed ? { y: -6, scale: 1.01 } : {}}
      transition={
        reduced
          ? { duration: 0.1 }
          : {
              opacity: { duration: 0.22, ease: "easeOut" },
              scale: { type: "spring", stiffness: 500, damping: 28 },
              y: { type: "spring", stiffness: 600, damping: 26 },
            }
      }
      aria-pressed={selected}
      aria-label={`Select: ${path.title}`}
    >
      {/* Icon chip */}
      <div
        className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: selected ? "rgba(10,22,40,0.08)" : "#F1F5F9",
          transition: "background 0.25s ease",
        }}
      >
        <Icon
          className="w-5 h-5"
          style={{
            color: selected ? "#0A1628" : "#64748B",
            transition: "color 0.25s ease",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Title + description */}
      <p
        className="font-ui font-semibold text-[15px] leading-snug mb-1.5"
        style={{
          color: selected ? "#0A1628" : "#1E293B",
          transition: "color 0.25s ease",
        }}
      >
        {path.title}
      </p>
      <p className="font-sans text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
        {path.description}
      </p>

      {/* Selected indicator dot */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={
              reduced
                ? { duration: 0.1 }
                : { type: "spring", stiffness: 800, damping: 20 }
            }
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ── Personalized Strip ────────────────────────────────────────────── */

function PersonalizedStrip({ path }: { path: AudiencePath }) {
  const Icon = path.icon;

  return (
    /* Height wrapper — smooth layout shift */
    <motion.div
      key={path.id}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      {/* Spring inner — slides up as the layout opens */}
      <motion.div
        initial={{ y: 22 }}
        animate={{ y: 0 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 28, delay: 0.06 }}
      >
        <div
          className="mt-6 rounded-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 55%, #EFF6FF 100%)",
            border: "1px solid #BFDBFE",
            boxShadow: "0 4px 28px rgba(10,22,40,0.07)",
          }}
          role="region"
          aria-live="polite"
          aria-label={`Personalized guidance for: ${path.title}`}
        >
          {/* Large ghosted background icon */}
          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Icon
              className="w-32 h-32"
              style={{ color: "#0A1628", opacity: 0.04 }}
            />
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-5">
            {/* Icon container */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(10,22,40,0.08)" }}
            >
              <Icon
                className="w-6 h-6"
                style={{ color: "#0A1628" }}
                aria-hidden="true"
              />
            </div>

            {/* Message */}
            <div className="flex-1 min-w-0">
              <p
                className="font-ui text-[11px] font-semibold uppercase tracking-[0.08em] mb-2"
                style={{ color: "#0891B2" }}
              >
                For you
              </p>
              <p className="font-sans text-[15px] leading-relaxed max-w-lg" style={{ color: "#334155" }}>
                {path.personalizedMessage}
              </p>
              <Link
                href={path.recommendedLink.href}
                className="inline-flex items-center gap-1.5 mt-3 font-ui text-[13px] font-medium group/link"
                style={{ color: "#1E3A5F" }}
              >
                {path.recommendedLink.label}
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 sm:self-center">
              <Link href={path.ctaHref} className="btn-emerald text-sm px-5">
                {path.ctaLabel}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── AudienceSelector ──────────────────────────────────────────────── */

export function AudienceSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const reduced = useReducedMotion() ?? false;

  const selectedPath = paths.find((p) => p.id === selected) ?? null;

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0.15 }
        : {
            type: "spring" as const,
            stiffness: 260,
            damping: 22,
            delay: i * 0.07,
          },
    }),
  };

  return (
    <section
      className="relative bg-white py-20 sm:py-24"
      aria-labelledby="selector-label"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section label */}
        <motion.p
          id="selector-label"
          className="font-ui text-xs font-semibold uppercase tracking-[0.1em] text-center mb-10"
          style={{ color: "#94A3B8" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tell us how we can help.
        </motion.p>

        {/* 3×2 card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="group"
          aria-labelledby="selector-label"
        >
          {paths.map((path, i) => (
            <motion.div
              key={path.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <PathCard
                path={path}
                selected={selected === path.id}
                dimmed={selected !== null && selected !== path.id}
                onSelect={() =>
                  setSelected((prev) => (prev === path.id ? null : path.id))
                }
                reduced={reduced}
              />
            </motion.div>
          ))}
        </div>

        {/* Personalized strip */}
        <AnimatePresence mode="wait">
          {selectedPath && (
            <PersonalizedStrip key={selectedPath.id} path={selectedPath} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
