const FIREFLY_COUNT = 80;
const LEAF_COUNT = 18;

const FIREFLIES = Array.from({ length: FIREFLY_COUNT }, (_, index) => index);
const LEAVES = Array.from({ length: LEAF_COUNT }, (_, index) => index);

// Leaf emojis for variety
const LEAF_EMOJIS = ["🍂", "🍁", "🍃", "🌿"];

export function BackgroundAnimations() {
  return (
    <>
      <BackgroundGradient />
      <Fireflies />
      <FallingLeaves />
    </>
  );
}

function BackgroundGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      {/* Base gradient - night sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Depth layers with radial gradients - atmospheric glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-950/30 via-transparent to-transparent" />
      
      {/* Subtle fog/mist layer at horizon */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-amber-950/12 via-amber-950/6 to-transparent" />
      
      {/* Distant forest silhouette - back layer */}
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] opacity-50">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
          <path
            d="M0,500 L0,400 Q150,380 200,390 T400,385 T600,390 T800,385 T1000,390 T1200,380 L1200,500 Z"
            fill="url(#forestGradient1)"
          />
          <path
            d="M-50,500 L-50,420 Q100,400 180,410 T380,405 T580,410 T780,405 T980,410 T1180,400 L1200,410 L1200,500 Z"
            fill="url(#forestGradient1)"
          />
          <defs>
            <linearGradient id="forestGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(120, 53, 15, 0.6)" />
              <stop offset="50%" stopColor="rgba(69, 26, 3, 0.5)" />
              <stop offset="100%" stopColor="rgba(28, 25, 23, 0.8)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Middle forest layer - more defined */}
      <div className="absolute bottom-0 left-0 right-0 h-[35vh] opacity-60">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,400 L0,360 Q100,350 160,360 T320,355 T480,360 T640,350 T800,360 T960,355 T1120,360 L1200,350 L1200,400 Z"
            fill="url(#forestGradient2)"
          />
          <path
            d="M40,400 L40,370 Q120,365 200,370 T360,368 T520,370 T680,365 T840,370 T1000,368 T1160,370 L1200,365 L1200,400 Z"
            fill="url(#forestGradient2)"
          />
          <path
            d="M80,400 L80,375 Q150,372 230,375 T400,373 T560,375 T720,372 T880,375 T1040,373 T1200,372 L1200,400 Z"
            fill="url(#forestGradient2)"
          />
          <defs>
            <linearGradient id="forestGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(180, 83, 9, 0.5)" />
              <stop offset="50%" stopColor="rgba(120, 53, 15, 0.4)" />
              <stop offset="100%" stopColor="rgba(41, 37, 36, 0.7)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Foreground forest layer - most visible */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-70">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,400 L0,380 Q80,375 140,380 T280,378 T420,380 T560,375 T700,380 T840,378 T980,380 T1120,375 L1200,380 L1200,400 Z"
            fill="url(#forestGradient3)"
          />
          <path
            d="M20,400 L20,385 Q90,382 160,385 T300,383 T440,385 T580,382 T720,385 T860,383 T1000,385 T1140,382 L1200,385 L1200,400 Z"
            fill="url(#forestGradient3)"
          />
          <path
            d="M60,400 L60,388 Q130,386 200,388 T340,387 T480,388 T620,386 T760,388 T900,387 T1040,388 T1180,386 L1200,388 L1200,400 Z"
            fill="url(#forestGradient3)"
          />
          <path
            d="M-30,400 L-30,390 Q50,388 120,390 T260,389 T400,390 T540,388 T680,390 T820,389 T960,390 T1100,388 L1200,390 L1200,400 Z"
            fill="url(#forestGradient3)"
          />
          <defs>
            <linearGradient id="forestGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(217, 119, 6, 0.4)" />
              <stop offset="50%" stopColor="rgba(180, 83, 9, 0.35)" />
              <stop offset="100%" stopColor="rgba(28, 25, 23, 0.6)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Subtle tree branch silhouettes in corners for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M200,0 Q180,30 170,60 T160,100 T155,140"
            stroke="rgba(180, 83, 9, 0.4)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M190,20 Q175,45 168,70 T162,110"
            stroke="rgba(120, 53, 15, 0.3)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M0,0 Q20,25 30,50 T40,90 T42,130"
            stroke="rgba(180, 83, 9, 0.4)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M10,20 Q25,40 32,65 T38,105"
            stroke="rgba(120, 53, 15, 0.3)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

function Fireflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {FIREFLIES.map((index) => {
        // Distribute across scrollable height (assuming ~300vh max)
        const scrollHeight = 300;
        const top = `${(index * 47) % scrollHeight}vh`;
        const left = `${(index * 23 + 5) % 95}vw`;
        const size = 1.5 + (index % 3) * 0.5; // 1.5px to 3px
        const opacity = 0.4 + (index % 3) * 0.2; // 0.4 to 0.8
        const delay = index * 0.3;
        const duration = 3.5 + (index % 4) * 1.5; // 3.5s to 8s
        
        return (
          <span
            key={`firefly-${index}`}
            className="absolute rounded-full bg-amber-400 animate-float"
            style={{
              top,
              left,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: `0 0 ${size * 2}px rgba(251, 191, 36, ${opacity * 0.6})`,
            }}
          />
        );
      })}
    </div>
  );
}

function FallingLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {LEAVES.map((index) => {
        const left = `${(index * 19 + 8) % 88}%`;
        const delay = index * 1.8;
        const duration = 20 + (index % 8) * 4; // 20s to 48s
        const size = 14 + (index % 4) * 6; // 14px to 32px
        const emoji = LEAF_EMOJIS[index % LEAF_EMOJIS.length];
        const rotation = (index % 3) * 120; // 0°, 120°, 240°
        
        return (
          <div
            key={`leaf-${index}`}
            className="absolute text-amber-700/30 animate-fall"
            style={{
              left,
              top: "-8%",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}