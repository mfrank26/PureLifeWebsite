# Pure Life Insurance — Design System

## Design Philosophy

Pure Life Insurance is not a generic insurance website. It is a premium financial services brand that happens to specialize in Medicare and life insurance. The visual language competes with Mercury, Stripe, and American Express — not with local insurance agencies.

The experience must signal: **elite protection, modern technology, human trust.**

Three principles govern every design decision:

1. **Earned Luxury** — Premium without being cold. Deep navy, silver, and emerald create authority. Warmth comes from photography, copy, and spacing — not from loud colors.
2. **Effortless Clarity** — Our clients may be 65+ or helping aging parents. Complexity is hidden in the system, never exposed in the UI. Everything is one tap away.
3. **Trust by Design** — Every visual choice — the weight of a heading, the shadow on a card, the pause before an animation — should make the user feel they are dealing with the most professional firm in the room.

---

## Color Palette

### Primary Interface Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-navy-950` | `#04101F` | Deepest background, hero sections, full-bleed dark |
| `--color-navy-900` | `#0A1628` | Primary page background (dark mode / default) |
| `--color-navy-800` | `#0F2040` | Elevated surfaces, card backgrounds |
| `--color-navy-700` | `#163059` | Borders on dark, section dividers |
| `--color-navy-600` | `#1E4080` | Muted interactive elements on dark |
| `--color-navy-500` | `#2A5599` | Subtle highlights, secondary links |

### Accent — Cyan (Logo Heritage)

The cyan gradient lives in the logo heart. On the interface it is reserved for highlights, active states, and brand moments — never overused.

| Token | Hex | Usage |
|---|---|---|
| `--color-cyan-300` | `#67E3F9` | Glow effects, light mode accents |
| `--color-cyan-400` | `#38D4F0` | Hover states, icon fills |
| `--color-cyan-500` | `#2BC8E8` | Primary accent, active borders, links |
| `--color-cyan-600` | `#1AB0D0` | Pressed states |

**Brand gradient** (logo heart, hero decoratives):
```css
background: linear-gradient(160deg, #2BC8E8 0%, #1B5298 100%);
```

### CTA — Emerald (Conversion Only)

Emerald is the most powerful color on the page. It appears **only** on primary call-to-action buttons ("Get My Free Quote", "Talk to an Agent"). Never use it decoratively. Its scarcity is what makes it convert.

| Token | Hex | Usage |
|---|---|---|
| `--color-emerald-400` | `#34D399` | Glow, hover shimmer |
| `--color-emerald-500` | `#10B981` | Primary CTA background |
| `--color-emerald-600` | `#059669` | CTA hover |
| `--color-emerald-700` | `#047857` | CTA pressed |

### Silver (Premium Accents)

Silver represents the eagle's wings — protection, elegance, precision. Used for borders, icon strokes, gradient shimmer effects, and secondary typography.

| Token | Hex | Usage |
|---|---|---|
| `--color-silver-50` | `#F8FAFC` | Light section backgrounds |
| `--color-silver-100` | `#EEF2F6` | Card backgrounds on white |
| `--color-silver-200` | `#D8E0E8` | Borders on light |
| `--color-silver-300` | `#B8C4CE` | Dividers, subtle borders |
| `--color-silver-400` | `#A8B2BC` | Icon default, secondary text |
| `--color-silver-500` | `#8896A4` | Caption text |
| `--color-silver-600` | `#68788C` | Placeholder text |

**Metallic silver gradient** (premium card borders, icon accents):
```css
background: linear-gradient(135deg, #D4DCE4 0%, #8896A4 50%, #D4DCE4 100%);
```

### Neutrals & Surface

