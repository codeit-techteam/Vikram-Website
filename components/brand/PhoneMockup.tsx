import Image from "next/image";
import type { AppScreen } from "@/lib/content";

type PhoneMockupProps = {
  screen: AppScreen;
  className?: string;
  priority?: boolean;
  float?: boolean;
  caption?: boolean;
  sizes?: string;
};

export function PhoneMockup({
  screen,
  className = "",
  priority = false,
  float = false,
  caption = false,
  sizes = "(max-width: 640px) 240px, 280px",
}: PhoneMockupProps) {
  return (
    <figure className={`flex flex-col items-center ${className}`}>
      <div
        className={`relative w-[220px] sm:w-[250px] lg:w-[272px] ${float ? "animate-float" : ""}`}
      >
        <div className="relative overflow-hidden rounded-[2.15rem] border-[10px] border-[#1a1d22] bg-[#1a1d22] shadow-phone">
          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-[18px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            priority={priority}
            sizes={sizes}
            className="block h-auto w-full"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center">
          <p className="text-sm font-semibold text-ink">{screen.caption}</p>
          <p className="mt-1 max-w-[240px] text-xs leading-relaxed text-muted">{screen.description}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
