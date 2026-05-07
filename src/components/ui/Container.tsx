import * as React from "react";
import { cn } from "@/lib/utils";

type Width = "narrow" | "default" | "wide" | "full";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

export interface ContainerProps {
  className?: string;
  width?: Width;
  as?: React.ElementType;
  children?: React.ReactNode;
  id?: string;
  "aria-label"?: string;
}

export function Container({
  className,
  width = "default",
  as = "div",
  children,
  ...rest
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: cn("mx-auto w-full px-6 lg:px-8", widths[width], className),
      ...rest,
    },
    children,
  );
}
