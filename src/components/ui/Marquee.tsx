import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Pause animation on hover. Default true. */
  pauseOnHover?: boolean;
  /** Reverse direction. */
  reverse?: boolean;
}

/**
 * Pure-CSS infinite horizontal marquee. Children are rendered twice
 * so the translateX(-50%) loop is seamless. Use for partner logo walls,
 * scrolling press quotes, etc.
 */
export function Marquee({
  className,
  pauseOnHover = true,
  reverse = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "flex w-max gap-12 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  );
}
