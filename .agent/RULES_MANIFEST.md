# 🔮 AONEKO RULES MANIFEST — Antigravity Standard

> **trigger: always_on | mode: permanent | version: 1.0**
>
> This manifest consolidates all 15 rules into a unified, layered system.
> Every rule is always active. The appropriate layer is applied based on the task context.

---

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│              ANTIGRAVITY LAYER (14, 15)              │
│         Design Agent + Audit System (always)         │
├─────────────────────────────────────────────────────┤
│              EXPERIENCE LAYER (3, 8)                 │
│           PWA + Animation (user-facing)              │
├─────────────────────────────────────────────────────┤
│              QUALITY LAYER (5, 6, 11)                │
│    Performance + Security + Browser Compat (review)  │
├─────────────────────────────────────────────────────┤
│              LOGIC LAYER (4, 9)                      │
│       JavaScript ES6+ + Web Components (code)        │
├─────────────────────────────────────────────────────┤
│              FRONTIER LAYER (10)                     │
│         WebAssembly (performance-critical)            │
├─────────────────────────────────────────────────────┤
│              FOUNDATION LAYER (1, 2, 12)             │
│     Semantic HTML + CSS + Typography (always)         │
└─────────────────────────────────────────────────────┘
```

---

## 🏗️ Foundation Layer — ALWAYS ACTIVE

> These rules form the bedrock. They apply to **every** file, **every** component, **every** change.

### Rule 1 — Semantic HTML & Accessibility
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- WCAG 2.1 Level AA compliance
- Keyboard navigation + ARIA attributes
- Proper heading hierarchy (`<h1>`→`<h6>`)
- Alt text for all images
- Form elements with `<label>`, `<fieldset>`, validation
- Structured data (Schema.org) for SEO

### Rule 2 — Modern CSS & Responsive Design
- Mobile-first media queries
- CSS Grid (2D) + Flexbox (1D)
- CSS custom properties for theming
- Fluid typography with `clamp()`
- BEM naming convention
- `prefers-reduced-motion` respect
- CSS containment for performance

### Rule 12 — Web Fonts & Typography
- WOFF2 primary format + `font-display: swap`
- Variable fonts when possible
- Typography scale: modular + fluid with `clamp()`
- Line height 1.4–1.6, line length 45–75 chars
- Font subsetting + preloading critical fonts
- Comprehensive fallback stacks

---

## ⚡ Logic Layer — WHEN WRITING CODE

### Rule 4 — JavaScript ES6+ *(consolidates Rules 4 & 7)*
- `const` by default, `let` when needed, never `var`
- Arrow functions, destructuring, spread/rest
- `async/await` with proper `try/catch`
- ES6 modules (`import`/`export`), dynamic imports
- Optional chaining (`?.`) + nullish coalescing (`??`)
- `Promise.all` / `Promise.allSettled` for parallel ops
- Pure functions, no mutation, ESLint enforced

### Rule 9 — Web Components & Custom Elements
- `customElements.define()` with `HTMLElement` extension
- Shadow DOM for style encapsulation
- Lifecycle callbacks (`connectedCallback`, `disconnectedCallback`, etc.)
- Slots for content projection
- Custom events with `composed: true`
- CSS custom properties for theming through Shadow DOM
- TypeScript for type safety

---

## 🛡️ Quality Layer — DURING REVIEW & INTEGRATION

### Rule 5 — Web Performance & Core Web Vitals
- **LCP** < 2.5s: preload critical resources, optimize images (WebP/AVIF)
- **FID** < 100ms: minimize JS execution, break long tasks
- **CLS** < 0.1: set dimensions for images/videos, preload fonts
- Code splitting + tree shaking + lazy loading
- Critical CSS inline, defer non-critical
- Resource hints (`preconnect`, `prefetch`)
- HTTP/2+, Brotli compression, CDN

### Rule 6 — Web Security
- OWASP Top 10 compliance
- XSS: CSP headers, `textContent` over `innerHTML`, DOMPurify
- CSRF: tokens, `SameSite` cookies
- SQL injection: parameterized queries
- HTTPS everywhere + HSTS + security headers
- Input validation (client + server, allowlists)
- API rate limiting + proper error handling (no info leakage)
- Dependencies: `npm audit`, Dependabot, minimal deps

### Rule 11 — Cross-Browser Compatibility
- Test: Chrome, Firefox, Safari, Edge + mobile
- Feature detection (`@supports`, Modernizr) over browser sniffing
- Autoprefixer + browserslist configuration
- Polyfills loaded conditionally, minimal size
- Progressive enhancement as default strategy
- Visual regression testing (Playwright)

---

## ✨ Experience Layer — USER-FACING FEATURES

### Rule 3 — Progressive Web App
- Offline-first with service workers + Cache API
- Caching: cache-first (static), network-first (dynamic), stale-while-revalidate
- Web app manifest (icons, display mode, theme colors)
- `beforeinstallprompt` + install UI
- Push notifications with proper permission flow
- HTTPS required, CSP enforced
- App shell architecture, PRPL pattern

### Rule 8 — Animation & Motion Design *(consolidates Rules 8 & 13)*
- **Performance**: animate only `transform` + `opacity`
- CSS transitions (< 300ms) for state changes
- CSS `@keyframes` for complex sequences
- GSAP for scroll-triggered + complex animations
- Framer Motion for React: variants, layout, AnimatePresence
- Intersection Observer for scroll-based triggers
- Micro-interactions: hover, focus, loading, success/error states
- `prefers-reduced-motion`: always honor
- Skeleton screens + shimmer for loading

---

## 🚀 Frontier Layer — PERFORMANCE-CRITICAL COMPUTATION

### Rule 10 — WebAssembly
- Use for: image/video processing, crypto, physics, audio, compression
- Compile from Rust (wasm-pack) or C/C++ (Emscripten)
- Streaming compilation for large modules
- Minimize JS↔WASM boundary crossings
- SIMD when available
- Feature detection + JavaScript fallbacks
- Cache compiled modules

---

## 🔮 Antigravity Layer — ALL DESIGN WORK

### Rule 14 — Principal Design Agent
**Identity:** Design engineer making radical innovation feel inevitable.

**5 Principles:**
1. Function over aesthetics — design is engineering made visible
2. Brutal clarity — hierarchy in < 3 seconds
3. Cognitive lightness — interfaces feel weightless
4. Visible engineering — show the grid, logic, structure
5. Near-future credibility — 5–10 years ahead, no sci-fi clichés

**Design System:**
- 8px grid, spacing: 4/8/16/24/32/48/64/96/128
- Max 3–4 colors + neutrals, semantic colors (success/warning/error/info)
- Contrast: 4.5:1 text, 3:1 UI
- Atomic Design: Atoms → Molecules → Organisms → Templates
- Motion: 200–300ms micro, 400–500ms transitions, physics-based easing
- Dark mode by default

**Anti-patterns:** ❌ decoration without function, ❌ trend-copying, ❌ inconsistent spacing, ❌ >4 colors, ❌ animations >500ms

### Rule 15 — Principal Audit System
**Identity:** Final quality gatekeeper. Does NOT create — validates.

**Verdicts:** APPROVED | REVISION REQUIRED | REJECTED

**7 Axes of Evaluation:**
1. **Problem** — Is this necessary?
2. **Cognitive Clarity** — Hierarchy in < 3 seconds?
3. **System & Scale** — Works at 1x and 100x?
4. **Visual Engineering** — Grid/typography logical?
5. **Antigravity Real** — Does it float? Is it light?
6. **Usability & Accessibility** — WCAG 2.1 AA?
7. **Honesty** — Visual matches capability?

**Automatic FAIL:**
- ❌ No grid system
- ❌ Color contrast below WCAG AA
- ❌ No keyboard navigation
- ❌ Animations > 500ms unjustified
- ❌ Hidden navigation
- ❌ > 4 colors without function
- ❌ Broken responsive design
- ❌ No focus indicators

---

## How to Apply

| Context | Active Layers |
|---------|---------------|
| **Any change** | Foundation + Antigravity |
| **Writing JS/TS code** | + Logic |
| **Building UI features** | + Experience |
| **Code review / PR** | + Quality |
| **Performance-critical** | + Frontier |
| **Design work** | Full Antigravity (14 + 15) |
| **Full audit** | ALL layers |

---

## Quick Reference Commands

| Command | Action |
|---------|--------|
| `/rules` | Load and activate this manifest |
| `/antigravity_audit` | Trigger full 7-axis audit (Rule 15) |
| Design work | Automatically activates Rule 14 agent |

---

> **This manifest is permanent. It applies to every session, every file, every commit.**
> *"No insecure, inaccessible, or mediocre system reaches production."*
