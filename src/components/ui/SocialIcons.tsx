import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaTiktok,
  FaTelegram,
  FaReddit,
  FaFacebook,
} from "react-icons/fa6";
import { social, type SocialIconName } from "@/content/social";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialIconName, React.ComponentType<{ size?: number }>> = {
  discord: FaDiscord,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  twitch: FaTwitch,
  tiktok: FaTiktok,
  telegram: FaTelegram,
  reddit: FaReddit,
  facebook: FaFacebook,
};

interface SocialIconsProps {
  size?: number;
  className?: string;
  /** Pass to make individual buttons larger (CTA section variant). */
  variant?: "default" | "lg";
}

export function SocialIcons({
  size = 18,
  className,
  variant = "default",
}: SocialIconsProps) {
  const buttonSize =
    variant === "lg" ? "size-12" : "size-10";

  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {social.map((s) => {
        const Icon = iconMap[s.icon];
        return (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              data-cursor="hover"
              className={cn(
                "group flex items-center justify-center rounded-full border border-divider text-text-muted transition-all duration-300",
                "hover:border-accent hover:bg-accent/10 hover:text-accent",
                buttonSize,
              )}
            >
              <Icon size={variant === "lg" ? size + 4 : size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
