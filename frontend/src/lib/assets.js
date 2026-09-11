const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

export const ASSETS = {
  hero: {
    src: u("photo-1486406146926-c627a92ad1ab", 2200),
    need: "opulence-hero-aerial-dusk.mp4",
    alt: "Glass tower facade viewed from below (temporary placeholder)",
  },
  portalCurrent: {
    src: u("photo-1613490493576-7fde63acd811"),
    need: "opulence-facade-day.jpg",
    alt: "Modern luxury residence at night (temporary placeholder)",
  },
  portalLegacy: {
    src: u("photo-1477959858617-67f85cf4f1df"),
    need: "legacy-portfolio.jpg",
    alt: "City skyline at night (temporary placeholder)",
  },
  opulenceFeature: {
    src: u("photo-1512917774080-9991f1c4c750", 2200),
    need: "opulence-exterior-dusk.jpg",
    alt: "Premium residence exterior at dusk with pool (temporary placeholder)",
  },
  enquire: {
    src: u("photo-1600607687939-ce8a6c25118c"),
    need: "opulence-living-wide.jpg",
    alt: "Refined residence interior (temporary placeholder)",
  },
  arrival: {
    src: u("photo-1600596542815-ffad4c1539a9", 2200),
    need: "opulence-hero-aerial-dusk.jpg",
    alt: "Luxury residence exterior at dusk (temporary placeholder)",
  },
  scaleImg: {
    src: u("photo-1545324418-cc1a3fa10c00"),
    need: "opulence-scale-aerial.jpg",
    alt: "White residential tower facade (temporary placeholder)",
  },
  residences: {
    src: u("photo-1600585154340-be6161a56a0c"),
    need: "opulence-residence-living.jpg",
    alt: "Spacious modern residence living space (temporary placeholder)",
  },
};
