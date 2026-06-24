# Pure Life Insurance — Site Architecture

> **Status: AWAITING APPROVAL — No page code to be written until this document is approved.**

---

## Architecture Philosophy

This is not an insurance agency website with a homepage and a contact form. It is a premium financial services platform with five distinct audiences, two languages, three lead generation pipelines, two B2B journeys, and a long-term content authority strategy.

Every page has a job. Every URL earns its place. Every click moves a visitor toward either a licensed agent or a deeper relationship with the brand.

---

## 1. Sitemap

### Public Website

```
/                                         → Homepage
/about                                    → Company story & mission
/about/team                               → Licensed agents directory
/about/team/[agent-slug]                  → Individual agent profile
/about/partners                           → Partnership overview
/about/careers                            → Join the team (agents + staff)

/medicare                                 → Medicare hub (pillar page)
/medicare/advantage                       → Medicare Advantage plans
/medicare/supplement                      → Medicare Supplement (Medigap) plans
/medicare/part-d                          → Prescription drug plans
/medicare/savings-programs                → Medicare Savings Programs / Low Income Subsidy
/medicare/compare                         → Plan comparison landing page

/life-insurance                           → Life insurance hub (pillar page)
/life-insurance/term                      → Term life insurance
/life-insurance/whole                     → Whole life insurance
/life-insurance/final-expense             → Final expense insurance
/life-insurance/mortgage-protection       → Mortgage protection insurance
/life-insurance/no-exam                   → No medical exam life insurance

/benefits                                 → Government benefits hub
/benefits/aca-marketplace                 → ACA Marketplace / Obamacare
/benefits/medicaid                        → Medicaid eligibility guide
/benefits/snap                            → SNAP / Food assistance
/benefits/programs                        → All government programs directory

/knowledge                                → Knowledge Center hub
/knowledge/medicare/[slug]                → Medicare educational articles
/knowledge/life-insurance/[slug]          → Life insurance educational articles
/knowledge/benefits/[slug]                → Government benefits educational articles
/knowledge/tools                          → Downloadable resources, checklists, calculators
/knowledge/glossary                       → Insurance & Medicare glossary
/knowledge/faq                            → Master FAQ library
/knowledge/videos                         → Video Learning Center
/knowledge/events                         → Community events calendar

/partners                                 → Partnerships overview
/partners/medical-centers                 → For medical offices & health systems
/partners/senior-centers                  → For senior centers & community orgs
/partners/financial-advisors              → For financial advisors & planners
/partners/apply                           → Partner inquiry form

/agents                                   → Agent Success Center hub
/agents/join                              → Recruiting / become an agent
/agents/resources                         → Agent resource library (gated, Phase 2)
/agents/portal                            → Agent portal (authenticated, Phase 2)

/quote                                    → Quote hub / intake router
/quote/medicare                           → Medicare lead form
/quote/life-insurance                     → Life insurance lead form
/quote/benefits-check                     → Government benefits eligibility check

/contact                                  → Contact page
/thank-you                                → Post-form submission confirmation
/privacy                                  → Privacy policy
/terms                                    → Terms of service
/accessibility                            → Accessibility statement
/sitemap                                  → HTML sitemap for visitors
```

### Spanish Language Mirror

```
/es/                                      → Spanish homepage
/es/medicare                              → Spanish Medicare hub
/es/medicare/advantage
/es/medicare/supplement
/es/medicare/parte-d
/es/medicare/programas-de-ahorro
/es/seguro-de-vida                        → Spanish life insurance hub
/es/seguro-de-vida/temporal
/es/seguro-de-vida/vida-entera
/es/seguro-de-vida/gastos-finales
/es/beneficios                            → Spanish government benefits hub
/es/beneficios/mercado-aca
/es/beneficios/medicaid
/es/beneficios/snap
/es/conocimiento                          → Spanish Knowledge Center hub
/es/conocimiento/medicare/[slug]
/es/conocimiento/glosario
/es/socios                                → Spanish Partners
/es/agentes                               → Spanish Agent Center
/es/cotizar/medicare                      → Spanish Medicare quote form
/es/cotizar/seguro-de-vida                → Spanish life insurance quote form
/es/contacto
```

