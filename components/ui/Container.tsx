import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Narrow container for text-led sections. */
  size?: "default" | "narrow";
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  const width = size === "narrow" ? "max-w-4xl" : "max-w-[1200px]";
  return (
    <div className={`mx-auto w-full ${width} px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