| Token | Hex | Usage |
|---|---|---|
| `--color-white` | `#FFFFFF` | Cards on light sections, text on dark |
| `--color-text-primary` | `#0A1628` | Headings on light backgrounds |
| `--color-text-secondary` | `#3D5166` | Body text on light |
| `--color-text-muted` | `#68788C` | Captions, labels |
| `--color-text-inverse` | `#FFFFFF` | All text on dark navy |
| `--color-text-inverse-muted` | `#A8B2BC` | Subtext on dark navy |

---

## Typography Scale

### Typefaces

- **Display / Editorial headings:** `Cormorant Garamond` — Italic variant for pull quotes and hero headlines. Signals legacy, trust, and wealth management pedigree.
- **UI headings & labels:** `Plus Jakarta Sans` — Clean, modern, geometric. Used for H2–H5, nav, buttons, badges.
- **Body text:** `Inter` — The gold standard for legible UI text. Minimum 16px everywhere; 18px preferred for senior audiences.
- **Monospace (data, quotes, codes):** `JetBrains Mono` — Used sparingly for policy numbers, plan IDs, statistics.

Load via `next/font/google`.

### Scale

| Step | rem | px | Weight | Usage |
|---|---|---|---|---|
| `text-display-2xl` | 5rem | 80px | 600 | Hero editorial moments (Cormorant) |
| `text-display-xl` | 3.75rem | 60px | 600 | Section hero headlines |
| `text-display-lg` | 3rem | 48px | 700 | Page H1 |
| `text-display-md` | 2.25rem | 36px | 700 | H2 section titles |
| `text-display-sm` | 1.875rem | 30px | 600 | H3 |
| `text-xl` | 1.25rem | 20px | 600 | H4, card titles |
| `text-lg` | 1.125rem | 18px | 500 | Lead body text, testimonials |
| `text-base` | 1rem | 16px | 400 | Standard body |
| `text-sm` | 0.875rem | 14px | 400 | Labels, captions |
| `text-xs` | 0.75rem | 12px | 500 | Legal, badges, fine print |

### Line Height & Tracking

- Display: `line-height: 1.1`, `letter-spacing: -0.02em`
- Headings: `line-height: 1.2`, `letter-spacing: -0.01em`
- Body: `line-height: 1.7`
- Labels / all-caps: `letter-spacing: 0.08em`, always uppercase with `font-weight: 600`

---

## Spacing System

8px base grid. All spacing values are multiples of 4px.

| Token | rem | px | Common usage |
|---|---|---|---|
| `space-1` | 0.25rem | 4px | Icon gap, tight label spacing |
| `space-2` | 0.5rem | 8px | Inline elements, badge padding |
| `space-3` | 0.75rem | 12px | Compact form fields |
| `space-4` | 1rem | 16px | Standard component padding |
| `space-5` | 1.25rem | 20px | Button padding horizontal |
| `space-6` | 1.5rem | 24px | Card inner padding |
| `space-8` | 2rem | 32px | Section sub-spacing |
| `space-10` | 2.5rem | 40px | Card padding (premium) |
| `space-12` | 3rem | 48px | Between components in a section |
| `space-16` | 4rem | 64px | Section internal top/bottom |
| `space-20` | 5rem | 80px | Standard section padding |
| `space-24` | 6rem | 96px | Large section padding |
| `space-32` | 8rem | 128px | Hero top padding |
| `space-40` | 10rem | 160px | Full-bleed section breathing room |

### Layout

- Max content width: `1280px`
- Column gutter: `1.5rem` (24px)
- Narrow content (legal, blog): `768px`
- Page horizontal padding: `clamp(1.5rem, 5vw, 5rem)`

---

## Shadow System

### Elevation Tokens

```css
--shadow-xs:    0 1px 2px rgba(4, 16, 31, 0.06);
--shadow-sm:    0 1px 4px rgba(4, 16, 31, 0.08), 0 1px 2px rgba(4, 16, 31, 0.04);
--shadow-md:    0 4px 8px rgba(4, 16, 31, 0.08), 0 2px 4px rgba(4, 16, 31, 0.04);
--shadow-lg:    0 8px 24px rgba(4, 16, 31, 0.10), 0 4px 8px rgba(4, 16, 31, 0.06);
--shadow-xl:    0 20px 40px rgba(4, 16, 31, 0.12), 0 8px 16px rgba(4, 16, 31, 0.06);
--shadow-2xl:   0 32px 64px rgba(4, 16, 31, 0.20);
```