---

## 2. Main Navigation

### Desktop Navigation Bar (sticky, 72px, glass blur on scroll)

```
[Logo]   Services ▾   Knowledge Center   Partners   Agents   [ES | EN]   [☎ (800) XXX-XXXX]   [Get My Free Quote →]
```

- **Logo** — left-aligned, links to `/`
- **Services** — opens mega menu (see Section 3)
- **Knowledge Center** — direct link to `/knowledge` (no submenu — the mega menu IS the Knowledge Center for organic discovery)
- **Partners** — direct link to `/partners`
- **Agents** — direct link to `/agents`
- **Language switcher** — `EN | ES` toggle, preserves current page path where translated version exists
- **Phone number** — silver text, tap-to-call on mobile, always visible
- **Get My Free Quote** — emerald primary button, links to `/quote`

### Mobile Navigation (< 1024px)

```
[Logo]                             [☎]  [≡]
```

Full-height drawer from right:
- Services (expandable accordion)
- Knowledge Center
- Partners
- Agent Center
- Language toggle (EN | ES)
- [Get My Free Quote] — emerald, full-width, bottom of drawer
- Phone number below CTA

---

## 3. Mega Menu Structure

### Services Mega Menu (triggered by "Services" in nav)

Four-column layout, full-width panel, navy-900 background, glass border:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  MEDICARE                    LIFE INSURANCE       GOVERNMENT BENEFITS        │
│  ─────────                   ──────────────       ───────────────────        │
│  Medicare Advantage          Term Life            ACA Marketplace            │
│  Medicare Supplement         Whole Life           Medicaid                   │
│  Medicare Part D             Final Expense        SNAP Benefits              │
│  Medicare Savings Programs   Mortgage Protection  Government Programs        │
│  Compare Plans               No Exam Coverage                                │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  FEATURED RESOURCE                           SPEAK WITH AN AGENT             │
│  [Card: Turning 65 Guide →]                  "Questions? We're here."        │
│  [Card: AEP Checklist PDF →]                 (800) XXX-XXXX                  │
│                                              [Schedule a Call →]             │
└─────────────────────────────────────────────────────────────────────────────┘
```

- All service links route to their respective service pages
- Featured Resource cards pull from Knowledge Center (dynamically linked)
- "Speak with an Agent" block is persistent — always present in the mega menu
- Closes on outside click or Escape key
- Mobile: accordion sections, no mega panel

---

## 4. Footer Structure

Three-tier footer: utility bar → main content → legal bar.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  UTILITY BAR (navy-950 background)                                           │
│  [Logo]   Licensed in [States]   (800) XXX-XXXX   franklin.design26@...     │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                              │
│  MAIN FOOTER (navy-900 background)                                           │
│                                                                              │
│  Pure Life Insurance    Medicare            Life Insurance    Resources       │
│  ──────────────────     ────────            ──────────        ─────────      │
│  About Us               Medicare Advantage  Term Life         Knowledge Ctr  │
│  Our Agents             Medicare Supplement Final Expense     Medicare Guide │
│  Partners               Medicare Part D     Mortgage Prot.    Glossary       │
│  Careers                Compare Plans       No Exam           FAQ            │
│  Contact                                                      Videos         │
│                                                                              │
│  Government Benefits   Partners             Agents                           │
│  ─────────────────     ────────             ──────                           │
│  ACA Marketplace       Medical Centers      Join Our Team                   │
│  Medicaid              Senior Centers       Agent Resources                  │
│  SNAP                  Financial Advisors   Agent Portal                     │
│  All Programs          Apply                                                 │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  NEWSLETTER / STAY INFORMED                                                  │
│  "Get Medicare updates and enrollment reminders."                            │
│  [Email input] [Subscribe]                                                   │
│                                                                              │
│  CARRIER LOGOS (trust row — semi-opaque)                                     │
│  Humana | UnitedHealthcare | Aetna | BCBS | Cigna | Wellcare                │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────  │
│  LEGAL BAR (navy-950 background, small text)                                 │
│  © 2025 Pure Life Insurance Services LLC · Privacy · Terms · Accessibility  │
│  EN | ES   ·   CMS Disclaimer   ·   License Numbers                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5 & 6. Page List and Purpose

### Core Pages

| Page | URL | Purpose |
|---|---|---|
| Homepage | `/` | Brand introduction, trust establishment, multi-audience entry point, primary lead capture |
| Medicare Hub | `/medicare` | Pillar page for all Medicare content; SEO entry point; routes to plan-specific pages |
| Medicare Advantage | `/medicare/advantage` | Educate + convert Medicare Advantage leads |
| Medicare Supplement | `/medicare/supplement` | Educate + convert Medigap leads |
| Medicare Part D | `/medicare/part-d` | Educate + convert drug plan leads |
| Medicare Savings Programs | `/medicare/savings-programs` | High-trust content for low-income seniors; cross-sell into Advantage |
| Plan Comparison | `/medicare/compare` | Interactive comparison tool; high conversion intent |
| Life Insurance Hub | `/life-insurance` | Pillar page; routes to product-specific pages |
| Term Life | `/life-insurance/term` | Educate + convert term life leads |
| Whole Life | `/life-insurance/whole` | Educate + convert whole life leads |
| Final Expense | `/life-insurance/final-expense` | High-intent seniors and families; strong conversion page |
| Mortgage Protection | `/life-insurance/mortgage-protection` | Niche product; specific audience |
| No Exam Life | `/life-insurance/no-exam` | High-intent: people who fear being declined |
| Benefits Hub | `/benefits` | Pillar; routes to government benefit program pages |
| ACA Marketplace | `/benefits/aca-marketplace` | Pre-65 adults who need individual coverage |
| Medicaid | `/benefits/medicaid` | Low-income eligibility guide; builds trust with underserved segment |
| SNAP | `/benefits/snap` | High-traffic informational; trust builder for senior/low-income segment |
| All Programs | `/benefits/programs` | Directory of all benefit programs; SEO long-tail value |
| Knowledge Center Hub | `/knowledge` | Educational platform home; search + category navigation |
| Glossary | `/knowledge/glossary` | A–Z definitions; high SEO value, low bounce |
| FAQ Library | `/knowledge/faq` | Schema-optimized Q&A; featured snippet targeting |
| Video Learning Center | `/knowledge/videos` | YouTube-embedded video library; trust and engagement |
| Community Events | `/knowledge/events` | Local SEO + community trust |
| Tools & Downloads | `/knowledge/tools` | Lead magnets; PDF downloads gated by email |
| About | `/about` | Brand story, mission, trust signals |
| Agent Directory | `/about/team` | Licensed agent profiles; local SEO + trust |
| Agent Profile | `/about/team/[slug]` | Individual agent: photo, bio, license, specialties, book-a-call |
| Partners Overview | `/partners` | B2B partnership program overview |
| Medical Centers | `/partners/medical-centers` | Journey for medical office/health system referral partners |
| Senior Centers | `/partners/senior-centers` | Journey for senior centers and community orgs |
| Financial Advisors | `/partners/financial-advisors` | Journey for financial planners adding insurance to their practice |
| Partner Apply | `/partners/apply` | B2B inquiry form |
| Agent Hub | `/agents` | Overview of agent opportunity / recruiting |
| Join Our Team | `/agents/join` | Recruiting landing page with application form |
| Agent Resources | `/agents/resources` | Gated resource library for current agents (Phase 2) |
| Agent Portal | `/agents/portal` | Authenticated portal: leads, commissions, tools (Phase 2) |
| Quote Router | `/quote` | Intake selection: Medicare vs. Life vs. Benefits |
| Medicare Quote | `/quote/medicare` | Medicare lead capture form → AI caller pipeline |
| Life Insurance Quote | `/quote/life-insurance` | Life insurance lead capture form → AI caller pipeline |
| Benefits Check | `/quote/benefits-check` | Benefits eligibility screener → lead or info resource |
| Contact | `/contact` | General contact: phone, email, office, map |
| Thank You | `/thank-you` | Post-form confirmation; sets expectations for AI callback |
| Privacy Policy | `/privacy` | Legal requirement |
| Terms of Service | `/terms` | Legal requirement |
| Accessibility | `/accessibility` | WCAG commitment statement |

---

## 7 & 8. Primary and Secondary CTAs Per Page

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage | Get My Free Quote (emerald → /quote) | Call (800) XXX-XXXX |
| Medicare Hub | Compare Medicare Plans (→ /medicare/compare) | Download Medicare Guide (PDF) |
| Medicare Advantage | Get Medicare Advantage Quotes | Learn How It Works (→ /knowledge/medicare/advantage) |
| Medicare Supplement | Compare Supplement Plans | Medicare Advantage vs. Supplement (→ Knowledge Center) |
| Medicare Part D | Check My Drug Coverage | What Is Part D? (→ /knowledge/medicare/part-d) |
| Medicare Savings Programs | See If I Qualify | Talk to an Agent |
| Plan Comparison | Talk to an Agent | Download Comparison Worksheet |
| Life Insurance Hub | Get a Free Life Insurance Quote | Calculate My Coverage Need (tool) |
| Term Life | Get Term Life Quotes | Term vs. Whole: Which Is Right? (→ Knowledge Center) |
| Final Expense | Get Final Expense Quotes | Download Final Expense Guide |
| Mortgage Protection | Protect My Home | Talk to an Agent |
| Benefits Hub | Check My Eligibility | Download Benefits Checklist |
| ACA Marketplace | See My Plan Options | What Is the ACA? (→ Knowledge Center) |
| SNAP | See If I Qualify | Talk to a Benefits Specialist |
| Knowledge Center Hub | Ask the AI Assistant | Browse by Category |
| Knowledge Article | Talk to a Licensed Agent (emerald) | Download Related Resource |
| Glossary | Talk to an Agent | Back to Knowledge Center |
| FAQ | Talk to an Agent | Can't find your answer? Ask the AI |
| Tools & Downloads | [Download] (email gate) | Talk to an Agent |
| About | Meet Our Agents (→ /about/team) | Get a Free Quote |
| Agent Profile | Book a Free Consultation | Call [Agent Direct Number] |
| Partners Overview | Become a Partner (→ /partners/apply) | Talk to Partnerships Team |
| Medical Centers | Start a Referral Partnership | Download Partner Overview |
| Senior Centers | Host a Medicare Event | Talk to Our Team |
| Financial Advisors | Add Insurance to Your Practice | Download Advisor Partnership Guide |
| Partner Apply | Submit Application | Talk to Our Team |
| Agent Hub | See Agent Opportunity | Talk to Our Recruiting Team |
| Join Our Team | Apply Now | Download Agent Overview |
| Quote (all) | Submit (→ Thank You + AI caller) | Call (800) XXX-XXXX |
| Thank You | Add to Calendar (appointment) | Explore Knowledge Center |
| Contact | Send Message | (800) XXX-XXXX |

---

## 9. Internal Linking Strategy

### Principle: Every page feeds the funnel and the SEO graph simultaneously.

**Service Pages → Knowledge Center:**
Every service page links to 3–5 related Knowledge Center articles in a "Learn More" section. Example:
- `/medicare/advantage` → links to `/knowledge/medicare/medicare-advantage-explained`, `/knowledge/medicare/advantage-vs-supplement`, `/knowledge/medicare/annual-enrollment-period`

**Knowledge Center → Service Pages:**
Every article ends with a contextual CTA block that links to the most relevant service page. The AI assistant also surfaces the service page during handoff.

**Knowledge Center → Knowledge Center:**
Each article contains 3–4 inline links to related articles (same category and cross-category). The glossary links every term to the article that covers it in depth.

**Homepage → All Pillars:**
Homepage links to all three service hubs (`/medicare`, `/life-insurance`, `/benefits`), the Knowledge Center, and the Partner/Agent journeys via dedicated sections.

**Agent Profiles → Services + Booking:**
Agent profile pages link to their specialty service pages, creating local SEO signals. Each profile has a "Book a consultation" CTA and a direct phone number.

**Partners → Knowledge Center:**
Partner pages link to educational content relevant to each partner type (medical centers → "How to Talk to Patients About Medicare").

**Breadcrumbs:** All pages below the top level display breadcrumbs (BreadcrumbList schema). Breadcrumbs are keyword-rich clickable links, not decorative.

**Cross-language linking:** Every English page has `hreflang` pointing to its Spanish equivalent, and vice versa. Language switcher preserves the current page path.

---

## 10. SEO URL Structure

### Principles
- Lowercase, hyphen-separated, no underscores
- No trailing slashes except root `/`
- No dates in URLs (all content is evergreen-first)
- Category prefix matches navigation hierarchy
- Spanish URLs use translated keywords, not `/en/` and `/es/[english-slug]`

### URL Pattern Examples

```
✅ /medicare/advantage
✅ /knowledge/medicare/turning-65-medicare-guide
✅ /knowledge/glossary
✅ /es/medicare/advantage
✅ /es/conocimiento/medicare/guia-medicare-65-anos
✅ /about/team/jane-smith
✅ /partners/medical-centers

