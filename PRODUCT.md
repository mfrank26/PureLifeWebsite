# Pure Life Insurance Services LLC — Product Document

## Company Overview

**Pure Life Insurance Services LLC** is an independent insurance agency specializing in Medicare and life insurance products. Operating as a technology-forward agency, Pure Life combines licensed human expertise with AI-driven automation to deliver faster, smarter, and more personalized insurance guidance than traditional agencies.

**Domain:** purelifeis.com  
**Entity:** Pure Life Insurance Services LLC  
**Model:** Independent agency (multi-carrier)  
**Technology stack:** Next.js, Supabase, n8n, Twilio, OpenAI, Claude

The brand positions itself at the intersection of premium financial services and modern technology — accessible enough for seniors, sophisticated enough to compete for high-intent online leads against national carriers.

---

## Business Goals

### Primary
1. Generate qualified Medicare and life insurance leads at a cost lower than carrier direct
2. Convert inbound leads to policy sales with AI-assisted speed (call within 30 seconds of form submit)
3. Build a recognizable premium brand in the Medicare/insurance space that earns organic trust

### Secondary
4. Create a self-serve quote and education experience that pre-qualifies leads before human agent contact
5. Establish SEO authority for Medicare plan terms in target geographic markets
6. Reduce cost-per-acquisition through AI automation (less human time per unqualified lead)

### Long-term
7. Scale to multiple licensed agents under one brand
8. Launch a client portal for policy management, renewal reminders, and annual review scheduling
9. Expand into ancillary products: dental/vision/hearing, hospital indemnity, annuities

---

## Target Audiences

### Segment 1 — Medicare Newcomers (Primary)
**Who:** Adults approaching 65, retiring, or losing employer coverage  
**Motivation:** Confused and overwhelmed — want a trusted guide, not a sales pitch  
**Fear:** Making the wrong choice and being stuck for a year  
**Decision trigger:** Turning 65, employer retirement, spouse retirement  
**Channels:** Google Ads (high intent), Meta Ads (awareness), referral  
**Message:** "We make Medicare simple. One conversation, all your options."

### Segment 2 — Annual Enrollment Shoppers (High Volume)
**Who:** Existing Medicare beneficiaries reviewing coverage Oct 15 – Dec 7  
**Motivation:** Lower premiums, better drug coverage, added benefits (dental, fitness)  
**Fear:** Switching to something worse  
**Decision trigger:** Plan change notice, premium increase, new benefits advertised  
**Channels:** Google PMax, Meta retargeting, email  
**Message:** "Your plan changed. See if you can do better."

### Segment 3 — Adult Children / Caregivers
**Who:** Adults 45–60 helping a parent navigate Medicare  
**Motivation:** Get their parent covered correctly without hours of research  
**Fear:** Missing a deadline, picking the wrong plan for their parent's doctors  
**Decision trigger:** Parent turning 65, parent losing coverage, parent's confusion  
**Channels:** Meta Ads, organic search  
**Message:** "Help your parent get the coverage they deserve."

### Segment 4 — Life Insurance Seekers
**Who:** Adults 40–70 looking for term, whole, or final expense coverage  
**Motivation:** Family protection, leaving something behind, covering funeral costs  
**Fear:** Being denied, premiums they can't afford  
**Decision trigger:** New family member, aging parents, health scare  
**Channels:** Google Ads, Meta Ads, SEO  
**Message:** "Straightforward life insurance. No jargon. No waiting."

---

## Services

### Medicare
- **Medicare Advantage (Part C)** — Network-based plans replacing Original Medicare
- **Medicare Supplement (Medigap)** — Plans that cover gaps in Original Medicare (Plans G, N most common)
- **Medicare Part D** — Standalone prescription drug plans
- **Medicare Savings Programs** — Low-income subsidy guidance

**Carrier partners (multi-carrier):** Humana, UnitedHealthcare, Aetna, Blue Cross Blue Shield, Cigna, Wellcare, Molina, and others by state

### Life Insurance
- **Term Life** — 10, 15, 20, 30-year terms
- **Whole Life** — Permanent coverage with cash value
- **Final Expense** — Simplified issue, designed for seniors, covers funeral/burial costs
- **Guaranteed Issue** — No health questions, for those declined elsewhere

### Ancillary (Future)
- Dental, Vision, Hearing plans
- Hospital Indemnity
- Cancer / Critical Illness
- Annuities (fixed, indexed)

