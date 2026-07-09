# CLAUDE.md — Restaurant Demo Site Rules

> This is a **pitch demo** for a real restaurant that has NOT hired us yet.
> Read `CONTENT.md` in this folder for the seeded facts about the restaurant.
>
> **Content integrity — non-negotiable:**
> - Use ONLY the high-confidence facts in `CONTENT.md` (name, cuisine, address,
>   hours, review quotes). These are real.
> - The menu and prices are PLACEHOLDERS. Never invent dishes or prices and
>   present them as real. Use clearly-generic placeholder items, or a
>   "Sample menu — final content TBD" label.
> - Photos: use the local images referenced in `CONTENT.md` for the demo only.
> - Build is LOCAL ONLY. Do not deploy to Vercel or any public URL — this is
>   shown in person on Martin's device. Deployment happens only after the
>   restaurant agrees to work together.

## Always Do First — Two-Phase UI Workflow

Run both phases, in order, before writing any frontend code — every session, no exceptions.

### Phase 1 — Plan with `frontend-design`
- **Invoke the `frontend-design` skill first.**
- Use it to produce the overall blueprint: page/component architecture, layout
  structure, and how the screens fit together.
- Output of this phase is the structural plan, not finished styling.

### Phase 2 — Polish with `ui-ux-pro-max`
- **Then invoke the `ui-ux-pro-max` skill** (`ui-ux-pro-max:ui-ux-pro-max`).
- Use it to turn the Phase 1 blueprint into a concrete design system:
  - Select specific UI **styles** (e.g. glassmorphism, bento grid, minimalism).
  - Choose a **color palette** and **font pairings**.
  - Define **responsive variables/tokens** tailored to this stack (React + Tailwind CSS v4).
- Pass the relevant action (`plan`, `design`, `build`, `implement`, `review`,
  `improve`, `refactor`, `check`) plus context (e.g. "polish the navbar for a
  restaurant landing page, glassmorphism, React + Tailwind").
- Feed the resulting tokens into `tailwind.config.js` and apply the style guidance
  to the components you write.

## Project Setup
- **Always scaffold as a React project** using Vite + Tailwind CSS.
- Bootstrap: `npm create vite@latest . -- --template react && npm install && npm install -D tailwindcss @tailwindcss/vite`
- Configure `tailwind.config.js` with a custom `theme.extend` for brand colors, spacing tokens, and font pairings — do not rely on default Tailwind palette.
- If the project is already bootstrapped, do not re-scaffold. Check for `package.json` first.

## Component Structure
- Components live in `src/components/`. One component per file, named in PascalCase.
- Use Tailwind classes (not inline styles) for all styling.
- Custom design tokens (colors, spacing, shadows, fonts) belong in `tailwind.config.js`, not hardcoded in className strings.
- Keep `App.jsx` as a thin composition root — no styling logic there.

## Content Source
- **All real content comes from `CONTENT.md` in this folder.** Read it first.
- Use the real facts (name, cuisine, address, hours, review quotes) exactly as given.
- The menu/prices section is PLACEHOLDER ONLY — render clearly-generic sample
  items under a "Sample menu — final content TBD" label. Never fabricate real
  dishes or prices.
- Photos: use the local images referenced in `CONTENT.md` if present; otherwise
  placeholders (`https://placehold.co/`). Do not add sections not supported by
  `CONTENT.md`.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (Vite default: `http://localhost:5173`)
- Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer cache is at `~/.cache/puppeteer/` on macOS.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:5173`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:5173 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
- Do at least 2 comparison rounds. Stop only when the design is clean and cohesive or Martin says so.

## Anti-Generic Guardrails

> Source these from Phase 2: the **color palette** and **font pairings** chosen via
> the `ui-ux-pro-max` skill drive the **Colors** and **Typography** rules below.
> Write the resulting values into `tailwind.config.js` as tokens, then follow the
> rules here to keep the output non-generic.

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Define a custom brand palette in `tailwind.config.js` and use those tokens.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens defined in `tailwind.config.js` — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- This is a pitch demo — LOCAL ONLY, never deploy to a public URL
- Never fabricate menu items or prices; use clearly-labelled placeholders
- Do not invent facts not present in `CONTENT.md`
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