❌ /Medicare-Advantage (no caps)
❌ /medicare_advantage (no underscores)
❌ /blog/2025/01/15/medicare-tips (no dates)
❌ /page?id=42 (no query string URLs for content)
❌ /en/medicare/advantage (English is default, no prefix)
```

### Canonical Strategy
- English pages are canonical by default (no `/en/` prefix)
- Spanish pages: `<link rel="canonical" href="/es/[slug]">` on Spanish pages
- `hreflang` tags on every page pair
- `/quote/*` pages: `noindex` (lead forms; no SEO value, prevent duplicate content)
- `/thank-you`: `noindex`
- `/agents/portal`, `/agents/resources`: `noindex` when gated

---

## 11. English / Spanish Architecture

### Philosophy
Spanish-speaking seniors are a massively underserved Medicare audience. Most national carriers and agencies provide poor Spanish digital experiences — a Spanish-first Knowledge Center and lead journey is a direct competitive advantage.

### Language Detection & Switching
- Default language: English
- Browser language detection: if `navigator.language` starts with `es`, offer the Spanish version with a banner (not auto-redirect — let the user choose)
- Manual toggle: `EN | ES` in nav and footer, preserved via cookie
- Language switcher routes to the translated equivalent page when it exists; falls back to `/es/` homepage when no translation exists yet

### Content Translation Priority (Phase 1)
Translate in order of conversion value:

1. Homepage (`/es/`)
2. Medicare Hub (`/es/medicare`)
3. Medicare Advantage (`/es/medicare/advantage`)
4. Medicare Supplement (`/es/medicare/supplement`)
5. Quote / Lead forms (`/es/cotizar/medicare`)
6. Thank You page (`/es/gracias`)
7. Contact (`/es/contacto`)
8. 5 top Knowledge Center articles (Medicare Basics, Turning 65, AEP, Final Expense, SNAP)
9. Glossary (`/es/conocimiento/glosario`)

### Phase 2 Spanish Expansion
- Full service pages
- Agent profiles (Spanish-speaking agent profiles flagged and filterable)
- Government Benefits hub (SNAP, Medicaid — extremely high value in Spanish)
- ACA Marketplace

### Technical Implementation
- Next.js App Router with `[locale]` segment: `app/[locale]/page.tsx`
- `next-intl` for string translations
- Locale-specific metadata (title, description, OG tags)
- `hreflang` auto-generated from route map
- Spanish slugs are translated (not English slugs with `/es/` prefix)

---

## 12. Knowledge Center Relationship to Services Pages

The Knowledge Center and the services pages form a closed educational loop. Neither works as well without the other.

```
Services Page                          Knowledge Center
─────────────                          ────────────────
/medicare/advantage          ◄────►    /knowledge/medicare/advantage-explained
                             ◄────►    /knowledge/medicare/advantage-vs-supplement
                             ◄────►    /knowledge/medicare/annual-enrollment-period

/life-insurance/final-expense ◄────►   /knowledge/life-insurance/final-expense-explained
                              ◄────►   /knowledge/life-insurance/burial-insurance-guide

/benefits/snap                ◄────►   /knowledge/benefits/snap-eligibility
                              ◄────►   /knowledge/benefits/snap-how-to-apply
```

**The rule:** Every service page is the conversion destination. Every Knowledge Center article is the trust-building on-ramp. Visitors arrive at articles via organic search; they leave via the service page CTA or the AI assistant handoff.

**Content depth:**
- Service pages: ~600–900 words, conversion-focused, plan types, how to enroll, primary CTA
- Knowledge Center articles: 1,500–3,000+ words, comprehensive, educational, no hard sell — soft CTA

**Schema connection:**
Service pages include `Service` and `Organization` schema. Knowledge Center articles include `Article`, `FAQPage`, and `BreadcrumbList` schema. Internally they cross-reference, strengthening topical authority signals to Google.

---

## 13. Medical Centers / Partnerships Journey

Medical offices, health systems, senior centers, and financial advisors are high-quality referral channels. A patient leaving a doctor's appointment and being handed a Pure Life resource converts at a significantly higher rate than a cold ad click.

### Journey Flow

```
Awareness
  └─► Partner sees our brand (conference, referral, outreach, ad)
       └─► Visits /partners

Discovery
  └─► Reads partnership overview
       └─► Selects their partner type (Medical / Senior Center / Financial Advisor)
            └─► Lands on relevant partner page with specific value proposition

Consideration
  └─► Downloads partnership overview PDF (email capture)
  └─► Watches 90-second partner explainer video
  └─► Reads FAQ for partners

Conversion
  └─► Completes /partners/apply form
       └─► n8n webhook → CRM → assigned to partnerships team
            └─► Partnerships team schedules onboarding call

Active Partnership
  └─► Partner receives co-branded materials (Canva templates)
  └─► Partner refers clients via dedicated referral link (UTM tracked)
  └─► Partner portal (Phase 2) — track referrals, access resources
```

### Partner Pages: Value Propositions

**/partners/medical-centers**
- Value: "Help your Medicare-eligible patients find the right coverage — at no cost to them or your practice"
- Offering: Free Medicare education events for patients, co-branded materials, dedicated liaison agent
- Lead: Partner application form + download "Medicare Referral Program Overview" PDF