---

## User Journeys

### Journey 1 — "Turning 65 First-Timer"
1. Sees Google Ad for "Medicare plans [city]" — clicks to landing page
2. Reads brief "How Medicare Works" explainer — trusts the brand
3. Fills out short 3-field lead form (name, phone, zip)
4. Receives SMS confirmation within 30 seconds: "Hi, it's Pure Life Insurance — we're giving you a call right now."
5. AI caller (OpenAI Realtime) calls immediately, asks 2 qualifying questions
6. Qualified → transferred to live licensed agent
7. Agent runs quote comparison, recommends plan, assists with enrollment
8. Client receives confirmation email + welcome packet

### Journey 2 — "AEP Comparison Shopper"
1. Sees retargeting ad or organic result for "Compare Medicare plans 2025"
2. Lands on Medicare comparison page with educational content
3. Uses quote widget (form) to get personalized plan recommendations
4. Calls CTA or requests callback
5. Agent compares current plan vs. top 3 alternatives
6. Client switches plan → agent submits enrollment

### Journey 3 — "Adult Child Researcher"
1. Searches "best Medicare plan for my mom" — finds blog post or landing page
2. Reads educational content, builds trust
3. Downloads guide PDF (lead capture via email)
4. Receives nurture email sequence with Medicare 101 content
5. Schedules call for self + parent via booking widget
6. Agent handles family consult, enrolls parent

### Journey 4 — "Life Insurance Inquiry"
1. Sees Meta Ad or organic result
2. Lands on life insurance page
3. Quick quote form: age, gender, coverage amount
4. Instantly sees estimated rate range (pre-qualification)
5. Submits full form → AI call or agent callback
6. Agent completes application

---

## Lead Generation Strategy

### Paid Acquisition
- **Google Ads:** PMax campaigns targeting Medicare + life insurance keywords; GCLID capture on all forms for attribution
- **Meta Ads:** Lookalike audiences built from enrolled clients; lead gen forms + website conversion events via Pixel + Conversions API
- **TikTok Ads:** Awareness for adult children (45–55); educational content format

### Organic / SEO
- Local SEO: "Medicare plans [city/state]" pages for each target market
- Educational blog: Medicare 101, plan comparison guides, enrollment deadline content
- FAQ schema markup on all service pages
- Google Business Profile optimization
- Backlink strategy via insurance and senior-focused publications

### Referral
- Agent referral network (doctors, financial advisors, senior centers)
- Client referral program (post-enrollment "refer a friend")

### Automation
- AI phone agent (Twilio + OpenAI Realtime) calls all inbound leads within 30 seconds
- SMS follow-up sequences via n8n for non-answers
- Email nurture sequences for long-cycle leads (life insurance, early Medicare researchers)

---

## AI Automation Plans

### Current (Live in Test Mode)
- **Medicare AI Caller** — OpenAI Realtime API + Twilio Voice. Calls lead within 30 seconds of form submission. Asks 2 qualifying questions. Transfers qualified leads to agent.

### Near-Term
- **Website chat agent** — Claude-powered chatbot for real-time visitor qualification and FAQ handling
- **Quote assistant** — Conversational AI that collects info for a quote without a form
- **SMS nurture agent** — Automated follow-up for leads who did not answer the AI call

### Long-Term
- **Annual review bot** — Reminds existing clients before AEP, initiates review call
- **Claim helper** — Guides clients through filing a claim with their carrier
- **Document AI** — Reads uploaded plan documents and compares them to alternatives
- **Agent assist** — Real-time AI support for licensed agents on complex plan comparisons

---

## CRM Integration Plans

### Phase 1 — Supabase (Current)
- All lead data stored in PostgreSQL via Supabase
- n8n workflows manage routing and status updates
- Manual agent follow-up via phone/email

### Phase 2 — CRM Integration (Near-Term)
- Target: **GoHighLevel** (insurance-industry standard) or **HubSpot**
- Bidirectional sync: form submissions → CRM lead record
- GCLID and UTM data attached to every lead for Google Ads attribution
- Pipeline stages: New Lead → Contacted → Qualified → Quoted → Enrolled → Retained

### Phase 3 — Advanced Attribution
- Full-funnel attribution: Google Ads click → form → AI call → enrollment
- Revenue reporting per campaign, per keyword
- LTV tracking per client

