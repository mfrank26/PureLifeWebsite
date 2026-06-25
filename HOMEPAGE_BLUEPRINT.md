# Pure Life Insurance — Homepage Blueprint
### Revised Edition

> **Status: DESIGN ONLY — Awaiting approval before any code is written.**
> **Roles:** Creative Director · UX Lead · CRO Specialist · Senior Product Designer

---

## Revisions Incorporated

| Revision | Change |
|---|---|
| Hero | Visitor's problem first, not the company. New headline direction. Premium visual specification. |
| Hero Design | Deep navy + silver wing gradients + cyan accent lighting + glass panels. No stock photography. |
| Audience Selector | Expanded to 6 options. Interactive personalization described. Moved earlier. |
| AI Assistant | Moved from Section 10 to Section 3 — immediately after Audience Selector. |
| Independent Agency | New dedicated section added between Services and How It Works. |
| Section Order | Agent Showcase moved before Testimonials. People trust people before they trust reviews. |
| Emotional Arc | Updated to: Confusion → Relief → Understanding → Confidence → Trust → Action. |
| Build Phases | Phase 1 scoped to: Navigation + Hero + Audience Selector + Credibility Bar only. |

---

## The Story the Homepage Tells

The visitor does not arrive looking for an insurance company. They arrive carrying a problem.

They are 64 and the Medicare enrollment window is opening. They got a letter from their current carrier announcing plan changes they don't understand. Their mother just lost her employer coverage and they don't know where to start. They've been on Medicare.gov for two hours and now they're more confused than when they began.

The homepage's job is to meet them exactly where they are — before selling anything, before naming the company, before explaining any products.

**The homepage is structured as a conversation, not a sales page.**

The visitor should feel, section by section:

```
CONFUSION         → "This is exactly my situation."  (Hero)
RELIEF            → "I can choose my path here."     (Audience Selector)
CURIOSITY         → "I can get answers before I call." (AI Introduction)
CREDIBILITY       → "These people are the real thing."  (Credibility Bar)
UNDERSTANDING     → "Now I see how this works."       (Independent Agency + Services)
PROCESS CLARITY   → "I know what happens next."       (How It Works)
TRUST             → "Real people. Real outcomes."     (Agent Showcase → Testimonials)
CONFIDENCE        → "There's a wealth of knowledge here."  (Knowledge Center)
VALIDATION        → "They're embedded in my community."    (Partnerships)
ACTION            → "I'm ready."                     (Final CTA)
```

Every section earns its place by advancing this arc. No section exists because insurance websites usually include it.

---

## Revised Section Order

| # | Section | Emotional Moment |
|---|---|---|
| 0 | Navigation | Orientation |
| 1 | Hero | Confusion → Recognition |
| 2 | Audience Selector | Recognition → Relief |
| 3 | AI Assistant Introduction | Relief → Curiosity |
| 4 | Credibility Bar | Curiosity → Credibility |
| 5 | Independent Agency | Credibility → Understanding |
| 6 | Services Overview | Understanding |
| 7 | How It Works | Understanding → Process Clarity |
| 8 | Agent Showcase | Process Clarity → Human Trust |
| 9 | Testimonials | Human Trust → Social Proof |
| 10 | Knowledge Center | Social Proof → Confidence |
| 11 | Trust Architecture | Confidence → Validation |
| 12 | Medical Partnerships | Validation → Community Trust |
| 13 | Agent Success (brief) | — (secondary audience) |
| 14 | Final CTA | Action |
| 15 | Footer | Navigation + nurture |

---

## Phase 1 Build Scope

**Build only these four sections first:**

1. Navigation
2. Hero
3. Audience Selector
4. Credibility Bar

After Phase 1 is built:
- Polish desktop
- Polish tablet
- Polish mobile
- Optimize accessibility
- Optimize animations
- Optimize performance
- Review against DESIGN.md, PRODUCT.md, SITE_ARCHITECTURE.md, EXPERIENCE.md

**Then stop. Wait for approval before building Phase 2.**

---

## Section-by-Section Blueprint

---

### SECTION 0 — NAVIGATION

**Why it exists:** The navigation is the visitor's constant companion — orientation, trust signal, and always-available escape route. It should feel settled and confident, never anxious.

