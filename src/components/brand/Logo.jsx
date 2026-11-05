const LOCKUPS = {
  horizontal: { width: 1961, height: 774, gold: "/brand/deeva-horizontal-gold.svg", green: "/brand/deeva-horizontal-green.svg" },
  stacked: { width: 1663, height: 1123, gold: "/brand/deeva-stacked-gold.svg", green: "/brand/deeva-stacked-green.svg" },
};

/** The official DEEVA emblem, rendered as a mask so it takes the current text colour. */
export function Emblem({ className = "" }) {
  return <span className={`emblem ${className}`} aria-hidden="true" />;
}

/**
 * Official DEEVA lockups, used unaltered.
 * - variant "inline": horizontal lockup for headers.
 * - variant "stacked": emblem above wordmark, for footers and feature panels.
 * - tone "gold" on forest green, "green" on ivory.
 */
export default function Logo({ variant = "inline", tone = "gold", className = "" }) {
  const lockup = LOCKUPS[variant === "stacked" ? "stacked" : "horizontal"];
  return (
    <img
      className={`logo logo--${variant} ${className}`}
      src={lockup[tone]}
      width={lockup.width}
      height={lockup.height}
      alt="DEEVA, Lab Grown Diamond"
    />
  );
}
