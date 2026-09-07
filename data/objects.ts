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
    era: "ORIGIN / Ancient Korean form",
    year: "2027",
    place: "Seoul, Korea",
    material: ["Sterling Silver 925", "Natural Jade 5–6 mm"],
    dimensions: "22 × 18 × 4 mm",
    finish: "Satin brush / mirror-polished edge",
    chain: "925 Silver, 45 cm + 5 cm extension",
    edition: "Founding Edition / 100 pieces",
    price: 329000,
    statement: "The empty space is yours to build.",
    story:
      "GOGOK 001 — ORIGIN is built as an open circular form. A deliberate gap remains unfinished, with a natural jade sphere held between the two silver ends. It does not reproduce a historical artifact; it carries forward curve, void, and tension as a contemporary object for what comes next.",
  },
];

export function getObject(slug: string) {
  return objects.find((object) => object.slug === slug);
}