**/partners/senior-centers**
- Value: "Bring a free Medicare education event to your community"
- Offering: In-person seminars, educational materials, community event calendar listing on our site
- Lead: Event booking form

**/partners/financial-advisors**
- Value: "Add insurance expertise to your practice without adding overhead"
- Offering: Referral fee program, co-branded client communications, agent support
- Lead: Advisor application form + "Add Insurance to Your Practice" PDF guide

---

## 14. Agent Success Center Journey

The Agent Success Center serves two audiences: prospective agents (recruiting) and current agents (retention/tools). Phase 1 is public-facing recruiting. Phase 2 adds the authenticated portal.

### Prospective Agent Journey

```
Awareness
  └─► Agent sees job posting, LinkedIn ad, recruiter outreach
       └─► Lands on /agents

Discovery
  └─► Reads opportunity overview (compensation, training, tech stack, culture)
  └─► Sees testimonials from current agents
  └─► Views income potential / commission structure overview

Consideration
  └─► Downloads "Agent Opportunity Overview" PDF
  └─► Reads FAQ for agents
  └─► Watches "Day in the Life of a Pure Life Agent" video

Conversion
  └─► Clicks "Apply Now" → /agents/join
       └─► Application form: name, license status, states, experience, contact
            └─► CRM → recruiting pipeline → recruiting call scheduled
```