### Glow Tokens (dark backgrounds only)

```css
--shadow-glow-cyan:    0 0 24px rgba(43, 200, 232, 0.25), 0 0 8px rgba(43, 200, 232, 0.15);
--shadow-glow-emerald: 0 0 24px rgba(16, 185, 129, 0.30), 0 0 8px rgba(16, 185, 129, 0.20);
--shadow-glow-silver:  0 0 20px rgba(168, 178, 188, 0.20);
```

---

## Glass Effects

Used on cards that sit over hero imagery or dark gradient backgrounds.

```css
/* Glass card — dark background */
.glass-dark {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Glass card — light background */
.glass-light {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.90);
}

/* Premium silver shimmer border */
.border-silver-shimmer {
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;
}
.border-silver-shimmer::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, #D4DCE4, #8896A4, #D4DCE4);
  z-index: -1;
}
```

---

## Motion System

All animation is purposeful. Motion should feel like the product breathing — never decorative for its own sake. Respect `prefers-reduced-motion`.

### Duration Tokens

```css
--duration-instant:  100ms;   /* Micro-feedback: checkbox check, toggle flip */
--duration-fast:     150ms;   /* Hover states, button press */
--duration-normal:   250ms;   /* Dropdowns, tooltips, simple transitions */
--duration-medium:   400ms;   /* Card reveals, modals, drawers */
--duration-slow:     600ms;   /* Page transitions, hero entrances */
--duration-crawl:    1000ms;  /* Ambient background animations */
```

### Easing Tokens

```css
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);     /* Snappy deceleration — primary */
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);      /* Standard transitions */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Subtle spring — interactive elements */
--ease-linear:  linear;                             /* Loading bars, progress */
```

### Animation Principles

1. **Enter fast, exit faster.** Elements appear over 250–400ms. They disappear in 150ms. Fast exits feel modern; slow exits feel broken.
2. **Stagger reveals.** When multiple cards or list items enter, stagger by 60–80ms. Never stagger more than 5 items.
3. **Translate + fade.** Standard entrance: `opacity: 0 → 1` + `translateY(12px) → 0`. Never use scale alone.
4. **Hover lifts.** Cards lift `2–4px` on hover with shadow deepening. Buttons subtly depress on press (`translateY(1px)`).
5. **No spin loaders.** Use shimmer skeleton loaders (silver gradient animation) instead of spinners.
6. **Ambient motion.** Hero backgrounds may use very slow, large-scale gradient drift (30–60s loops) to add life without distraction.

---

## Component Library

### Buttons

**Primary CTA (Emerald — conversion only)**
```
Background:     #10B981
Hover:          #059669 + translateY(-1px) + shadow-glow-emerald
Active:         #047857 + translateY(0)
Text:           White, Plus Jakarta Sans, 16px, weight 600
Padding:        14px 28px
Border-radius:  8px
Transition:     150ms ease-out
Min-width:      160px
Min-height:     48px (touch target)
```

**Secondary (Navy outline)**
```
Background:     transparent
Border:         1.5px solid #2BC8E8
Text:           #2BC8E8, 16px, weight 600
Hover:          background rgba(43,200,232,0.08)
Border-radius:  8px
Padding:        13px 27px
```

**Ghost / Tertiary**
```
Background:     transparent
Text:           #A8B2BC on dark / #68788C on light
Hover:          color → white (dark) or navy (light)
No border. Arrow icon → translates right 4px on hover.
```

**Destructive**
```
Background:     #EF4444
Hover:          #DC2626
Usage:          Confirmation dialogs only
```

