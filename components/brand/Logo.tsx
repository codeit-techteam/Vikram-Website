type LogoProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

export function Logo({ className = "", compact = false, inverted = false }: LogoProps) {
  const wordmark = inverted ? "text-white" : "text-ink";
  const size = compact ? "h-8 w-8" : "h-9 w-9";
  const text = compact ? "text-[15px]" : "text-lg";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative ${size} shrink-0`} aria-hidden="true">
        <svg viewBox="0 0 40 40" className="h-full w-full" fill="none">
          <rect width="40" height="40" rx="10" fill="#F5B301" />
          <path
            d="M10 28.5V16.8L20 11l10 5.8v11.7l-10 5.8-10-5.8Z"
            fill="#14161A"
            fillOpacity="0.92"
          />
          <path
            d="M20 11v23.3M10 16.8l10 5.8 10-5.8"
            stroke="#F5B301"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="22.6" r="2.4" fill="#F5B301" />
        </svg>
      </span>
      <span className={`font-bold tracking-tight ${text} ${wordmark}`}>Bajriwala</span>
    </span>
  );
}
