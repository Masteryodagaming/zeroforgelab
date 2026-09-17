type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <div className={`logo-frame inline-flex items-center justify-center ${className}`}>
      {/* Transparent PNG cropped from logo.jpeg — green felt removed */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="ZeroForge"
        width={1137}
        height={258}
        className="h-auto w-full max-w-full object-contain"
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </div>
  );
}