**Psychological purpose:** A navigation that is clean, unhurried, and complete communicates that the organization has nothing to hide and nothing to prove. Clutter in a nav bar is a visual signal of disorganization.

**Desktop layout:**
```
[Pure Life Logo — left]   [Services ▾]  [Knowledge Center]  [Partners]  [Agents]   [EN|ES]   [(800) XXX-XXXX]   [Get My Free Quote →]
```

**Visual behavior:**
- On load: fully transparent background. Logo and links in white/silver. No border.
- After 80px scroll: `backdrop-filter: blur(20px)` activates. Background becomes `rgba(10,22,40,0.88)`. A 1px silver border fades in at the bottom edge.
- The glass effect transition: 300ms ease-out. Never jarring.
- Phone number: always visible, silver-400, 15px, tap-to-call. Never hidden on any scroll state.
- "Get My Free Quote": emerald button, 40px height, 14px, rounded-lg. Persistent.

**Mobile layout:**
```
[Pure Life Logo — left]                     [(800) icon]  [≡ Menu]
```
- Hamburger opens full-height drawer from right
- Drawer background: navy-950 with subtle silver shimmer border on left edge
- Navigation links stacked with 20px vertical rhythm
- Language toggle (EN | ES) below main links
- Phone number as tap-to-call near the top of the drawer
- Emerald "Get My Free Quote" button: full-width, 56px, pinned to bottom of drawer

**Motion:**
- Page load: nav links fade in left to right at 80ms stagger, 400ms duration, beginning after the hero headline starts its animation (not before — the hero should dominate first)
- Scroll glass transition: 300ms ease-out
- Mobile drawer: slides in from right, 300ms cubic-bezier(0.16, 1, 0.3, 1)
- Hamburger → X: morphs via SVG path animation, 200ms

**Mega menu (Services):**
Full-width panel below nav, navy-900 background with glass border.
Four columns: Medicare · Life Insurance · Government Benefits · Speak with an Agent (persistent).
Featured resource cards at the bottom pulling from Knowledge Center.
Appears on hover (200ms delay to prevent accidental triggers) and keyboard focus.
Closes on Escape, outside click, or focus leaving the menu.

**Accessibility:**
- `<nav aria-label="Main navigation">`
- Skip-to-content link: first focusable element in the DOM, visually hidden until focused, then appears as a cyan pill at the top of the viewport
- Mega menu: `role="dialog"` equivalent pattern, keyboard navigable, Escape to close
- Mobile drawer: focus trapped when open, focus returns to hamburger on close
- `aria-expanded` on hamburger button

**SEO:**
- Logo: `<a href="/">` with `alt="Pure Life Insurance Services"`
- Navigation links: descriptive text, no icons-only links

---

### SECTION 1 — HERO *(Revised)*

**The fundamental revision:** The hero begins with the visitor's problem, not the company's solution. The visitor must read the headline and think: *"This website understands exactly where I am."*

---

#### Headline Direction

The headline speaks directly to the emotional reality of someone navigating Medicare for the first time, reviewing a plan change, or trying to help a parent. It validates their experience before offering anything.

**Primary headline candidates — all written visitor-first:**

**Option A — Validation:**
> *"You Shouldn't Have to Figure Out Medicare Alone."*

**Option B — Empathy:**
> *"Medicare Has 156 Plan Options. You Deserve Someone Who Knows All of Them."*

**Option C — Direct relief:**
> *"Confused About Medicare? So Is Almost Everyone. Here's What Helps."*

**Option D — Promise:**
> *"The Medicare Decision You'll Feel Good About — Finally."*

**Recommended:** Option A. It names the isolation anxiety that is the primary emotional barrier for Medicare newcomers. The word "Alone" carries weight — it addresses fear, not confusion. Every target audience (turning 65, reviewing a plan, helping a parent) can see themselves in it.

**Subheadline — the company's role, stated after the visitor is recognized:**
> "Pure Life Insurance compares plans from 50+ carriers to find the right coverage for your specific situation — at no cost to you."

The subheadline earns its place because the headline has already created recognition. Now the visitor wants to know who is speaking and what they offer.