All buttons: minimum `48px` height, minimum `44px` width for touch accessibility.

---

### Cards

**Standard Card (light surfaces)**
```
Background:     white
Border:         1px solid #D8E0E8
Border-radius:  12px
Padding:        32px
Shadow:         --shadow-md
Hover:          --shadow-xl + translateY(-2px)
Transition:     250ms ease-out
```

**Premium Card (dark backgrounds)**
```
Background:     rgba(255,255,255,0.04)
Backdrop-filter: blur(16px)
Border:         1px solid rgba(255,255,255,0.08)
Border-radius:  16px
Padding:        40px
Hover:          border-color → rgba(43,200,232,0.3) + shadow-glow-cyan
```

**Stat / Metric Card**
```
Uses silver shimmer border
Large number: Cormorant Garamond, 3rem, weight 600
Label: Plus Jakarta Sans, 12px, uppercase, tracked
Accent color on the number: cyan or emerald depending on context
```

**Testimonial Card**
```
Background:     white
Left border:    3px solid #10B981 (emerald)
Quote mark:     Cormorant Garamond, 5rem, opacity 0.1, absolute positioned
Border-radius:  12px
```

---

### Navigation

**Desktop**
```
Background:     rgba(10, 22, 40, 0.85) with backdrop-filter blur(20px)
Height:         72px
Position:       sticky top-0, z-50
Logo:           Left-aligned, 140px wide
Links:          Plus Jakarta Sans, 15px, weight 500, #A8B2BC → white on hover
CTA button:     Emerald primary button, right side
Border-bottom:  1px solid rgba(255,255,255,0.06) — only after scroll
```

**Mobile**
```
Height:         64px
Hamburger:      Slides in full-height drawer from right
Drawer:         Navy 900 background, full links stacked
CTA:            Full-width emerald button at bottom of drawer
```

---

### Hero Sections

**Full-bleed dark hero**
```
Background:     Navy 950, optional ambient gradient animation
Height:         100vh (desktop) / auto with min-height (mobile)
Content:        Max-width 680px, left-aligned or centered
Eyebrow:        12px, uppercase, tracked, cyan or silver
Headline:       Cormorant Garamond Display 2XL or XL
Subtext:        Inter, 18–20px, silver-400, max-width 520px
CTAs:           Emerald primary + Navy outline secondary, stacked on mobile
Trust bar:      Carrier logos or stat row below fold at 60% opacity
Decorative:     Abstract cyan/navy gradient orb, top-right, blur 120px, 40% opacity
```

**Split hero (image + content)**
```
Left 55%:       Content (headline, body, CTAs)
Right 45%:      Photography with soft vignette overlay
Mobile:         Stack, image becomes full-width header with overlay
```

---

### Forms

**Input fields**
```
Background:     #0F2040 (dark) / white (light)
Border:         1px solid rgba(255,255,255,0.12) dark / #D8E0E8 light
Focus border:   #2BC8E8 (cyan), 1.5px
Border-radius:  8px
Height:         48px
Font:           Inter, 16px (never below 16 — prevents iOS zoom)
Padding:        12px 16px
Label:          12px, uppercase, tracked, silver-400, margin-bottom 6px
Error:          Border #EF4444 + red micro-text below
Placeholder:    silver-600
```

**Select / Dropdown**
```
Same as input, custom chevron icon (silver → cyan on focus)
```

**Form layout**
```
Single column on all widths for primary lead capture forms
Max-width 480px for modals, 560px for inline forms
CTA button full-width below form
Trust micro-copy below button: lock icon + "Your information is secure"
```

---

### Modals

```
Overlay:        rgba(4, 16, 31, 0.85), backdrop-blur 8px
Container:      Max-width 520px, navy-800 background
Border:         1px solid rgba(255,255,255,0.08)
Border-radius:  20px
Padding:        48px
Enter:          opacity 0→1 + scale 0.96→1, 250ms ease-out
Exit:           opacity 1→0 + scale 1→0.96, 150ms ease-out
Close:          Top-right X, silver-400 → white on hover
```

