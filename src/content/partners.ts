// Strategic partners — tier-1 leads the partner section, tier-2 fills the marquee.

export type PartnerTier = "tier-1" | "tier-2";

export interface Partner {
  name: string;
  tier: PartnerTier;
  /** Path under /public/partners/ — SVG preferred, PNG fallback. */
  logo: string;
  role: string;
  url?: string;
}

export const partners: Partner[] = [
  { name: "AWS", tier: "tier-1", logo: "/partners/aws.svg", role: "Cloud infrastructure", url: "https://aws.amazon.com" },
  { name: "Tencent Cloud", tier: "tier-1", logo: "/partners/tencent-cloud.svg", role: "APAC cloud partner", url: "https://www.tencentcloud.com" },
  { name: "NVIDIA", tier: "tier-1", logo: "/partners/nvidia.svg", role: "GPU & graphics tech", url: "https://www.nvidia.com" },
  { name: "Steam", tier: "tier-1", logo: "/partners/steam.svg", role: "PC distribution", url: "https://store.steampowered.com" },
  { name: "Epic Games", tier: "tier-1", logo: "/partners/epic.svg", role: "Engine & store", url: "https://www.epicgames.com" },
  { name: "Binance", tier: "tier-1", logo: "/partners/binance.svg", role: "Web3 infrastructure", url: "https://www.binance.com" },
  { name: "Xsolla", tier: "tier-1", logo: "/partners/xsolla.svg", role: "Payments & monetization", url: "https://xsolla.com" },

  { name: "TTM Group", tier: "tier-2", logo: "/partners/ttm-group.svg", role: "Strategic partner" },
  { name: "Zlodei", tier: "tier-2", logo: "/partners/zlodei.svg", role: "Marketing & community" },
  { name: "Unigem", tier: "tier-2", logo: "/partners/unigem.svg", role: "Web3 marketplace" },
  { name: "Skyrocket Fund", tier: "tier-2", logo: "/partners/skyrocket.svg", role: "Investment partner" },
  { name: "QuillAudits", tier: "tier-2", logo: "/partners/quillaudits.svg", role: "Smart-contract audits" },
  { name: "Rayking Game", tier: "tier-2", logo: "/partners/rayking.svg", role: "Game services" },
  { name: "Allcorrect", tier: "tier-2", logo: "/partners/allcorrect.svg", role: "Localization" },
  { name: "Crowe", tier: "tier-2", logo: "/partners/crowe.svg", role: "Audit & advisory" },
];

export const tierOnePartners = partners.filter((p) => p.tier === "tier-1");
export const tierTwoPartners = partners.filter((p) => p.tier === "tier-2");