### Current Agent Journey (Phase 2 — Authenticated)

```
/agents/resources (gated by email + password)
  ├─► Training library (Medicare product training, compliance)
  ├─► Carrier quick-reference guides
  ├─► Co-branded marketing materials (Canva templates)
  ├─► Scripts and objection handling
  └─► Lead management (Phase 2 portal)

/agents/portal (fully authenticated)
  ├─► Lead dashboard (assigned leads, status, follow-up queue)
  ├─► Commission tracker
  ├─► Calendar (booking page, appointments)
  ├─► Knowledge Center admin (contribute articles)
  └─► Performance metrics
```

### Agent Profile Pages (`/about/team/[agent-slug]`)
Each agent has a public profile serving both trust (client-facing) and local SEO:
- Professional photo
- Name, title, years of experience
- License numbers and states licensed
- Specialties (Medicare Advantage, Final Expense, etc.)
- Languages spoken (English, Spanish, etc.)
- Personalized bio
- Google Reviews (agent-specific)
- Booking CTA: "Schedule a free consultation with [Name]"
- Direct phone number

---

## 15. Medicare Lead Generation Journey

End-to-end flow from first touchpoint to enrolled client.

```
ACQUISITION
  Google Ads (PMax) / Meta Ads / Organic SEO / Partner Referral
        │
        ▼
LANDING
  Homepage → /medicare → /medicare/advantage (or specific service page)
  OR
  Direct to /quote/medicare (high-intent ad traffic)
        │
        ▼
EDUCATION (organic traffic)
  Knowledge Center article → builds trust → inline CTA → /quote/medicare
        │
        ▼
LEAD CAPTURE (/quote/medicare)
  Form fields: First name · Last name · Phone · ZIP code
  GCLID + UTM params captured as hidden fields
  Form submission → Supabase (leads table)
        │
        ▼
IMMEDIATE AUTOMATION (n8n webhook, < 5 seconds)
  1. SMS confirmation sent via Twilio: "Hi [Name], it's Pure Life Insurance.
     We're calling you right now to go over your options."
  2. AI caller (OpenAI Realtime + Twilio Voice) calls lead
  3. AI asks 2 qualifying questions:
       • "Are you currently on Medicare or will you be turning 65 soon?"
       • "Are you looking to add coverage or compare your current plan?"
        │
        ▼
QUALIFICATION ROUTING
  Qualified → AI transfers to live agent (warm transfer with context)
  Not qualified → AI schedules callback / sends SMS follow-up
  No answer → n8n triggers 3-attempt retry sequence (5m, 1h, 24h)
        │
        ▼
AGENT CONSULTATION
  Agent receives warm lead with: name, phone, ZIP, qualifying answers, GCLID
  Agent runs quote comparison across carriers
  Agent recommends plan
        │
        ▼
ENROLLMENT
  Agent submits application
  Client receives confirmation + welcome email
        │
        ▼
RETENTION
  Annual review reminder (before AEP: September each year)
  Client referral program invitation
  Newsletter / Medicare update emails
```

