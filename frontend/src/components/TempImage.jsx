export const TempImage = ({
  asset,
  className = "",
  imgClass = "",
  eager = false,
  label = true,
}) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img
      src={asset.src}
      alt={asset.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`h-full w-full object-cover ${imgClass}`}
    />
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