---

## Trust Strategy

Seniors and their families make high-stakes decisions with deep personal impact. Trust is the product.

### Signals
- **Licensed agent profiles** — Photos, names, license numbers, states licensed
- **Carrier logos** — Display partner carriers (Humana, UHC, Aetna, BCBS) to signal legitimacy
- **Review integration** — Google Reviews and/or Trustpilot widget
- **BBB accreditation badge** (if applicable)
- **CMS disclaimer compliance** — All Medicare content includes required CMS language
- **Security badge** — SSL lock, "Your info is secure" micro-copy on all forms
- **No-pressure language** — "We compare plans. You decide. No obligation."
- **Phone number prominent** — Real phone number in header; seniors trust callable businesses

### Content Trust Signals
- Educational content published first, sales second
- Plan comparison tools that show ALL options (not just high-commission plans)
- Transparent about being an independent agency
- "Why work with an independent agent vs. going direct" explainer

---

## SEO Strategy

### Architecture
- Homepage: Brand + primary CTA
- `/medicare` — Medicare hub page (pillar)
- `/medicare/advantage` — Medicare Advantage deep-dive
- `/medicare/supplement` — Medigap plans
- `/medicare/part-d` — Prescription drug plans
- `/life-insurance` — Life insurance hub
- `/life-insurance/term` — Term life
- `/life-insurance/final-expense` — Final expense
- `/blog` — Educational content
- `/agents` — Licensed agent profiles (local SEO value)
- `/[state]` — State-specific Medicare landing pages (future)

### On-Page SEO
- Structured data: Organization, FAQPage, LocalBusiness schema
- Open Graph and Twitter Card metadata on all pages
- Canonical URLs
- Sitemap auto-generated via Next.js
- robots.txt configured to allow all, block /api routes

### Content Strategy
- Publish 2–4 educational blog posts/month
- Target long-tail: "Does Medicare cover [X]", "What is the difference between [X] and [Y]"
- AEP content surge: September through December each year
- Annual "Best Medicare Advantage Plans in [State] [Year]" posts

---

## AI Knowledge Assistant

The AI Knowledge Assistant is a Claude-powered chat agent embedded throughout the Knowledge Center. It answers visitor questions about Medicare, life insurance, ACA, Medicaid, and government benefits using only approved Pure Life educational content. It does not give personalized plan recommendations — that is the licensed agent's role. Its job is to educate, build confidence, and connect the right visitors to the right next step.

This is not a generic chatbot. It is a subject matter expert that happens to be available 24/7.

---

### Strategic Purpose

1. **Convert passive readers into active conversations.** A visitor reading about Medicare Supplement plans has a question that the article doesn't answer. Instead of leaving, they ask the assistant. The conversation replaces the bounce.
2. **Qualify and warm leads before agent handoff.** The assistant understands the visitor's situation — age, coverage type, current plan, concern — before transferring. The agent receives a warm, contextualized lead, not a cold form submission.
3. **24/7 availability.** Most Medicare decisions happen in the evening and on weekends. Agents are not available then. The assistant is always on.
4. **Scale education without scaling headcount.** Answering "What is the difference between Medicare Advantage and Medicare Supplement?" a thousand times per day is not a job for a licensed agent. It is a job for AI.
5. **Conversation data as a product.** Every conversation is a window into what visitors don't understand, what fears they have, and what plan types they're considering. This data informs content strategy, product decisions, and sales training.

---

### Scope and Knowledge Boundaries

The assistant is grounded exclusively in Pure Life's approved content library. It cannot speculate, cannot recommend specific plans, and cannot impersonate a licensed agent.

**The assistant CAN:**
- Explain how Medicare Parts A, B, C, and D work
- Describe plan types (Advantage, Supplement, Part D) in general terms
- Explain enrollment windows, deadlines, and penalties
- Define insurance terms from the Knowledge Center Glossary
- Describe ACA Marketplace eligibility and subsidy basics
- Explain Medicaid eligibility criteria in general terms
- List government benefits programs and explain how to apply
- Explain what final expense and life insurance products cover in general
- Answer FAQ content from the Knowledge Center
- Tell visitors what questions to ask a licensed agent
- Initiate handoff to a licensed agent at any point

