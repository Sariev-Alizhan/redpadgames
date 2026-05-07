// Strategic & ecosystem partners. `logo` is the path under /public/partners/.
// `monochromeReady = true` means the SVG is already a white-on-transparent
// asset; we render those as-is. The remaining (full-colour) brand SVGs get a
// CSS desaturate + invert filter so the row reads with one visual rhythm.

export type PartnerTier = "tier-1" | "tier-2";

export interface Partner {
  name: string;
  tier: PartnerTier;
  logo: string;
  /** True when the SVG is already white-on-transparent (no recolour needed). */
  monochromeReady: boolean;
  role: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    name: "AWS",
    tier: "tier-1",
    logo: "/partners/aws.svg",
    monochromeReady: false,
    role: "Cloud infrastructure",
    url: "https://aws.amazon.com",
  },
  {
    name: "Tencent Cloud",
    tier: "tier-1",
    logo: "/partners/tencent-cloud.svg",
    monochromeReady: false,
    role: "APAC cloud partner",
    url: "https://www.tencentcloud.com",
  },
  {
    name: "NVIDIA",
    tier: "tier-1",
    logo: "/partners/nvidia.svg",
    monochromeReady: true,
    role: "GPU & graphics tech",
    url: "https://www.nvidia.com",
  },
  {
    name: "Steam",
    tier: "tier-1",
    logo: "/partners/steam.svg",
    monochromeReady: true,
    role: "PC distribution",
    url: "https://store.steampowered.com",
  },
  {
    name: "Epic Games",
    tier: "tier-1",
    logo: "/partners/epic-games.svg",
    monochromeReady: true,
    role: "Engine & store",
    url: "https://www.epicgames.com",
  },
  {
    name: "Binance",
    tier: "tier-1",
    logo: "/partners/binance.svg",
    monochromeReady: true,
    role: "Web3 infrastructure",
    url: "https://www.binance.com",
  },
  {
    name: "Xsolla",
    tier: "tier-1",
    logo: "/partners/xsolla.svg",
    monochromeReady: false,
    role: "Payments & monetization",
    url: "https://xsolla.com",
  },

  {
    name: "QuillAudits",
    tier: "tier-2",
    logo: "/partners/quillaudits.svg",
    monochromeReady: true,
    role: "Smart-contract audits",
    url: "https://www.quillaudits.com",
  },
  {
    name: "Allcorrect",
    tier: "tier-2",
    logo: "/partners/allcorrect.png",
    monochromeReady: false,
    role: "Localization",
    url: "https://allcorrectgames.com",
  },
  {
    name: "Crowe",
    tier: "tier-2",
    logo: "/partners/crowe.svg",
    monochromeReady: false,
    role: "Audit & advisory",
    url: "https://www.crowe.com",
  },
];

export const tierOnePartners = partners.filter((p) => p.tier === "tier-1");
export const tierTwoPartners = partners.filter((p) => p.tier === "tier-2");
