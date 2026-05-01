# Portfolio Site — Claude Design Prompt

A clean, editorial portfolio website for a software engineer who transitioned from graphic design. Light theme, generous whitespace, magazine-like layout. The site tells a career story: Design (past) → Engineering (present) → AI (future).

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Desktop-first, fully responsive
- Theme: Light, minimal, editorial — white space is the star
- Background Primary: Clean White (#FFFFFF) for main content sections
- Background Secondary: Warm Light Gray (#F5F5F5) for alternating sections and design gallery
- Text Primary: Near Black (#111111) for headings
- Text Body: Dark Gray (#333333) for paragraph text
- Text Muted: Medium Gray (#888888) for dates, labels, metadata
- Accent: Slate Blue (#475569) for links, hover states, and interactive highlights — muted and professional, not flashy
- Card Surface: White (#FFFFFF) with subtle border (#E5E7EB) or soft shadow (0 2px 8px rgba(0,0,0,0.06))
- Tag/Label Background: Light Gray (#F3F4F6) with Dark Gray (#4B5563) text, small rounded pill shape
- Border Radius: 8px for cards, 4px for tags, 12px for gallery images
- Typography:
  - Headings: Inter (600–700 weight), or Noto Sans for CJK fallback
  - Body: Inter (400 weight), must support CJK characters (Japanese/Chinese)
  - Labels/Tags: JetBrains Mono or SF Mono (monospace), small size
  - Name display: 28–32px, bold
  - Section headings: 20–24px, semibold
  - Body: 15–16px, regular
  - Tags: 12–13px, monospace

---

## Layout — Left-Right Split (brittanychiang.com structure)

### Left Panel (fixed on desktop, stacked on mobile)

A sticky sidebar that stays visible as the user scrolls the right content.

- **Name:** "Cheng Jiang" — large, bold, 28–32px
- **Title:** "Software Engineer & Former Designer" — medium weight, muted text color
- **Tagline:** One line about building with AI and designing with purpose — body text, relaxed tone
- **Navigation:** Vertical list of section links — About / Experience / Projects / Design / Contact. Active section highlighted with accent color and a small indicator line on the left
- **Language Switcher:** "EN | JP | 中文" — small, minimal, top-right or bottom of nav. Pill-style toggle or simple text links
- **Social Icons:** GitHub + Email — small, bottom of panel, icon-only with hover tooltip
- **Whitespace:** Generous padding (48–64px), let the panel breathe

### Right Panel (scrollable content)

---

## Page Structure

### 1. About Section

Short conversational paragraph (3–4 sentences). Career arc: started as a graphic designer in China → taught myself to code → 3 years as a full-stack engineer in Tokyo financial services → now pivoting to AI engineering. Mention trilingual ability (Chinese native, Japanese JLPT N1, English TOEIC 905). Tone: direct, no filler, like talking to a colleague.

### 2. Experience Section

Timeline-style vertical list of cards (like brittanychiang.com's experience section):

| Period | Role | Company | Tags |
|--------|------|---------|------|
| 2023–Present | Software Developer | Aiful Co., Ltd. (Tokyo) | Vue.js · Java · Spring Boot · Python · AWS · MySQL |
| 2020–2021 | Graphic Designer | Ad.Quan (Shenzhen) | Packaging · 3D Modeling · Brand Design |
| 2019–2020 | Graphic Designer | Joyoung Co., Ltd. (Hangzhou) | Brand Identity · Event Design · Exhibition |

Each card:
- Left side: date range in muted text
- Right side: role title (bold) + company name + brief 1–2 line description + tech/skill tags as pills
- Hover: subtle background highlight (#F9FAFB) with smooth 0.2s transition

### 3. Engineering Projects Section

One featured project card (section designed to accommodate 1–4 cards in the future):

**DualRead — Chrome Extension for Language Learners**
- Description: Select English text on any webpage → instant Chinese translation → save to vocab → auto-highlight everywhere. Solo 0→1 project, published on Chrome Web Store.
- Tech tags: TypeScript · React 19 · Chrome MV3 · Vite
- Links: GitHub icon → github.com/Foxsunshine/DualRead, Chrome Web Store badge
- Card style: larger than experience cards, with a small screenshot or icon on the left, content on the right
- Hover: lift -4px with soft shadow

### 4. Design Portfolio Section (key differentiator)

Gallery grid on a light gray (#F5F5F5) background to visually separate from engineering sections.

**7 design projects:**

| # | Title | Category | Year |
|---|-------|----------|------|
| 1 | Zoomily | Brand Identity | 2019 |
| 2 | Joyoung Festival Gift | Packaging Design | 2020 |
| 3 | Tencent Welfare Gift | Packaging Design | 2021 |
| 4 | Carnivo Toy Gift | 3D Modeling · Packaging | 2021 |
| 5 | Joyoung Recruit | Poster · Brand Design | 2020 |
| 6 | Tencent Festival Gift | 3D Modeling · Packaging | 2021 |
| 7 | Tencent Esports Gift | Packaging · Photography | 2021 |

**Gallery layout:**
- Desktop: 2–3 columns, NOT a rigid equal grid — use a curated layout (e.g. one featured large card spanning 2 columns + smaller cards below, or a masonry-inspired flow with consistent column widths but natural height variation). The gallery should feel like an art exhibition, not a spreadsheet.
- Mobile: single column stack
- Each item: cover image with unified aspect ratio (4:3 or 3:2, object-fit: cover)
- Click opens a lightbox/modal with 5 detail images per project + title + role + description text

**Cohesion strategy** (the 7 projects have very different color palettes):
- Unified card container: same border-radius (12px), same padding (12–16px), same subtle border or soft shadow — the frame stays consistent while content varies
- Unified hover overlay: semi-transparent dark overlay (rgba(0,0,0,0.4)) with white title + category text on hover — normalizes visual appearance regardless of image colors
- **Mockup treatment**: wrap each cover image in a unified mockup scene (e.g. placed on a clean angled surface, inside a minimal frame, or on a perspective display stand with soft shadows). This normalizes quality and style differences. Apply this directly in the design — do not show raw images

### 5. Contact Section

Simple closing block:
- Heading: "Get In Touch" — section heading style
- Body: one sentence about looking for AI engineering opportunities
- Email: birdyenari@gmail.com — styled as accent-colored link
- Footer: "Designed & Built by Cheng Jiang" — small, centered, muted text

---

## Interactions (5 effects only — minimal and elegant)

1. **Scroll fade-in + rise:** Content blocks fade in (opacity 0→1) and translate up ~20px on scroll entry. Duration 0.5s, ease-out. Subtle, not bouncy.
2. **Card hover lift + shadow:** Experience and project cards translate -4px on Y axis with a soft box-shadow (0 4px 12px rgba(0,0,0,0.08)) on hover. Smooth 0.2s ease transition.
3. **Link underline grow:** Hover underlines animate from left to right (width 0%→100%, height 1px, accent color). Not instant appear — animated growth.
4. **Gallery image scale:** Design work thumbnails scale to 1.03 on hover with overflow: hidden on the container. Gentle zoom, 0.3s ease.
5. **Staggered entrance on load:** Name, title, and tagline in the left panel fade in sequentially on first page load (delays: 0s, 0.15s, 0.3s). Duration 0.6s each.

No cursor-following spotlight. No parallax scrolling. No spring physics. No scroll-jacking. Keep it clean.

---

## Responsive Breakpoints

- **Desktop (1024px+):** Left-right split, left panel 35% fixed, right panel 65% scrollable
- **Tablet (768–1023px):** Stacked layout, left panel becomes a compact horizontal header with name + nav inline
- **Mobile (< 768px):** Single column, hamburger menu or collapsible nav, full-width content, gallery goes to 1 column

---

## Multi-language

- Language switcher in left panel: "EN | JP | 中文" — simple text toggle, current language highlighted with accent color
- Same layout and design for all 3 languages, only text content swaps
- English as default
- Typography must render CJK characters cleanly (Noto Sans JP / Noto Sans SC as fallback fonts)

---

## What Makes This Site Unique

1. **The Design Portfolio gallery** adds a visual, image-heavy section that pure developer portfolios don't have — this is the differentiator
2. **Career narrative arc**: the page flows from Design (past) → Engineering (present) → AI (future), telling the transition story through content order
3. **Dual identity** (designer + engineer) is communicated through the site's own visual quality and polish — not through explicit statements. The site itself IS the design portfolio piece.

---

## Deliverables

Please provide:
1. **Full desktop mockup** — complete page with all 5 sections visible
2. **Mobile mockup** — responsive layout for key sections (left panel as header, gallery as single column)
3. **Design gallery detail view** — lightbox/modal interaction showing 5 detail images for one project, with navigation between images
4. **Component details** — close-up of: experience card, project card, gallery card with hover state, language switcher
