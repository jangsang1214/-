export type GarangObject = {
  slug: string;
  archive: string;
  name: string;
  collection: string;
  era: string;
  year: string;
  place: string;
  material: string[];
  dimensions: string;
  finish: string;
  chain: string;
  edition: string;
  price: number;
  statement: string;
  story: string;
};

export const objects: GarangObject[] = [
  {
    slug: "gogok-001",
    archive: "001",
    name: "GOGOK 001",
    collection: "ORIGIN",
    era: "ORIGIN / Reinterpreted Korean curve",
    year: "TBA",
    place: "Seoul, Korea",
    material: ["Sterling Silver 925", "Natural Jade 5–6 mm"],
    dimensions: "25 × 18 × 4 mm",
    finish: "Satin brush / mirror-polished edge",
    chain: "925 Silver, 45 cm + 5 cm extension",
    edition: "First Edition",
    price: 329000,
    statement: "The empty space is yours to build.",
    story:
      "GOGOK 001 — ORIGIN is built around an open circular silver form. A deliberate break remains at the upper edge, while a natural jade sphere is suspended into that void from the pendant's upper structure. It does not reproduce a historical artifact; it carries forward curve, negative space, and tension as a contemporary object for what comes next.",
  },
];

export function getObject(slug: string) {
  return objects.find((object) => object.slug === slug);
}