**The assistant CANNOT:**
- Recommend a specific plan or carrier
- Quote premiums or give pricing as advice
- Compare specific plan costs for a specific person
- Advise on medical or health decisions
- Imply it is a licensed insurance agent
- Access live carrier plan data or formularies
- Process enrollments or applications

Every session begins with a clear, friendly disclosure:  
*"I'm Pure Life's educational assistant. I can help you understand your Medicare and insurance options. For personalized plan recommendations, I'll connect you with one of our licensed agents."*

---

### Handoff Triggers

The assistant actively monitors the conversation for signals that a licensed agent should be involved. When a trigger is detected, it offers a warm transition — never an abrupt redirect.

| Trigger Signal | Handoff Message |
|---|---|
| "Which plan should I choose?" | "That's exactly what our licensed agents help with. They'll compare your options side by side at no cost. Want me to connect you now?" |
| "How much will it cost me?" | "Pricing depends on your zip code, age, and current coverage. An agent can give you exact numbers in minutes." |
| "I'm ready to enroll" | "Great — I'll connect you with a licensed agent who can walk you through enrollment right now." |
| Expresses frustration or confusion | "Let me get a licensed agent on the line who can help you directly." |
| Age + coverage type both known | Proactively offer: "Based on what you've shared, an agent can show you plans available in your area." |
| After 3 exchanges without resolution | "I want to make sure you get the right answer. Can I connect you with one of our licensed agents?" |
| User asks to speak to a person | Immediate: name, phone number, and/or form |

**Handoff options presented:**
1. **Chat transfer** — Live agent joins the conversation (when agents are available)
2. **Phone call** — "Click to call" or "Request a callback in 30 seconds"
3. **Lead form** — Name, phone, zip — triggers the AI caller flow (Twilio + OpenAI Realtime)

---

### Technical Architecture

**Model:** Claude (`claude-sonnet-4-6` for production; upgrade path to Opus for complex queries)

**Retrieval (RAG):**
- Knowledge Center articles chunked and embedded at publish time
- Vector store: pgvector in Supabase (existing infrastructure)
- At query time: embed the user message → retrieve top-k relevant chunks → inject as context
- Source citation: every answer includes "Source: [Article Name]" with a link, so visitors can read further

**System Prompt Principles:**
- Identity: "You are the Pure Life Insurance educational assistant."
- Scope: "Answer only from the provided context. If the answer is not in the context, say so and offer to connect the user with a licensed agent."
- Tone: Warm, clear, never condescending. Write for someone who may be 65+ and new to Medicare.
- Compliance: "Never recommend specific plans, quote prices, or imply you are a licensed agent."
- Handoff: "When the user needs personalized advice, offer a licensed agent connection."

**Session & Conversation Logging:**
Every conversation is stored in Supabase with the following schema:

```
conversation_sessions
  id (uuid)
  session_id (uuid)
  visitor_id (uuid, anonymous or authenticated)
  started_at (timestamp)
  ended_at (timestamp)
  page_url (text) — where the conversation started
  handoff_triggered (boolean)
  handoff_type (enum: chat, phone, form, none)
  lead_captured (boolean)
  lead_id (uuid, FK to leads table)
  topic_tags (text[]) — auto-tagged: medicare, life_insurance, aca, medicaid, benefits

conversation_messages
  id (uuid)
  session_id (uuid, FK)
  role (enum: user, assistant)
  content (text)
  created_at (timestamp)
  sources_cited (text[]) — Knowledge Center article slugs used
  handoff_offered (boolean)
```

**CRM Integration (Phase 2):**
- When a handoff form is submitted, the conversation summary is attached to the CRM lead record
- Agent sees: visitor's questions, topics discussed, confusion points, before the first call
- GoHighLevel or HubSpot note auto-populated with conversation context

**n8n Integration:**
- Handoff form submission → n8n webhook → SMS confirmation + AI caller flow (existing pipeline)
- Conversation summary → CRM lead note
- High-intent conversations flagged for immediate agent notification (Slack or SMS to agent)

---

### UI Placement and Behavior

**Placement:**
- Floating chat button: bottom-right corner on all `/knowledge/*` pages
- Inline contextual prompt: mid-article "Have a question about [article topic]?" prompt box
- Knowledge Center homepage: featured assistant card above the fold
- FAQ pages: assistant offered as alternative to browsing ("Ask a question instead")

