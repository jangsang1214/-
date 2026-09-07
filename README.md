# GARANG Web — UI System v1

GARANG is a Seoul-born contemporary luxury house that translates accumulated Korean forms, craft, and memory into modern objects.

> 우리는 쌓아온 것으로 존재한다.
>
> WHAT WILL YOU BUILD FROM HERE?

## Stack

- Next.js App Router
- React
- TypeScript
- CSS design tokens / responsive editorial layout

## Routes

- `/` — Brand / philosophy / ORIGIN / GOGOK 001 / archive entry
- `/origin` — Collection I: ORIGIN
- `/objects/gogok-001` — Data-driven object detail page
- `/archive` — Archive object index

## Design principles

- Quiet luxury
- Editorial, museum-like composition
- Korean heritage as hidden structure, not decorative costume
- Strong negative space
- Ink black / Hanji white / stone / jade palette
- Minimal commercial language

## Content-driven expansion

Objects are defined in `data/objects.ts`. Add another object there and reuse the dynamic object route and archive system instead of hard-coding a separate product UI.

## Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Current v1 scope

This first build establishes the living UI system and editorial structure. Production photography, final GARANG wordmark/font licensing, commerce/payment wiring, analytics, SEO refinement, and real product imagery should be integrated after the GOGOK 001 physical prototype is finalized.
