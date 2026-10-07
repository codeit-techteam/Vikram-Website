import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

const LOGO_WIDTH = 536;
const LOGO_HEIGHT = 201;

export function Logo({ className = "", compact = false, inverted = false }: LogoProps) {
  const src = inverted ? "/brand/bajriwala-logo-on-dark.png" : "/brand/bajriwala-logo-on-light.png";
  const size = compact ? "h-8" : "h-10";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Bajriwala"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        loading={inverted ? "lazy" : "eager"}
        sizes="120px"
        className={`${size} w-auto transition-[height] duration-300`}
      />
    </span>
  );
}
