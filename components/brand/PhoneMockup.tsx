import Image from "next/image";
import type { AppScreen } from "@/lib/content";

type Size = "sm" | "md" | "lg";

type PhoneMockupProps = {
  screen: AppScreen;
  className?: string;
  preload?: boolean;
  float?: boolean;
  caption?: boolean;
  size?: Size;
  sizes?: string;
};

const widths: Record<Size, string> = {
  sm: "w-[180px] sm:w-[200px] lg:w-[220px]",
  md: "w-[220px] sm:w-[250px] lg:w-[272px]",
  lg: "w-[250px] sm:w-[280px] lg:w-[310px]",
};

export function PhoneMockup({
  screen,
  className = "",
  preload = false,
  float = false,
  caption = false,
  size = "md",
  sizes = "(max-width: 640px) 250px, 320px",
}: PhoneMockupProps) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div className={`relative ${widths[size]} ${float ? "animate-float" : ""}`}>
        <span className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l bg-[#2a2e35]" />
        <span className="absolute -left-[3px] top-[27%] h-12 w-[3px] rounded-l bg-[#2a2e35]" />
        <span className="absolute -right-[3px] top-[22%] h-16 w-[3px] rounded-r bg-[#2a2e35]" />

        <div className="phone-frame relative rounded-[2.6rem] p-[7px] shadow-phone">
          <div className="relative overflow-hidden rounded-[2.15rem] bg-[#f4f4f4]">
            <div className="relative flex h-7 items-center justify-between px-6 text-[10px] font-semibold text-ink">
              <span>9:41</span>
              <span className="absolute left-1/2 top-1.5 h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="flex items-end gap-[1.5px]">
                  <span className="h-[4px] w-[2.5px] rounded-sm bg-ink" />
                  <span className="h-[6px] w-[2.5px] rounded-sm bg-ink" />
                  <span className="h-[8px] w-[2.5px] rounded-sm bg-ink" />
                </span>
                <span className="relative h-[8px] w-[16px] rounded-[3px] border border-ink/70 p-[1px]">
                  <span className="block h-full w-3/4 rounded-[1px] bg-ink" />
                </span>
              </span>
            </div>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.width}
              height={screen.height}
              preload={preload}
              sizes={sizes}
              className="block h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.18)_0%,transparent_28%,transparent_100%)]" />
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-5 text-center">
          <p className="text-sm font-semibold text-ink">{screen.caption}</p>
          <p className="mt-1 max-w-[250px] text-xs leading-relaxed text-muted">{screen.description}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
