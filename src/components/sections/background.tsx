const FIREFLY_COUNT = 60;
const LEAF_COUNT = 12;

const FIREFLIES = Array.from({ length: FIREFLY_COUNT }, (_, index) => index);
const LEAVES = Array.from({ length: LEAF_COUNT }, (_, index) => index);

export function BackgroundAnimations() {
  return (
    <>
      <Fireflies />
      <FallingLeaves />
    </>
  );
}

function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {FIREFLIES.map((index) => (
        <span
          key={`firefly-${index}`}
          className="absolute h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-amber-400/60 animate-float"
          style={{
            // use document-space Y so more fireflies appear as you scroll
            top: `${(index * 80) % 2400}px`,
            left: `${(index * 37) % 100}vw`,
            animationDelay: `${index * 0.4}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}

function FallingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {LEAVES.map((index) => (
        <div
          key={`leaf-${index}`}
          className="absolute text-amber-700/25 animate-fall"
          style={{
            left: `${(index * 23 + 10) % 90}%`,
            top: "-5%",
            animationDelay: `${index * 2}s`,
            animationDuration: `${25 + (index % 10) * 3}s`,
            fontSize: `${12 + (index % 3) * 4}px`,
          }}
        >
          🍂
        </div>
      ))}
    </div>
  );
}