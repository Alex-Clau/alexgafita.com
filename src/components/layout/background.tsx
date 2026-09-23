// Ambient Nord background: soft frost glow (CSS only)

export function BackgroundAnimations() {
  return (
    <div className="site-atmosphere pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="site-atmosphere__base" />
      <div className="site-atmosphere__mesh" />
    </div>
  );
}