**Widget Design (from DESIGN.md tokens):**
- Closed state: Emerald FAB (floating action button), 56px, subtle pulse animation on first visit
- Open state: 380px × 560px panel, navy-900 background, glass border
- Header: Pure Life logo mark + "Knowledge Assistant" + online indicator (green dot)
- Messages: User bubbles right-aligned (navy-700), assistant bubbles left-aligned (navy-800)
- Sources: Inline citation chips below assistant messages, silver styling, link to article
- Handoff CTA: Emerald button, full-width, appears when handoff is triggered
- Mobile: Full-screen overlay on screens < 768px

**Disclosure banner** (always visible in chat header):
*"Educational assistant · Not a licensed agent · For plan advice, talk to our team"*

---

### Compliance and Guardrails

Insurance is a regulated industry. The AI assistant must never cross the line from education into advice.

- **No plan recommendations.** The assistant describes plan types, not specific plans.
- **No pricing.** Premiums vary by location, age, and health. The assistant explains this and routes to an agent.
- **Clear identity disclosure.** The assistant identifies itself as an AI in every opening message.
- **CMS compliance language.** Where Medicare content is discussed, appropriate disclaimers are included (e.g., "Plans vary by location. Not all plans are available in all areas.").
- **Audit trail.** All conversations are logged. Compliance review can audit any interaction.
- **Escalation always available.** The user can reach a human at any point — the handoff offer is never buried.

---

### Success Metrics

| Metric | Target |
|---|---|
| Conversation start rate (visitors who open chat) | ≥ 8% of Knowledge Center visitors |
| Handoff rate (conversations that offer agent transfer) | ≥ 25% |
| Lead capture rate (handoffs that submit form or request call) | ≥ 30% of handoffs |
| Answer quality (thumbs up / no negative feedback) | ≥ 85% |
| Avg. messages per session | 4–8 (engaged, not abandoned) |
| Conversations logged to CRM (Phase 2) | 100% |

---

## Knowledge Center

The Knowledge Center is not a blog. It is a permanent, evergreen educational platform — the most comprehensive free resource for Medicare, life insurance, and government benefits in our target markets. It is a core pillar of the website, equal in strategic importance to the services pages.

### Strategic Purpose

1. **SEO Authority** — Build topical authority across every Medicare, life insurance, and benefits keyword cluster. Google rewards depth and comprehensiveness. A well-structured Knowledge Center with hundreds of interlinked articles becomes near-impossible to outrank.
2. **Trust at the Top of the Funnel** — Visitors who don't know us yet need to trust us before they'll call. Providing genuinely useful education — for free, with no pressure — is the fastest way to earn that trust.
3. **Lead Capture at Every Article** — Every resource page includes contextual CTAs, downloadable lead magnets, and inline quote prompts tuned to the article's topic. A visitor reading about Medicare Advantage sees a "Compare Medicare Advantage Plans in Your Area" CTA — not a generic "Get a Quote."
4. **Long-Term Compounding Asset** — Paid ads stop the moment you stop paying. Content compounds. Articles published today will generate leads for years.
5. **Competitive Moat** — Most local insurance agencies publish nothing or publish shallow posts. A deep, well-organized Knowledge Center becomes a durable competitive advantage that cannot be quickly copied.

---

### Content Categories

#### 1. Medicare Hub
The cornerstone category. Covers the full lifecycle from initial eligibility through annual plan changes.

| Article / Guide | Primary Keyword Target | Content Depth |
|---|---|---|
| Turning 65 Medicare Guide | "turning 65 Medicare" | Pillar — comprehensive guide, 3,000+ words |
| Medicare Basics | "how does Medicare work" | Pillar — overview of all parts |
| Medicare Part A | "Medicare Part A" | Deep-dive — hospital coverage explained |
| Medicare Part B | "Medicare Part B" | Deep-dive — medical coverage, costs |
| Medicare Part C (Advantage) | "Medicare Advantage plans" | Pillar |
| Medicare Part D | "Medicare prescription drug plans" | Pillar |
| Medicare Supplement (Medigap) | "Medicare Supplement plans" | Pillar |
| Annual Enrollment Period (AEP) | "Medicare Annual Enrollment Period" | Pillar — published/updated each September |
| Open Enrollment Period | "Medicare Open Enrollment" | Guide |
| Special Enrollment Periods | "Medicare Special Enrollment Period" | Guide — covers qualifying life events |
| Medicare and Medicaid (Dual Eligible) | "Medicare and Medicaid together" | Guide |
| Medicare Savings Programs | "help paying Medicare costs" | Guide |
| Medicare Advantage vs. Supplement | "Medicare Advantage vs Supplement" | Comparison |
| Best Medicare Plans by State | "[state] Medicare plans [year]" | Per-state landing pages (future) |