**Supporting trust strip** (directly below CTAs, 13px, silver-500):
```
🔒 Licensed in [X] states  ·  50+ carriers compared  ·  A licensed agent answers in < 30 seconds
```

**CTAs:**
- Primary: Emerald — "Get My Free Quote →" — 56px height, 220px min-width
- Secondary: Ghost/outline — "Explore Medicare Plans" — same height, cyan border

---

#### Hero Visual Design *(New specification — premium, no stock photography)*

**The philosophy:** The hero is cinematic. It is not a photo of a smiling senior. It is not a generic gradient. It is a custom-composed visual that communicates the brand's identity through atmosphere and light — the same way a premium financial services company signals its character through its physical space.

**Visual inspiration:** The Pure Life logo contains two elements: a heart in cyan-to-navy gradient, and a silver eagle with spread wings. These are not decorative — they are the brand's soul. The hero translates those elements into an abstract visual language.

**Background:**
- Base layer: `navy-950` (#04101F) — the deepest color in the palette. Establishes authority and depth.
- No photography. No illustration. Light and geometry.

**Layered visual elements (back to front):**

**Layer 1 — The Wing Gradient Field:**
Two sweeping silver gradient arcs, large and abstract, positioned in the lower-center of the composition. They echo the spread wings of the logo bird — not literally, but in feeling. These are not wing illustrations; they are gradient fields that create the *impression* of wings: curved, graceful, protective. Each arc is `linear-gradient` from `rgba(168,178,188,0.12)` at the outer edge to `rgba(168,178,188,0.0)` at the center. Together they form a subtle V-shape of light, as if something is rising from below the screen. These are large — each spanning 40% of the viewport width.

**Layer 2 — The Cyan Heart Glow:**
A single radial gradient centered in the upper-right quadrant, `rgba(43,200,232,0.15)` at center to transparent at edges. Diameter: 500px. This is not a shape — it is ambient light. It gives the dark background a focal point and echoes the cyan heart in the logo without reproducing it.

**Layer 3 — The Navy Depth Gradient:**
A deep radial gradient in the lower-left, `rgba(27,82,152,0.25)` fading to transparent. Creates a sense of depth and dimension in the dark field.

**Layer 4 — Glass Panel (contains the hero content):**
The headline, subheadline, and CTAs sit inside a glass panel:
```css
background: rgba(255,255,255,0.03)
backdrop-filter: blur(24px) saturate(180%)
border: 1px solid rgba(255,255,255,0.07)
border-radius: 20px
padding: 56px 64px
```
The glass panel is positioned left-of-center on desktop. It does not fill the full viewport — its edges fade into the dark background, as if the content is emerging from the depth behind it. The right side of the viewport beyond the panel breathes — open dark space with the wing gradients and cyan glow.

**Layer 5 — Silver Micro-Texture:**
At 2% opacity, a very fine noise/grain texture applied to the background. Visible only on high-resolution displays, it adds material depth — the difference between a printed piece and a screen-captured one.

**Light philosophy:** The hero has a single implied light source — above-right, cyan-tinted. This is where the glow lives. The wing gradients catch this light from below, creating a sense of something rising toward it. The glass panel reflects it softly. This directional lighting makes the composition feel three-dimensional without using 3D.

**Typography within the glass panel:**
- Eyebrow label: 12px, Plus Jakarta Sans, uppercase, letter-spacing 0.1em, silver-400 — "INDEPENDENT MEDICARE & INSURANCE ADVISORY"
- Headline: Cormorant Garamond, 72px desktop / 48px mobile, white, weight 600, line-height 1.1, letter-spacing -0.02em
- Subheadline: Inter, 19px, silver-300, line-height 1.7, max-width 500px
- CTAs: side by side (desktop), stacked (mobile)
- Trust strip: below CTAs, 13px

**Desktop composition:**
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                         [Cyan glow — upper right]       │
│   ┌─────────────────────────────────┐                                   │
│   │ [glass panel]                   │                                   │
│   │                                 │         [Open dark space +        │
│   │  INDEPENDENT MEDICARE ADVISORY  │          wing gradient arcs       │
│   │                                 │          in lower-right area]     │
│   │  "You Shouldn't Have to         │                                   │
│   │  Figure Out Medicare Alone."    │                                   │
│   │                                 │                                   │
│   │  Pure Life compares plans from  │                                   │
│   │  50+ carriers to find the right │                                   │
│   │  coverage for your situation.   │                                   │
│   │                                 │                                   │
│   │  [Get My Free Quote]  [Explore] │                                   │
│   │                                 │                                   │
│   │  🔒 Licensed · 50+ carriers    │                                   │
│   └─────────────────────────────────┘                                   │
│                                                                         │
│        [Wing gradient arcs — lower center — silver, abstract]          │
└─────────────────────────────────────────────────────────────────────────┘
```

Height: 100vh. Content vertically centered at 48%.

**Mobile composition:**
- Glass panel becomes full-screen (no floating panel — it fills the viewport)
- Wing gradients positioned at bottom of screen below the content
- Cyan glow moves to top-center
- Content stacked: eyebrow → headline → subheadline → CTAs (full-width, stacked) → trust strip
- Background grain texture disabled (performance)

**Motion:**
All entrance animations are sequential — the hero builds itself in front of the visitor:
1. Background layers (wing gradients, cyan glow): present immediately, opacity 0 → 1, 800ms, ease-out
2. Glass panel border: fades in, 600ms, delay 100ms
3. Eyebrow label: fade-up from `translateY(12px)`, 500ms, delay 200ms
4. Headline: fade-up from `translateY(20px)`, 700ms, delay 350ms — the most important element gets the most time
5. Subheadline: fade-up, 500ms, delay 600ms
6. CTAs: fade-up, 400ms, delay 800ms
7. Trust strip: fade-in only (no translate), 300ms, delay 1100ms
8. Wing gradient orbs: very slow drift — each on a 50-second loop, independent directions, amplitude ~30px. Never distracting. Felt, not seen.

**Reduced motion:** Orb drift disabled. All translates become instant fades. Stagger timing halved.

**Accessibility:**
- H1 on the headline
- Glass panel: no accessibility role needed — it is a layout container
- Background decorative elements: `aria-hidden="true"`
- Eyebrow label: `aria-label` on parent element clarifies it is a descriptor
- Orb animation: `@media (prefers-reduced-motion: no-preference)` guard

**SEO:**
- H1: "You Shouldn't Have to Figure Out Medicare Alone." — contains implicit Medicare keyword
- Eyebrow label text: "Independent Medicare & Insurance Advisory" — contains explicit keyword
- Meta title: "Medicare & Life Insurance Plans | Pure Life Insurance Services"
- Server-rendered (no client-only content above fold)

---

### SECTION 2 — INTERACTIVE AUDIENCE SELECTOR *(Revised)*

**Why it exists:** A homepage that tries to speak to everyone speaks to no one. The audience selector transforms a generic page into a personalized path — immediately after the hero creates recognition, this section offers resolution: *"Your specific path is here."*

**Psychological purpose:** Empowerment and self-determination. The visitor is given control of their experience before anything is asked of them. Choosing a path is an act of engagement, not commitment. The cognitive effect is profound: a visitor who has self-selected their journey is more likely to complete it.

**Conversion goal:** Increase time-on-page and click-through rate by routing visitors to the content most relevant to their situation. Reduce bounce rate by ensuring every visitor type is explicitly acknowledged.

**Transition from hero:** The section appears immediately below the hero with zero gap — it feels like part of the same experience, the next step in a conversation, not a separate page section.

**Section framing (above the cards):**
Plus Jakarta Sans, 14px, uppercase, silver-400, letter-spacing 0.08em — centered:
> "WHAT BRINGS YOU HERE TODAY?"

No headline. The label is enough. The cards do the explaining.

---

**The Six Paths:**

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   [Icon]         │  │   [Icon]         │  │   [Icon]         │
│                  │  │                  │  │                  │
│  I'm Turning 65  │  │  I Already Have  │  │  I'm Helping     │
│                  │  │  Medicare        │  │  My Parents      │
│  First-time      │  │                  │  │                  │
│  Medicare        │  │  Reviewing or    │  │  Navigating      │
│  coverage.       │  │  switching       │  │  coverage for    │
│  Start here.     │  │  plans.          │  │  someone I love. │
└──────────────────┘  └──────────────────┘  └──────────────────┘

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   [Icon]         │  │   [Icon]         │  │   [Icon]         │
│                  │  │                  │  │                  │
│  I Need Life     │  │  Government      │  │  I'm a Licensed  │
│  Insurance       │  │  Benefits        │  │  Agent           │
│                  │  │                  │  │                  │
│  Term, whole,    │  │  SNAP, Medicaid, │  │  Looking for a   │
│  final expense,  │  │  ACA, and more   │  │  better agency   │
│  or mortgage     │  │  — see what      │  │  to build my     │
│  protection.     │  │  you qualify for.│  │  career with.    │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Card icons (Lucide React, 28px):**
- Turning 65: `Calendar` — new beginning
- Already Have Medicare: `RefreshCw` — review and reconsider
- Helping Parents: `Heart` — care and family
- Life Insurance: `Shield` — protection
- Government Benefits: `Building` or `Landmark` — institutional
- Licensed Agent: `Briefcase` — professional

**The personalization interaction:**

When a visitor selects a card:
1. The selected card receives a cyan glow border and slightly scales up (1.02)
2. The other cards dim to 60% opacity with a smooth 200ms transition
3. A personalized content strip slides down below the card grid (240ms ease-out) — a single row of context containing:
   - A short, specific message for that audience ("Great — you're in the right place. Here's the most important thing to know as you approach 65...")
   - A recommended path link (e.g., "Start with the Turning 65 Guide →")
   - A CTA: "Talk to a specialist for your situation" (ghost button — not emerald yet)
4. The page does not redirect. The visitor remains on the homepage with personalized context surfaced beneath the selector.

This interaction does not require a backend. It is client-side state — the appropriate content strip is pre-rendered and revealed on selection.

**Visual design:**

Cards sit on navy-800 surfaces with 1px silver shimmer border at rest. The selector sits on a slightly lighter navy-900 background, differentiating it from the hero while maintaining visual continuity. No heavy dividers between hero and this section — the transition is atmospheric (a subtle 100px gradient from navy-950 to navy-900).

**Desktop:** 3×2 grid. 32px gap. Cards: 260px wide minimum, auto height.
**Tablet:** 3×2 grid, smaller cards.
**Mobile:** 2×3 grid on large mobile. 1×6 vertical stack on small mobile (< 400px). Cards are compact on mobile — icon + short title + one-line description only, no paragraph.

**Motion:**
- Section entrance on scroll: All 6 cards fade-in simultaneously at 400ms, ease-out — they arrive as a unified set, not a staggered performance
- Individual hover: card lifts 4px, border brightens, icon shifts to cyan — all 200ms ease-spring
- Selection interaction: 200ms dim for non-selected, 200ms glow for selected
- Personalized content strip: slides down from height: 0 → auto over 240ms ease-out, with fade

**Accessibility:**
- Cards are `<button>` elements (or `<a>` if they navigate), not `<div>`s
- Selected state: `aria-pressed="true"` on the active card
- Personalized strip: `aria-live="polite"` so screen readers announce the new content
- All icons: `aria-hidden="true"`
- Card labels: full descriptive text as the accessible name

**SEO:**
- Card text contains natural keyword phrases: "Turning 65 Medicare," "Medicare plan review," "life insurance," "government benefits"
- The personalized content strips contain additional keyword-rich anchor text to inner pages

---

### SECTION 3 — AI ASSISTANT INTRODUCTION *(Moved up from Section 10)*

**Why it exists here:** The AI assistant is most valuable at the moment a visitor has a question they're not yet ready to call about. That moment happens right now — they've just identified their situation in the audience selector, and they have questions. Waiting until the Knowledge Center (Section 10 in the original blueprint) wastes this readiness.

**Psychological purpose:** Reduction of the commitment barrier. The single biggest reason qualified visitors don't call is that they feel the call is irreversible — "if I call, they'll pressure me." The AI assistant offers a zero-commitment alternative: *get answers first, call when you're ready.* This does not cannibalize phone leads — it warms them.

**Conversion goal:** Activate the AI assistant as a lead warm-up tool. Visitors who engage with the AI and receive a helpful answer are significantly more likely to convert when they do reach out to an agent.

**The critical tone note:** The AI should feel helpful, not robotic. This section introduces it as a knowledgeable companion — not a chatbot, not an automated system.

**Section design — contained, not full-bleed:**

This section is deliberately understated. It is not a hero-scale announcement. It is a quiet, elegant introduction — a shelf-card, not a billboard.

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  [Small icon: message-circle, cyan, 24px]                              │
│                                                                        │
│  Have Questions Before You're Ready to Call?                           │
│                                                                        │
│  Ask our AI assistant. It knows Medicare, life insurance, ACA,         │
│  government benefits, and more — and it's available right now,         │
│  before you speak with a licensed advisor.                             │
│                                                                        │
│  ┌─────────────────────────────────────────────────────────────────┐  │
│  │  Ask anything — "What's the difference between Medicare         │  │
│  │  Advantage and Supplement?" →                                   │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                        │
│  [Ask the Assistant →]  ← opens the AI chat panel                     │
│                                                                        │
│  Educational only · Personalized plan advice from a licensed agent     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

**Design spec:**
- Container: max-width 720px, centered
- Background: navy-800, 1px silver shimmer border, 24px border-radius — the premium card treatment
- Cyan icon at top-left, small — not dominant
- Headline: Plus Jakarta Sans, H3 weight, 22px, white
- Body: Inter, 16px, silver-300
- Example prompt box: navy-700, 1px rgba(white,0.08) border, 14px silver-400 text — appears as an invitation, not a real input
- "Ask the Assistant" button: ghost/outline, cyan border and text — not emerald (that is reserved for primary lead capture)
- Disclaimer beneath button: 12px, silver-500, centered

**Clicking "Ask the Assistant":** Opens the full AI chat panel (bottom-right drawer / full-screen on mobile). The example question is optionally pre-populated into the input.

**Desktop:** Full-width centered container with max-width constraint, never touching the viewport edges.
**Mobile:** Same card, full-width with 20px horizontal padding. The example prompt shows a shorter variant.

**Motion:**
Section fades and rises into view on scroll (400ms, ease-out). The example prompt blinks a cursor once on first viewport entry — a subtle animation suggesting life, then stopping. The "Ask the Assistant" button has a gentle cyan glow pulse on hover.

**Accessibility:**
- The example prompt box is `aria-label="Example question for the AI assistant"` — not a real input, so no form role
- "Ask the Assistant" button: descriptive `aria-label`
- Disclaimer text: appropriate contrast (silver-500 on navy-800 meets AA)

---

### SECTION 4 — CREDIBILITY BAR

**Why it exists:** The visitor has now identified their situation (Section 2) and been introduced to a support resource (Section 3). Before the page begins explaining Medicare or insurance, a quiet but powerful moment of institutional validation is needed: *"These people are real, licensed, and trusted by the names you already know."*

**Psychological purpose:** Legitimacy through association and specificity. Named carrier logos signal that major insurance companies have accepted Pure Life as a distribution partner — an implicit endorsement that no marketing copy can replicate. Specific numbers (not ranges, not adjectives) signal honesty.

**Conversion goal:** Complete the transition from "evaluating the brand" to "engaging with the content." A visitor who doubts legitimacy stops reading here. This section eliminates that doubt.

**Layout:**

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│  INDEPENDENT AGENCY — TRUSTED CARRIER PARTNERS                          │
│                                                                          │
│  [Humana]  [UnitedHealthcare]  [Aetna]  [BCBS]  [Cigna]  [Wellcare]   │
│                                                                          │
│  ─────────────────────────────────────────────────────────────────────  │
│                                                                          │
│     [1,200+]          [50+]            [15]              [< 30 sec]     │
│    Clients Served  Carriers Compared  States Licensed   Agent Callback  │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Carrier logos:**
- White/monochrome SVG variants
- 60% opacity at rest → 100% on hover (200ms)
- If actual carrier SVGs are unavailable at build time: use the carrier names in Plus Jakarta Sans Medium, silver-400, tracked — equally professional, avoids placeholder image artifacts
- Logos are evenly spaced in a single row, vertically centered

**Number statistics:**
- Stat numbers: Cormorant Garamond, 3rem, white — the serif creates a premium ledger-style presentation
- Stat labels: Plus Jakarta Sans, 11px, uppercase, silver-500, letter-spacing 0.08em
- Number counter animation: triggers once when section enters viewport (60% threshold). Counts from 0 to final value over 1,200ms, ease-out. Never replays on subsequent scrolls.

**Background:**
Navy-900, separated from Section 3 by a 1px silver gradient line (very subtle — `rgba(168,178,188,0.15)`). Not a divider, just a visual breath.

**Desktop:** Full-width. Carrier logos centered. Stats in a 4-column grid below.
**Tablet:** Carrier logos wrap into 2 rows. Stats remain 4 columns.
**Mobile:** Carrier logos in a 2×3 grid. Stats in a 2×2 grid. Both centered.

**Motion:**
- Section entrance: fade-in, 400ms — no translate (this section is institutional, not energetic)
- Carrier logos: stagger 50ms each, fade-in, 300ms
- Counter animation: triggered at 60% viewport entry, 1,200ms count-up

**Accessibility:**
- Carrier logos: `alt` text describing the carrier (e.g., `alt="Humana — carrier partner"`)
- Stat counters: `aria-label` on each stat element ("1,200 clients served"). Reduced motion: final value displayed immediately, no count-up.
- Section label: `role="region"` with `aria-label="Carrier partners and company statistics"`

**SEO:**
- Section label text "Independent Agency — Trusted Carrier Partners" contains primary keyword "independent [insurance] agency"
- Stats are crawlable text (not images)

---

### SECTIONS 5–14 — PHASE 2 BLUEPRINT

*(These sections are defined below for reference and will be fully detailed during Phase 2 implementation. Not built until Phase 1 is approved.)*

---

### SECTION 5 — INDEPENDENT AGENCY *(New section)*

**Why it exists:** This is a new section absent from the original blueprint. Most visitors — including seniors who have been choosing their own coverage for decades — do not understand what an independent insurance agency is or why it benefits them. Without this understanding, the differentiator "50+ carriers" is just a number. With it, that number becomes a profound reason to choose Pure Life over going directly to a carrier.

**Psychological purpose:** Education that creates preference. A visitor who understands the independent agency model will actively prefer it over a captive agent or a carrier's website — not because we told them to, but because they now understand why it serves their interests better.

**Layout approach:** Two-column split on desktop. Left: the "before" (going direct to a carrier). Right: the "with Pure Life" (independent). The comparison is made without criticizing insurance companies — purely by contrast.

**Five key benefits (each gets a brief treatment):**

1. **Access to multiple carriers** — "We compare plans from 50+ insurance companies, not just one."
2. **Personalized recommendations** — "We ask about your doctors, your medications, and your budget before recommending anything."
3. **Annual reviews** — "Every year before enrollment season, we review your plan and make sure it's still the best option."
4. **Ongoing support** — "We're your advocate for as long as you're a client — not just during enrollment."
5. **No additional cost** — "Our services are free to you. We're compensated by the carrier you choose, not by charging you a fee."

**The final point — no additional cost — is the most important.** Most visitors assume working with an agent costs money. Removing this barrier is essential.

---

### SECTION 6 — SERVICES OVERVIEW

*(Unchanged from original blueprint — three service cards: Medicare, Life Insurance, Government Benefits.)*

---

### SECTION 7 — HOW IT WORKS

*(Unchanged from original blueprint — three steps: Tell Us / We Compare / You Enroll.)*

---

### SECTION 8 — AGENT SHOWCASE *(Moved before Testimonials)*

**The revision rationale:** People trust people before they trust reviews. A visitor who sees a face, a name, and a credential will read a testimonial with the knowledge that a real person behind this brand served the reviewer. The reverse order — testimonials then agents — feels like claim before evidence. The correct emotional sequence is: *Meet the team → Hear from their clients.*

**Purpose:** Humanization before social proof. The agent showcase puts names and faces to the brand before asking the visitor to trust anonymous reviews.

*(Full specification unchanged from original blueprint.)*

---

### SECTION 9 — TESTIMONIALS

*(Moved to after Agent Showcase. Specification unchanged.)*

---

### SECTIONS 10–14 — KNOWLEDGE CENTER, TRUST ARCHITECTURE, PARTNERSHIPS, AGENT SUCCESS, FINAL CTA

*(Unchanged from original blueprint. Full specifications apply.)*

---

## CTA Placement Summary *(Revised)*

| Placement | Section | Type | Goal |
|---|---|---|---|
| 1 | Hero | Emerald primary button | Immediate high-intent capture |
| 2 | Audience Selector (personalized strip) | Ghost/secondary | Path-specific routing |
| 3 | AI Assistant Introduction | Ghost/cyan outline | AI engagement + pre-qualification |
| 4 | How It Works | Emerald primary button | Post-process-clarity capture |
| 5 | Final CTA | Full form + Emerald submit | Deep-funnel primary capture |
| 6 | Footer | Email newsletter | Long-cycle nurture |

**Phone number placements:** Navigation · Hero trust strip · How It Works ("or call us directly") · Final CTA · Footer utility bar

---

## Phase 1 Section Specifications Checklist

Before Phase 1 is submitted for approval, each section must satisfy:

**Navigation:**
- [ ] Transparent on load, glass on scroll
- [ ] Phone number always visible
- [ ] Emerald CTA persistent
- [ ] Mega menu keyboard navigable
- [ ] Mobile drawer with focus trap
- [ ] Skip-to-content link present

**Hero:**
- [ ] Visitor-first headline (Option A or revised)
- [ ] Glass panel on navy-950 background
- [ ] Wing gradient arcs (silver, abstract, lower-center)
- [ ] Cyan glow (radial, upper-right)
- [ ] Ambient orb drift (50-second loop, disabled on reduced motion)
- [ ] Sequential entrance animation (7 elements)
- [ ] Emerald primary + ghost secondary CTAs
- [ ] Trust strip below CTAs
- [ ] Fully responsive (desktop / tablet / mobile)
- [ ] H1 on headline
- [ ] All decorative elements aria-hidden

**Audience Selector:**
- [ ] All 6 paths present with correct icons
- [ ] Selection state: selected card glows, others dim
- [ ] Personalized content strip reveals on selection
- [ ] Cards are interactive elements (button or anchor), not divs
- [ ] aria-pressed on selected card
- [ ] aria-live on content strip
- [ ] 3×2 grid desktop, 2×3 tablet, 1×6 mobile

**Credibility Bar:**
- [ ] Carrier logos (SVG or text fallback)
- [ ] 4 stats with counter animation
- [ ] Counter fires once on viewport entry, never replays
- [ ] Reduced motion: final value immediate
- [ ] Accessible alt text and aria-labels on all stats

---

## Emotional Arc Confirmation *(Revised)*

```
Section 1 — Hero:               CONFUSION → RECOGNITION
Section 2 — Audience Selector:  RECOGNITION → RELIEF
Section 3 — AI Introduction:    RELIEF → CURIOSITY
Section 4 — Credibility Bar:    CURIOSITY → CREDIBILITY
Section 5 — Independent Agency: CREDIBILITY → UNDERSTANDING
Section 6 — Services:           UNDERSTANDING (deepens)
Section 7 — How It Works:       UNDERSTANDING → PROCESS CLARITY
Section 8 — Agent Showcase:     PROCESS CLARITY → HUMAN TRUST
Section 9 — Testimonials:       HUMAN TRUST → SOCIAL PROOF
Section 10 — Knowledge Center:  SOCIAL PROOF → CONFIDENCE
Section 11 — Trust Architecture: CONFIDENCE → VALIDATION
Section 12 — Partnerships:      VALIDATION → COMMUNITY TRUST
Section 13 — Agent Success:     (secondary audience)
Section 14 — Final CTA:         COMMUNITY TRUST → ACTION
```

---

> **APPROVAL CHECKPOINT**
>
> All 8 revisions have been incorporated. The blueprint is updated and ready for review.
>
> Phase 1 build scope is defined: Navigation + Hero + Audience Selector + Credibility Bar.
>
> No React code, JSX, or components will be written until this revised blueprint is approved.
