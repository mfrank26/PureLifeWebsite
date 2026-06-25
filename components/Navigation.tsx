"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Menu, X, Phone, ChevronDown, ArrowRight,
  Shield, ShieldCheck, Pill, DollarSign, SlidersHorizontal,
  Clock, RefreshCw, Heart, Home, CheckCircle,
  Activity, Users, Leaf, LayoutGrid,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────── */

interface MenuItem {
  label: string;
  href: string;
  desc: string;
  icon: LucideIcon;
}

const megaMenuData: {
  medicare: { title: string; items: MenuItem[] };
  lifeInsurance: { title: string; items: MenuItem[] };
  benefits: { title: string; items: MenuItem[] };
} = {
  medicare: {
    title: "Medicare",
    items: [
      { label: "Medicare Advantage", href: "/medicare/advantage", desc: "All-in-one plan covering Parts A & B", icon: Shield },
      { label: "Medicare Supplement", href: "/medicare/supplement", desc: "Fill the gaps in Original Medicare", icon: ShieldCheck },
      { label: "Medicare Part D", href: "/medicare/part-d", desc: "Standalone prescription drug coverage", icon: Pill },
      { label: "Medicare Savings Programs", href: "/medicare/savings-programs", desc: "Help with premiums and cost-sharing", icon: DollarSign },
      { label: "Compare Plans", href: "/medicare/compare", desc: "Side-by-side plan comparison", icon: SlidersHorizontal },
    ],
  },
  lifeInsurance: {
    title: "Life Insurance",
    items: [
      { label: "Term Life Insurance", href: "/life-insurance/term", desc: "Affordable coverage for a set period", icon: Clock },
      { label: "Whole Life Insurance", href: "/life-insurance/whole", desc: "Permanent coverage with cash value", icon: RefreshCw },
      { label: "Final Expense", href: "/life-insurance/final-expense", desc: "Cover end-of-life costs simply", icon: Heart },
      { label: "Mortgage Protection", href: "/life-insurance/mortgage-protection", desc: "Keep your family in their home", icon: Home },
      { label: "No Exam Coverage", href: "/life-insurance/no-exam", desc: "Coverage without a medical exam", icon: CheckCircle },
    ],
  },
  benefits: {
    title: "Government Benefits",
    items: [
      { label: "ACA Marketplace", href: "/benefits/aca-marketplace", desc: "Health coverage before Medicare age", icon: Activity },
      { label: "Medicaid", href: "/benefits/medicaid", desc: "Low-income health coverage", icon: Users },
      { label: "SNAP Benefits", href: "/benefits/snap", desc: "Food assistance you may qualify for", icon: Leaf },
      { label: "All Programs", href: "/benefits/programs", desc: "Full directory of benefit programs", icon: LayoutGrid },
    ],
  },
};

const featuredResources = [
  { label: "Turning 65 Complete Guide", href: "/knowledge/medicare/turning-65-guide" },
  { label: "AEP Checklist (PDF)", href: "/knowledge/tools" },
];

/* ── Types ─────────────────────────────────────────────────────────── */

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/* ── MegaMenu ──────────────────────────────────────────────────────── */

function MenuItemLink({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className="group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/[0.06]"
    >
      <div
        className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5 transition-colors"
        style={{ background: "rgba(43,200,232,0.08)" }}
      >
        <Icon className="w-[15px] h-[15px] text-cyan-500 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
      </div>
      <div>
        <span className="block font-ui text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
          {item.label}
        </span>
        <span className="block text-[12px] text-silver-500 mt-0.5 leading-relaxed">{item.desc}</span>
      </div>
    </Link>
  );
}