#### 2. Life Insurance Hub

| Article / Guide | Primary Keyword Target |
|---|---|
| Life Insurance Basics | "how does life insurance work" |
| Term vs. Whole Life | "term vs whole life insurance" |
| Final Expense Insurance | "final expense insurance" |
| Burial Insurance | "burial insurance" |
| Mortgage Protection Insurance | "mortgage protection insurance" |
| Life Insurance for Seniors | "life insurance for seniors over 65" |
| Guaranteed Issue Life Insurance | "guaranteed issue life insurance" |
| How Much Life Insurance Do I Need? | "how much life insurance do I need" |
| Life Insurance Without a Medical Exam | "no exam life insurance" |

#### 3. Government Benefits Hub
A high-traffic, underserved category. Most insurance sites ignore government benefits. Our clients often qualify and don't know it — helping them find money makes us indispensable.

| Article / Guide | Primary Keyword Target |
|---|---|
| SNAP (Food Stamps) Guide | "how to apply for SNAP" |
| Free Government Phone Programs | "free government phone program" / "Lifeline program" |
| Low Income Subsidy (Extra Help) | "Medicare Extra Help program" |
| Medicare Savings Programs | "help with Medicare costs" |
| Medicaid Eligibility Guide | "Medicaid eligibility" |
| ACA Marketplace / Obamacare | "ACA marketplace plans" / "Obamacare plans" |
| Social Security and Medicare | "when to sign up for Medicare Social Security" |
| Veterans Benefits and Medicare | "VA benefits Medicare" |
| State Pharmaceutical Assistance Programs | "[state] prescription assistance" |

#### 4. Tools & Resources
Interactive and downloadable assets that capture leads and provide immediate value.

- **Medicare Checklist** — Downloadable PDF: "Everything you need to enroll in Medicare"
- **Turning 65 Timeline** — Month-by-month guide for the year before Medicare eligibility
- **AEP Checklist** — "Questions to ask before switching your Medicare plan" (PDF)
- **Life Insurance Needs Calculator** — Interactive widget
- **Plan Comparison Worksheet** — Downloadable PDF for comparing plan options
- **Medicare Glossary** — A–Z definitions of Medicare and insurance terms (SEO goldmine)
- **FAQ Library** — Structured Q&A content, FAQ schema markup on all entries

#### 5. Video Learning Center
Short, professional educational videos hosted on YouTube (linked from Knowledge Center).

- "Medicare in 5 Minutes" — overview video
- "Medicare Advantage vs. Supplement: Which is Right for You?"
- "How to Read Your Medicare Summary Notice"
- "What Happens If You Miss Your Medicare Enrollment Window?"
- "Final Expense Insurance Explained Simply"
- "5 Government Programs Seniors Often Miss"

Videos embedded on relevant Knowledge Center pages + uploaded to YouTube for additional organic discovery. Transcripts published as article content.

#### 6. Community Events
Local trust-building and lead generation through in-person and virtual events.

- Medicare 101 Seminars (in-person and virtual)
- Annual Enrollment Period Q&A Webinars
- Benefits Enrollment Assistance Events
- Partnership events with senior centers, libraries, churches

Event pages serve dual purpose: community engagement + local SEO signals.

---

### Content Architecture

**URL Structure:**
```
/knowledge                         → Hub landing page (categorized directory)
/knowledge/medicare                → Medicare category index
/knowledge/medicare/basics         → Individual article
/knowledge/medicare/turning-65     → Pillar guide
/knowledge/life-insurance          → Life insurance category index
/knowledge/life-insurance/final-expense → Article
/knowledge/government-benefits     → Benefits category index
/knowledge/tools                   → Tools & downloads landing
/knowledge/glossary                → Insurance glossary
/knowledge/faq                     → FAQ library
/knowledge/videos                  → Video Learning Center
/knowledge/events                  → Community events
```

