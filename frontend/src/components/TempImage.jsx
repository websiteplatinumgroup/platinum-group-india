export const TempImage = ({
  asset,
  className = "",
  label = true,
}) => (
  <div
    className={`relative overflow-hidden border border-white/5 bg-ink2 ${className}`}
    role="img"
    aria-label={asset.alt}
  >
    {label && (
      <span
        data-testid="temp-asset-tag"
        className="absolute bottom-3 left-3 z-10 border border-eglow/40 bg-ink/85 px-2 py-1 font-mono text-[9px] tracking-[0.2em] text-eglow"
      >
        TEMP ASSET · {asset.need}
      </span>
    )}
  </div>
);
