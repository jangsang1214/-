# GARANG Web — Digital Flagship v1

GARANG is a Seoul-born contemporary luxury house translating accumulated Korean forms, craft, and memory into modern objects.

> 우리는 쌓아온 것으로 존재한다.
>
> WHAT WILL YOU BUILD FROM HERE?

## Stack

- Next.js App Router
- React
- TypeScript
- CSS design tokens and responsive editorial layout
- GitHub Actions type-check + production build verification

## Routes

- `/` — Digital flagship: philosophy → ORIGIN → GOGOK 001 → craft → archive
- `/origin` — Collection I: ORIGIN
- `/objects/gogok-001` — Data-driven object detail + private acquisition request
- `/archive` — Archive object index

## Brand / UI principles

- Quiet luxury rather than performance-commerce aesthetics
- Editorial, museum-like composition
- Korean heritage as hidden structure, not decorative costume
- Strong negative space and restrained motion
- Ink black / Hanji white / stone / jade palette
- Product as archive object, not SKU noise
- Mobile experience designed as a vertical exhibition rather than a desktop shrink-down
- Compact mobile navigation that preserves the flagship hierarchy

## Content-driven expansion

Objects are defined in `data/objects.ts`. Add another object there and reuse the dynamic object route and archive system instead of hard-coding separate product pages.

## Private acquisition

The acquisition UI is intentionally separated from conventional checkout language. To connect acquisition requests to an email address, configure:

```bash
NEXT_PUBLIC_ACQUIRE_EMAIL=your-address@example.com
```

Without this environment variable, the interface remains in pre-production/request-opening mode.

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Production verification:

```bash
npm run typecheck
npm run build
```

## Runtime baseline

Next.js is pinned to `15.5.25`, a Maintenance LTS patch newer than the August 2026 security release baseline (`15.5.24`).

## Preview deployment

The repository is ready for a standard Next.js host such as Vercel. GitHub Pages was intentionally not retained because repository-level Pages enablement requires account-side authorization that is unavailable to the GitHub integration used during this build.

## What is intentionally provisional

The current sculptural GOGOK visual is an SVG art-direction asset for layout development, not a manufacturing-accurate product render. Final product photography, final licensed typefaces/wordmark, commerce/payment wiring, analytics, domain-based metadata, and production content should be connected after the physical GOGOK 001 prototype is finalized.