**Article Template — Required Sections:**
1. Hero header with article title, category tag, estimated read time, last-updated date
2. Table of contents (anchor links, sticky on desktop)
3. Body content (structured with H2/H3, short paragraphs, bullet lists, callout boxes)
4. Callout box: contextual CTA tied to the article topic (form or phone)
5. Related articles (3–4 internal links)
6. FAQ section (minimum 5 Q&As, FAQ schema markup)
7. Downloadable resource (PDF or checklist, where applicable)
8. Bottom CTA: "Ready to find the right plan? Talk to a licensed agent."
9. Author byline (licensed agent name + credentials)

**Searchability:**
- Full-text search on /knowledge (client-side or Algolia)
- Filter by category
- Filter by audience (seniors, families, caregivers)
- Filter by content type (guide, checklist, video, FAQ)

**Lead Capture Integration:**
- Downloadable resources gate behind email capture (name + email) → syncs to CRM
- Inline "Get a free consultation" forms mid-article for high-intent topics
- Exit-intent modal on long-form articles: "Before you go — talk to a licensed agent for free"

---

### Content Publishing Roadmap

**Phase 1 — Launch (Months 1–2)**
Publish the 10 highest-traffic, highest-intent articles to establish topical authority before launch:
1. Turning 65 Medicare Guide
2. Medicare Basics
3. Medicare Advantage Plans Explained
4. Medicare Supplement Plans Explained
5. Annual Enrollment Period Guide
6. Medicare Part D Guide
7. Final Expense Insurance
8. SNAP Benefits Guide
9. Free Government Phone Programs
10. Medicare Glossary

**Phase 2 — Expansion (Months 3–6)**
- Complete all Medicare Hub articles
- Complete Life Insurance Hub
- Launch Tools & Downloads section
- Publish 2–4 new articles per month

**Phase 3 — Authority (Months 7–12)**
- State-specific Medicare plan comparison pages
- Video Learning Center launch (YouTube + embedded)
- Community Events calendar
- Begin backlinking / PR outreach for high-authority links

**Phase 4 — Scale (Year 2+)**
- AEP content surge each fall (September–December)
- Guest contributions from licensed agents
- Multimedia expansion (podcasts, webinars)
- Consider structured data for "featured snippet" targeting on FAQ content

---

### Technical Requirements

- **CMS:** Markdown files in `/content/knowledge/` directory, rendered via Next.js App Router. No external CMS dependency for launch; evaluate Contentful or Sanity for Phase 2+.
- **Search:** Static full-text search at launch (Fuse.js); upgrade to Algolia when content exceeds 100 articles.
- **Schema Markup:** Article, FAQPage, HowTo, and BreadcrumbList schema on all Knowledge Center pages.
- **Sitemaps:** All Knowledge Center URLs included in sitemap.xml, separated into `/sitemap-knowledge.xml` for Google Search Console monitoring.
- **Images:** Every article has an OG image generated with consistent branding. Alt text required on all images.
- **Performance:** All Knowledge Center pages target Lighthouse score ≥ 90. No client-side rendering for article content — fully static or SSG.
- **Internal Linking:** Every services page links to relevant Knowledge Center articles and vice versa. This is the backbone of the SEO strategy.

---

## Conversion Philosophy

Every page exists to move a visitor one step closer to a conversation with a licensed agent. We do not try to close insurance online — we close the gap between confusion and a trusted expert.

### Principles

1. **Speed is trust.** A lead who submits a form and gets a call within 30 seconds feels like a priority. Speed signals operational excellence.

2. **One primary action per page.** Every page has exactly one primary CTA (emerald button). Secondary actions exist but never compete visually.

3. **Reduce fields, increase completions.** Lead capture forms ask for 3 fields max on first touch: name, phone, zip. Qualifying info collected by AI on the call.

4. **Social proof at the moment of hesitation.** Place testimonials, carrier logos, and review scores directly adjacent to CTAs — right where doubt lives.

5. **Multiple paths to the same destination.** Every page offers: (a) submit form, (b) call now, (c) chat with agent. The destination is the same — a conversation. The path is the user's choice.

6. **Never hide the phone number.** The phone number is in the sticky nav on all pages. Seniors call. Let them.

7. **Qualify before routing.** The AI caller does the qualification. Human agents only spend time with warm, interested prospects. This makes agents more effective and clients feel better served.

8. **Post-conversion is the start, not the end.** Every enrolled client enters a retention and referral workflow. The website's goal extends beyond acquisition to annual review reminders and satisfaction check-ins.