function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-0 right-0 shadow-2xl"
          style={{
            background: "rgba(8, 18, 36, 0.96)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
          onMouseLeave={onClose}
          role="dialog"
          aria-label="Services navigation"
        >
          <div className="max-w-[1280px] mx-auto px-6 py-8">
            <div className="grid grid-cols-4 gap-8">
              {/* Medicare */}
              <div>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-500 mb-4 px-3">
                  {megaMenuData.medicare.title}
                </p>
                <ul className="space-y-0.5">
                  {megaMenuData.medicare.items.map((item) => (
                    <li key={item.href}>
                      <MenuItemLink item={item} onClose={onClose} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Life Insurance */}
              <div>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-500 mb-4 px-3">
                  {megaMenuData.lifeInsurance.title}
                </p>
                <ul className="space-y-0.5">
                  {megaMenuData.lifeInsurance.items.map((item) => (
                    <li key={item.href}>
                      <MenuItemLink item={item} onClose={onClose} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Government Benefits */}
              <div>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-500 mb-4 px-3">
                  {megaMenuData.benefits.title}
                </p>
                <ul className="space-y-0.5">
                  {megaMenuData.benefits.items.map((item) => (
                    <li key={item.href}>
                      <MenuItemLink item={item} onClose={onClose} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speak with an agent */}
              <div style={{ borderLeft: "1px solid rgba(255,255,255,0.07)", paddingLeft: "2rem" }}>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-silver-400 mb-4">
                  Speak with an Agent
                </p>
                <p className="text-[13px] text-silver-400 mb-4 leading-relaxed">
                  Questions? Our licensed advisors answer in under 30 seconds.
                </p>
                <a
                  href="tel:8001234567"
                  className="block font-ui text-xl font-bold text-white mb-4 nav-link-glow"
                >
                  (800) XXX-XXXX
                </a>
                <Link
                  href="/quote"
                  onClick={onClose}
                  className="btn-emerald text-sm px-5 py-2.5 min-h-0 min-w-0 w-full justify-center"
                >
                  Schedule a Call
                </Link>

                <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-silver-400 mb-3">
                    Featured Resources
                  </p>
                  <ul className="space-y-2">
                    {featuredResources.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          onClick={onClose}
                          className="group flex items-center gap-2 text-[13px] text-silver-400 nav-link-glow"
                        >
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Mobile Drawer ─────────────────────────────────────────────────── */

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileDrawer({ isOpen, onClose }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [medicareOpen, setMedicareOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [benefitsOpen, setBenefitsOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const AccordionSection = ({
    title,
    items,
    isOpen: open,
    toggle,
  }: {
    title: string;
    items: { label: string; href: string }[];
    isOpen: boolean;
    toggle: () => void;
  }) => (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-4 font-ui font-medium text-white nav-link-glow"
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 text-silver-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 pl-3 text-sm text-silver-400 hover:text-white transition-colors"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[min(360px,100vw)] bg-navy-950 z-50 lg:hidden flex flex-col"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <a
                href="tel:8001234567"
                className="flex items-center gap-2 font-ui text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (800) XXX-XXXX
              </a>
              <button
                onClick={onClose}
                className="p-2 text-silver-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
              <AccordionSection
                title="Medicare"
                items={megaMenuData.medicare.items}
                isOpen={medicareOpen}
                toggle={() => setMedicareOpen((v) => !v)}
              />
              <AccordionSection
                title="Life Insurance"
                items={megaMenuData.lifeInsurance.items}
                isOpen={lifeOpen}
                toggle={() => setLifeOpen((v) => !v)}
              />
              <AccordionSection
                title="Government Benefits"
                items={megaMenuData.benefits.items}
                isOpen={benefitsOpen}
                toggle={() => setBenefitsOpen((v) => !v)}
              />
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <Link
                  href="/knowledge"
                  onClick={onClose}
                  className="block px-6 py-4 font-ui font-medium text-white nav-link-glow"
                >
                  Learning Center
                </Link>
              </div>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <Link
                  href="/partners"
                  onClick={onClose}
                  className="block px-6 py-4 font-ui font-medium text-white nav-link-glow"
                >
                  Partners
                </Link>
              </div>
              <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <Link
                  href="/agents"
                  onClick={onClose}
                  className="block px-6 py-4 font-ui font-medium text-white nav-link-glow"
                >
                  Agents
                </Link>
              </div>

              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="font-ui text-xs uppercase tracking-widest text-silver-400">Language:</span>
                <button className="font-ui text-sm font-semibold text-white">EN</button>
                <span className="text-silver-600">|</span>
                <Link
                  href="/es"
                  className="font-ui text-sm font-semibold text-silver-400 hover:text-cyan-400 transition-colors"
                >
                  ES
                </Link>
              </div>
            </nav>

            <div className="p-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <Link href="/quote" onClick={onClose} className="btn-emerald w-full justify-center">
                Get My Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Navigation ────────────────────────────────────────────────────── */

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const openMega = useCallback(() => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[100] px-4 py-2 bg-cyan-500 text-navy-950 font-ui font-semibold text-sm rounded-lg
                   opacity-0 focus:opacity-100 -translate-y-2 focus:translate-y-0 transition-all"
      >
        Skip to content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,20,40,0.82)" : "rgba(4,16,31,0.20)",
          backdropFilter: "blur(28px) saturate(200%)",
          WebkitBackdropFilter: "blur(28px) saturate(200%)",
          borderBottom: "none",
          boxShadow: scrolled
            ? "0 4px 32px rgba(4,16,31,0.50)"
            : "0 1px 20px rgba(4,16,31,0.20)",
        }}
      >
        <nav
          className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[76px]"
          aria-label="Main navigation"
        >
          {/* Logo — ~22% larger */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-navy-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-base italic">P</span>
            </div>
            <span className="font-ui font-bold text-white text-[1.125rem] leading-none">
              Pure Life
              <span className="block text-[11px] font-normal tracking-[0.12em] uppercase text-silver-400 mt-0.5">
                Insurance Services
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            <li>
              <button
                className="flex items-center gap-1.5 px-4 py-2 font-ui text-[15px] font-medium text-silver-300 rounded-lg hover:bg-white/[0.06] nav-link-glow"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                onClick={() => setMegaOpen((v) => !v)}
                aria-expanded={megaOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>
            </li>
            {[
              { label: "Learning Center", href: "/knowledge" },
              { label: "Partners", href: "/partners" },
              { label: "Agents", href: "/agents" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 font-ui text-[15px] font-medium text-silver-300 rounded-lg hover:bg-white/[0.06] block nav-link-glow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 font-ui text-[13px]">
              <button className="font-semibold text-white">EN</button>
              <span className="text-silver-600">|</span>
              <Link href="/es" className="text-silver-400 hover:text-cyan-400 transition-colors">
                ES
              </Link>
            </div>

            <a
              href="tel:8001234567"
              className="flex items-center gap-2 font-ui text-[14px] font-medium text-silver-300 nav-link-glow"
            >
              <Phone className="w-3.5 h-3.5" />
              (800) XXX-XXXX
            </a>

            <Link href="/quote" className="btn-emerald text-sm px-5 py-2.5 min-h-0 min-w-0 gap-1.5">
              Get My Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile right side */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:8001234567"
              className="p-2 text-silver-400 hover:text-cyan-400 transition-colors"
              aria-label="Call (800) XXX-XXXX"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-silver-400 hover:text-white transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>

        <div onMouseEnter={openMega} onMouseLeave={closeMega}>
          <MegaMenu isOpen={megaOpen} onClose={() => setMegaOpen(false)} />
        </div>
      </header>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
