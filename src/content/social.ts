// RedPad Games — community channels.
// Used by SocialIcons (footer + CTA section).

export type SocialIconName =
  | "discord"
  | "twitter"
  | "instagram"
  | "youtube"
  | "twitch"
  | "tiktok"
  | "telegram"
  | "reddit"
  | "facebook";

export interface Social {
  name: string;
  url: string;
  icon: SocialIconName;
}

export const social: Social[] = [
  { name: "Discord", url: "https://discord.gg/rbh3eEV8Ka", icon: "discord" },
  { name: "Twitter", url: "https://www.twitter.com/redpadgames", icon: "twitter" },
  { name: "Instagram", url: "https://www.instagram.com/redpadgames", icon: "instagram" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCSEFCAVeKJamyqm0yNG1GGg/", icon: "youtube" },
  { name: "Twitch", url: "https://www.twitch.tv/redpadgames", icon: "twitch" },
  { name: "TikTok", url: "https://vm.tiktok.com/ZSd2bXPLM/", icon: "tiktok" },
  { name: "Telegram", url: "https://t.me/redpadgames", icon: "telegram" },
  { name: "Reddit", url: "https://www.reddit.com/r/redpadgames/", icon: "reddit" },
  { name: "Facebook", url: "https://www.facebook.com/Redpadgames/", icon: "facebook" },
];
