const FIREFLY_COUNT = 50; // Reduced from 80 for better performance
const EMBER_COUNT = 25;
const FIREFLIES = Array.from({ length: FIREFLY_COUNT }, (_, i) => i);
const EMBERS = Array.from({ length: EMBER_COUNT }, (_, i) => i);

const FOREST_LAYERS = [
  { h: "60vh", op: 0.3, paths: ["M0,500 L0,450 Q200,420 400,430 T800,425 T1200,420 L1200,500 Z"], fill: "rgba(41, 37, 36, 0.6)" },
  { h: "55vh", op: 0.55, paths: ["M0,500 L0,400 Q150,380 200,390 T400,385 T600,390 T800,385 T1000,390 T1200,380 L1200,500 Z", "M-50,500 L-50,420 Q100,400 180,410 T380,405 T580,410 T780,405 T980,410 T1180,400 L1200,410 L1200,500 Z", "M20,500 L20,415 Q130,395 190,405 T390,400 T590,405 T790,400 T990,405 T1190,395 L1200,400 L1200,500 Z"], grad: "g1", stops: ["rgba(120, 53, 15, 0.7)", "rgba(69, 26, 3, 0.6)", "rgba(28, 25, 23, 0.9)"] },
  { h: "45vh", op: 0.7, paths: ["M0,400 L0,360 Q100,350 160,360 T320,355 T480,360 T640,350 T800,360 T960,355 T1120,360 L1200,350 L1200,400 Z", "M40,400 L40,370 Q120,365 200,370 T360,368 T520,370 T680,365 T840,370 T1000,368 T1160,370 L1200,365 L1200,400 Z", "M80,400 L80,375 Q150,372 230,375 T400,373 T560,375 T720,372 T880,375 T1040,373 T1200,372 L1200,400 Z", "M-20,400 L-20,365 Q90,358 170,365 T340,362 T500,365 T660,360 T820,365 T980,362 T1140,365 L1200,360 L1200,400 Z"], grad: "g2", stops: ["rgba(180, 83, 9, 0.6)", "rgba(120, 53, 15, 0.5)", "rgba(41, 37, 36, 0.8)"] },
  { h: "40vh", op: 0.8, paths: ["M0,400 L0,380 Q80,375 140,380 T280,378 T420,380 T560,375 T700,380 T840,378 T980,380 T1120,375 L1200,380 L1200,400 Z", "M20,400 L20,385 Q90,382 160,385 T300,383 T440,385 T580,382 T720,385 T860,383 T1000,385 T1140,382 L1200,385 L1200,400 Z", "M60,400 L60,388 Q130,386 200,388 T340,387 T480,388 T620,386 T760,388 T900,387 T1040,388 T1180,386 L1200,388 L1200,400 Z", "M-30,400 L-30,390 Q50,388 120,390 T260,389 T400,390 T540,388 T680,390 T820,389 T960,390 T1100,388 L1200,390 L1200,400 Z", "M10,400 L10,392 Q70,390 140,392 T280,391 T420,392 T560,390 T700,392 T840,391 T980,392 T1120,390 L1200,392 L1200,400 Z"], grad: "g3", stops: ["rgba(217, 119, 6, 0.5)", "rgba(180, 83, 9, 0.45)", "rgba(28, 25, 23, 0.7)"] }
];

const BRANCHES = [
  { pos: "right", size: 80, paths: ["M200,0 Q180,30 170,60 T160,100 T155,140 T152,170", "M190,20 Q175,45 168,70 T162,110 T158,145", "M195,10 Q182,35 174,65 T165,105 T160,140"] },
  { pos: "left", size: 64, paths: ["M0,0 Q20,25 30,50 T40,90 T42,130 T43,160", "M10,20 Q25,40 32,65 T38,105 T40,140", "M5,10 Q18,30 28,55 T36,95 T39,130"] }
];

export function BackgroundAnimations() {
  return (
    <>
      <BackgroundGradient />
      <Fireflies />
      <FloatingEmbers />
    </>
  );
}

function BackgroundGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-950/25 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-950/40 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[65vh] bg-gradient-to-t from-amber-900/18 via-amber-950/8 to-transparent" />
      
      {FOREST_LAYERS.map((layer, i) => {
        const hasGrad = 'grad' in layer && 'stops' in layer;
        return (
          <div key={i} className="absolute bottom-0 left-0 right-0" style={{ height: layer.h, opacity: layer.op }}>
            <svg className="absolute bottom-0 w-full h-full" viewBox={i === 0 ? "0 0 1200 500" : "0 0 1200 400"} preserveAspectRatio="none">
              {layer.paths.map((d, j) => (
                <path key={j} d={d} fill={hasGrad ? `url(#${layer.grad})` : ('fill' in layer ? layer.fill : '')} />
              ))}
              {hasGrad && layer.stops && (
                <defs>
                  <linearGradient id={layer.grad} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={layer.stops[0]} />
                    <stop offset="50%" stopColor={layer.stops[1]} />
                    <stop offset="100%" stopColor={layer.stops[2]} />
                  </linearGradient>
                </defs>
              )}
            </svg>
          </div>
        );
      })}
      
      {BRANCHES.map((b, i) => (
        <div key={i} className={`absolute top-0 ${b.pos === 'right' ? 'right-0' : 'left-0'} opacity-15`} style={{ width: `${b.size}px`, height: `${b.size}px` }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {b.paths.map((d, j) => (
              <path key={j} d={d} stroke={j === 0 ? "rgba(180, 83, 9, 0.5)" : j === 1 ? "rgba(120, 53, 15, 0.4)" : "rgba(217, 119, 6, 0.3)"} strokeWidth={j === 0 ? 2.5 : j === 1 ? 2 : 1.5} fill="none" />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
}

function Fireflies() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden style={{ contain: 'layout style paint' }}>
      {FIREFLIES.map((i) => {
        const size = 1.5 + (i % 3) * 0.5;
        const opacity = 0.4 + (i % 3) * 0.2;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-amber-400 animate-float"
            style={{
              top: `${(i * 47) % 300}vh`,
              left: `${(i * 23 + 5) % 95}vw`,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3.5 + (i % 4) * 1.5}s`,
              boxShadow: `0 0 ${size * 2}px rgba(251, 191, 36, ${opacity * 0.6})`,
            }}
          />
        );
      })}
    </div>
  );
}

const random = (s: number) => {
  const x = Math.sin(s) * 10000;
  return x - Math.floor(x);
};

function FloatingEmbers() {
  const animations = EMBERS.map((i) => {
    const s1 = i * 0.618, s2 = i * 0.314, s3 = i * 0.271, s4 = i * 0.141;
    const drift = (random(s1 * 5) - 0.5) * 30;
    const rot = random(s3 * 4) * 360;
    const rotEnd = rot + 180 + random(s4 * 5) * 360;
    return `@keyframes fall-${i}{0%{transform:translateY(0) translateX(0) rotate(${rot}deg);opacity:0}5%{opacity:0.5}50%{transform:translateY(100vh) translateX(${drift * 0.5}px) rotate(${rot + (rotEnd - rot) * 0.5}deg);opacity:0.4}100%{transform:translateY(200vh) translateX(${drift}px) rotate(${rotEnd}deg);opacity:0}}`;
  }).join('');

  return (
    <>
      <style>{animations}</style>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden style={{ contain: 'layout style paint' }}>
        {EMBERS.map((i) => {
          const s1 = i * 0.618, s2 = i * 0.314, s3 = i * 0.271;
          const left = `${5 + random(s1) * 90}%`;
          const delay = random(s2) * 15;
          const duration = 18 + random(s3) * 30;
          const size = 12 + random(s1 * 2) * 20;
          const opacity = 0.2 + random(s2 * 3) * 0.5;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left, top: "-8%", width: `${size}px`, height: `${size}px`,
                animationDelay: `${delay}s`, animationDuration: `${duration}s`,
                animationName: `fall-${i}`, animationTimingFunction: 'linear',
                animationIterationCount: 'infinite', willChange: 'transform, opacity',
                background: `radial-gradient(circle, rgba(251, 146, 60, ${opacity}) 0%, rgba(234, 88, 12, ${opacity * 0.8}) 50%, rgba(194, 65, 12, ${opacity * 0.4}) 100%)`,
                boxShadow: `0 0 ${size * 1.2}px rgba(251, 146, 60, ${opacity * 0.8}), 0 0 ${size * 2.4}px rgba(234, 88, 12, ${opacity * 0.4})`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
