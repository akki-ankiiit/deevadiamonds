import { imageSet } from "../../data/media";

/**
 * Responsive AVIF/WebP picture. `sizes` should describe the rendered width.
 * Set `priority` for above-the-fold imagery.
 */
export default function Picture({
  slug,
  sizes = "100vw",
  priority = false,
  className = "",
  imgClassName = "",
  focus,
  alt,
  ...rest
}) {
  const img = imageSet(slug);
  return (
    <picture className={className}>
      <source type="image/avif" srcSet={img.avif} sizes={sizes} />
      <source type="image/webp" srcSet={img.webp} sizes={sizes} />
      <img
        src={img.src}
        alt={alt ?? img.alt}
        width={img.w}
        height={img.h}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        className={imgClassName}
        style={{ objectPosition: focus ?? img.focus }}
        {...rest}
      />
    </picture>
  );
}