---

## 16. Life Insurance Lead Generation Journey

```
ACQUISITION
  Google Ads / Meta Ads / Organic / Partner Referral
        │
        ▼
LANDING
  /life-insurance or product-specific page (/life-insurance/final-expense)
  OR direct to /quote/life-insurance
        │
        ▼
PRE-QUALIFICATION (on the quote page)
  Step 1: Coverage type selection (Term / Whole / Final Expense / Mortgage Protection)
  Step 2: Quick eligibility fields — Age, Gender, Coverage amount desired
  Step 3: Instant estimated rate range displayed (trust builder)
  Step 4: Full lead form — Name, Phone, Email, ZIP
        │
        ▼
AUTOMATION
  Same n8n → Twilio → AI caller pipeline as Medicare
  AI qualifier: "Are you looking for coverage for yourself or a family member?"
               "Do you have any existing life insurance coverage?"
        │
        ▼
AGENT CONSULTATION → ENROLLMENT → RETENTION
  (same pattern as Medicare journey)
```

---

## 17. Future AI Assistant Integration Points

As the platform matures, the AI assistant expands from the Knowledge Center into the full site.

| Phase | Location | Capability |
|---|---|---|
| **Phase 1 (Launch)** | All `/knowledge/*` pages | Educational Q&A, handoff to agent |
| **Phase 2** | Homepage floating widget | Initial triage: Medicare, Life Insurance, Benefits, or Agent |
| **Phase 2** | `/quote/*` pages | Conversational quote intake (replaces static form) |
| **Phase 2** | `/benefits/*` pages | Benefits eligibility screener via conversation |
| **Phase 3** | Agent portal (`/agents/portal`) | Agent assist — real-time plan comparison support during client calls |
| **Phase 3** | Post-enrollment client portal | "Help me understand my plan" — policy Q&A for enrolled clients |
| **Phase 3** | Partner portal | "Which clients in my panel might benefit from a Medicare review?" |
| **Phase 4** | Full-site persistent widget | Replaces the contact page as primary communication layer |

