// RedPad Games — corporate structure & geographic footprint.

export interface FootprintEntity {
  city: string;
  country: string;
  /** ISO country code for map / flag. */
  countryCode: string;
  entity: string;
  role: string;
  /** Approximate coordinates [lat, lng] for any map renders. */
  coords: [number, number];
}

export const footprint: FootprintEntity[] = [
  {
    city: "Zurich",
    country: "Switzerland",
    countryCode: "CH",
    entity: "Red Pad Games AG",
    role: "Headquarters · Holding & IP",
    coords: [47.3769, 8.5417],
  },
  {
    city: "Almaty",
    country: "Kazakhstan",
    countryCode: "KZ",
    entity: "R-Games",
    role: "Development hub",
    coords: [43.222, 76.8512],
  },
  {
    city: "Delaware",
    country: "United States",
    countryCode: "US",
    entity: "Desert Software House Inc.",
    role: "US operations",
    coords: [39.0, -75.5],
  },
  {
    city: "Grand Cayman",
    country: "Cayman Islands",
    countryCode: "KY",
    entity: "Operational Co.",
    role: "Marketplace operations",
    coords: [19.3133, -81.2546],
  },
];

export const studioStats = {
  founded: 2017,
  teamSize: 70,
  hubs: footprint.length,
};

export const studioStatement = {
  short:
    "RedPad Games builds innovative digital products at the intersection of multiplayer entertainment, modern financial tools, and education.",
  long:
    "Our strength is integrating and developing complex high-load systems. Backed by external investment and strategic partnerships with industry leaders like AWS, Tencent Cloud, Epic Games, and NVIDIA, we aim to become a leading player in the games market — raising the bar and helping shape the industry's future.",
};
