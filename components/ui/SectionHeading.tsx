import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const bodyColor = tone === "dark" ? "text-white/70" : "text-muted";
  const eyebrowColor = tone === "dark" ? "text-brand-300" : "text-brand-700";

  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <span
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${bodyColor}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
