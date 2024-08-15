import { Manrope } from "next/font/google";
import React from "react";
import Link from "next/link";

const manrope = Manrope({ subsets: ["latin"] });

interface Props {
  as?: "span" | "div" | "h1" | "h2" | "h3" | "p" | "a" | "link";
  href?: string; // for Link component
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "xxl";
  weight?: "thin" | "base" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  as = "span",
  href,
  size = "base",
  weight = "base",
  className = "",
  ...props
}: Props) {
  const sizeClasses = {
    xs: "text-xs md:text-sm xl:text-base",
    sm: "text-sm md:text-base xl:text-lg",
    base: "text-base md:text-lg xl:text-xl",
    md: "text-lg md:text-xl lg:text-2xl 2xl:text-3xl",
    lg: "text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl",
    xl: "text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl",
    xxl: "text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl",
  };

  const weightClasses = {
    thin: "font-thin",
    base: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const fontClass =
    as === "h1" || as === "h2" || as === "h3"
      ? manrope.className
      : manrope.className;

  const classNames = `${sizeClasses[size]} ${weightClasses[weight]} ${fontClass} ${className}`;

  if (as === "link" && href) {
    return (
      <Link href={href} {...props} className={classNames}>
        {children}
      </Link>
    );
  }

  const Component = as === "link" ? "a" : as;

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
