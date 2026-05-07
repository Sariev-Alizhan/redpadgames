import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-display tracking-tight whitespace-nowrap rounded-md transition-colors duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-text hover:bg-accent-hot",
  ghost: "bg-transparent text-text hover:bg-surface",
  outline:
    "bg-transparent text-text border border-divider hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-body-sm",
  md: "h-10 px-4 text-body-md",
  lg: "h-12 px-6 text-body-lg",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

/** ButtonLink — same visual variants, rendered as a Next.js <Link>.
 *  Use for navigation; use Button for actions. */
export interface ButtonLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "className"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "primary", size = "md", external, children, ...props }, ref) => (
    <Link
      ref={ref}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {children}
    </Link>
  ),
);
ButtonLink.displayName = "ButtonLink";
