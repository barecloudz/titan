export const locations = [
  // Nassau County
  { slug: "massapequa", name: "Massapequa", county: "Nassau" },
  { slug: "seaford", name: "Seaford", county: "Nassau" },
  { slug: "wantagh", name: "Wantagh", county: "Nassau" },
  { slug: "merrick", name: "Merrick", county: "Nassau" },
  { slug: "levittown", name: "Levittown", county: "Nassau" },
  { slug: "east-meadow", name: "East Meadow", county: "Nassau" },
  { slug: "bellmore", name: "Bellmore", county: "Nassau" },
  { slug: "freeport", name: "Freeport", county: "Nassau" },
  { slug: "baldwin", name: "Baldwin", county: "Nassau" },
  { slug: "farmingdale", name: "Farmingdale", county: "Nassau" },
  { slug: "bethpage", name: "Bethpage", county: "Nassau" },
  { slug: "hicksville", name: "Hicksville", county: "Nassau" },
  { slug: "plainview", name: "Plainview", county: "Nassau" },
  { slug: "woodbury", name: "Woodbury", county: "Nassau" },
  { slug: "oyster-bay", name: "Oyster Bay", county: "Nassau" },
  // Western Suffolk
  { slug: "babylon", name: "Babylon", county: "Suffolk" },
  { slug: "lindenhurst", name: "Lindenhurst", county: "Suffolk" },
  { slug: "amityville", name: "Amityville", county: "Suffolk" },
  { slug: "copiague", name: "Copiague", county: "Suffolk" },
  { slug: "west-babylon", name: "West Babylon", county: "Suffolk" },
  { slug: "deer-park", name: "Deer Park", county: "Suffolk" },
  { slug: "west-islip", name: "West Islip", county: "Suffolk" },
  { slug: "north-babylon", name: "North Babylon", county: "Suffolk" },
  { slug: "wyandanch", name: "Wyandanch", county: "Suffolk" },
  { slug: "bay-shore", name: "Bay Shore", county: "Suffolk" },
];

export const nassauTowns = locations
  .filter((l) => l.county === "Nassau")
  .map((l) => l.name);

export const suffolkTowns = locations
  .filter((l) => l.county === "Suffolk")
  .map((l) => l.name);