**AI Personalization (Phase 3+):**
When a visitor is a returning user or has submitted a lead form, the AI can be personalized:
- "Welcome back, Maria. Are you still looking to compare Medicare Advantage plans?"
- Conversation history surfaced for context
- Agent-specific assistant (each agent's profile page has an assistant that knows their specialties)

---

## 18. Future CRM / Portal Integration Points

### Phase 1 — Supabase (Launch)
- All lead data in Supabase PostgreSQL
- n8n handles routing and automation
- Manual agent follow-up

### Phase 2 — CRM Integration
**Target:** GoHighLevel (insurance industry standard) or HubSpot

| Integration Point | What Syncs |
|---|---|
| Lead form submission | Contact record created with name, phone, ZIP, UTM/GCLID |
| AI caller outcome | Call recording, transcript, qualification result added to contact |
| AI Knowledge Assistant handoff | Conversation summary added as CRM note |
| Agent consultation | Pipeline stage updated, notes added |
| Enrollment | Opportunity closed-won, policy details attached |
| Annual review reminder | Automated task created in CRM each August |

### Phase 2 — Client Portal (`/portal` — authenticated)
- Policy summary view
- Enrollment documents
- Annual review scheduling
- "My Agent" contact card
- Benefits eligibility re-check tool
- ID card download

### Phase 2 — Agent Portal (`/agents/portal` — authenticated)
- Lead queue + follow-up dashboard
- Commission tracking
- Client roster and policy anniversaries
- Carrier quick-reference library
- Co-branded marketing assets

### Phase 3 — Partner Portal (`/partners/portal` — authenticated)
- Referral tracking dashboard
- Co-branded materials
- Event scheduling
- Performance reports

---

## Summary: Audience × Journey Matrix

| Audience | Entry Points | Primary Journey | Conversion Goal |
|---|---|---|---|
| Turning 65 / Medicare Newcomer | Google Ads, Organic, Homepage | Homepage → Medicare Hub → Quote → AI Call → Agent | Medicare enrollment |
| AEP Shopper | Google Ads, Retargeting | Medicare Hub → Compare → Quote → Agent | Plan switch |
| Adult Child / Caregiver | Meta Ads, Organic Blog | Knowledge Center → Tools → Nurture → Agent call | Parent enrollment |
| Life Insurance Seeker | Google Ads, Meta Ads, Organic | Life Insurance Hub → Quote → AI Call → Agent | Policy application |
| Government Benefits Seeker | Organic, SNAP/Medicaid articles | Benefits Hub → Tools → Agent or form | Benefits enrollment or cross-sell |
| Spanish Speaker | Spanish Google/Meta Ads, Organic `/es/` | `/es/` → Spanish service page → Spanish quote form | Any of above |
| Medical / Clinic Partner | Outreach, LinkedIn, conferences | /partners → /partners/medical-centers → Apply | Referral partnership agreement |
| Prospective Agent | Job boards, LinkedIn, referral | /agents → /agents/join → Application | Agent recruited and onboarded |

---

> **APPROVAL CHECKPOINT**
>
> This document defines the complete architecture for purelifeis.com. No page code, components, or routes will be created until this architecture is approved.
>
> Please review and confirm, request changes, or flag any missing journeys before build begins.