---

### Icons

- Library: **Lucide React** (clean, consistent stroke-based)
- Default stroke: `#A8B2BC` (silver)
- Active / hover: `#2BC8E8` (cyan)
- CTA context: `#10B981` (emerald)
- Size: 20px UI, 24px hero, 16px inline
- Never use fill icons where strokes exist — stroke-only stays consistent with the silver wing motif

---

## Photography Direction

Photography is where warmth enters this brand. The system is cold and precise; the photography makes it human.

**Subject matter:**
- Smiling seniors in real-life moments — not staged hospital or clipboard shots
- Multi-generational family interactions
- Active, independent seniors: gardening, travel, cooking, grandchildren
- Professionals in modern office settings (for agent profiles)

**Treatment:**
- Desaturated slightly (-10 to -15% saturation) to prevent competing with brand colors
- Warm contrast applied (lift shadows, keep highlights clean)
- Dark photos can use navy gradient overlay at 40–60% for text legibility
- Never use cheesy stock art (clipart doctors, handshakes, stethoscopes)

**Hero images:** Full-bleed, high-resolution (minimum 2000px wide). Apply a linear gradient overlay on the bottom third: `linear-gradient(to top, rgba(10,22,40,0.9), transparent)`.

---

## Accessibility

This is non-negotiable. Our primary audience includes people 65+ with varying visual acuity.

- **Contrast:** All text meets WCAG AA minimum. Body text targets AAA (7:1 on primary backgrounds).
- **Font sizes:** No body text below 16px. Prefer 18px. Labels never below 13px.
- **Touch targets:** All interactive elements minimum 44×44px (Apple HIG) / 48×48px (Material).
- **Focus rings:** Visible, cyan-colored: `outline: 2px solid #2BC8E8; outline-offset: 3px;`
- **Reduced motion:** All animations wrapped in `@media (prefers-reduced-motion: no-preference)`. Static fallback for all transitions.
- **Semantic HTML:** Proper heading hierarchy (one H1 per page), landmark regions, ARIA labels on icon-only buttons.
- **Forms:** Every input has a visible label (no placeholder-only labels). Error messages are associated via `aria-describedby`.
- **Color:** Never rely on color alone to convey meaning. Pair with icon or text label.

---

## Responsive Behavior

| Breakpoint | Width | Strategy |
|---|---|---|
| `xs` | < 480px | Single column, stacked CTAs, larger tap targets |
| `sm` | 480–767px | Single column, minor layout improvements |
| `md` | 768–1023px | Two-column begins for some components |
| `lg` | 1024–1279px | Full desktop layout |
| `xl` | 1280–1535px | Max-width container active |
| `2xl` | ≥ 1536px | Content stays at 1280px, wider whitespace |

**Mobile-first principles:**
- Design mobile first, enhance for desktop
- Navigation collapses to drawer at < 1024px
- Hero sections become stacked at < 768px
- All card grids: 1 col mobile → 2 col tablet → 3 col desktop
- Tables: horizontal scroll with sticky first column on mobile
- Forms: single column always
- Font sizes scale down 10–15% on mobile for display sizes only; body text stays at 16–18px

---

## Impeccable Integration Notes

Impeccable reads this file to enforce design standards. Key commands available:

- When building UI, reference `--color-*` tokens defined above
- CTA buttons are always emerald — never cyan, never navy
- Navy is the default dark surface, not black
- Silver is the secondary/muted tone — not gray
- Cormorant Garamond for display/editorial, Plus Jakarta Sans for UI, Inter for body
- Animate with the motion tokens above; do not invent arbitrary durations
- Every card gets a hover state. No static cards.
- Minimum touch target: 48px height on all interactive elements
