// Pre-computed SVG paths to minimize runtime calculations
const layers = [
  { h: "60vh", op: 0.3, p: ["M0,500 L0,450 Q200,420 400,430 T800,425 T1200,420 L1200,500 Z"], f: "rgba(41,37,36,.6)" },
  { h: "55vh", op: 0.55, p: ["M0,500 L0,400 Q150,380 200,390 T400,385 T600,390 T800,385 T1000,390 T1200,380 L1200,500 Z", "M-50,500 L-50,420 Q100,400 180,410 T380,405 T580,410 T780,405 T980,410 T1180,400 L1200,410 L1200,500 Z", "M20,500 L20,415 Q130,395 190,405 T390,400 T590,405 T790,400 T990,405 T1190,395 L1200,400 L1200,500 Z"], g: "g1", c: ["rgba(120,53,15,.7)", "rgba(69,26,3,.6)", "rgba(28,25,23,.9)"] },
  { h: "45vh", op: 0.7, p: ["M0,400 L0,360 Q100,350 160,360 T320,355 T480,360 T640,350 T800,360 T960,355 T1120,360 L1200,350 L1200,400 Z", "M40,400 L40,370 Q120,365 200,370 T360,368 T520,370 T680,365 T840,370 T1000,368 T1160,370 L1200,365 L1200,400 Z", "M80,400 L80,375 Q150,372 230,375 T400,373 T560,375 T720,372 T880,375 T1040,373 T1200,372 L1200,400 Z", "M-20,400 L-20,365 Q90,358 170,365 T340,362 T500,365 T660,360 T820,365 T980,362 T1140,365 L1200,360 L1200,400 Z"], g: "g2", c: ["rgba(180,83,9,.6)", "rgba(120,53,15,.5)", "rgba(41,37,36,.8)"] },
  { h: "40vh", op: 0.8, p: ["M0,400 L0,380 Q80,375 140,380 T280,378 T420,380 T560,375 T700,380 T840,378 T980,380 T1120,375 L1200,380 L1200,400 Z", "M20,400 L20,385 Q90,382 160,385 T300,383 T440,385 T580,382 T720,385 T860,383 T1000,385 T1140,382 L1200,385 L1200,400 Z", "M60,400 L60,388 Q130,386 200,388 T340,387 T480,388 T620,386 T760,388 T900,387 T1040,388 T1180,386 L1200,388 L1200,400 Z", "M-30,400 L-30,390 Q50,388 120,390 T260,389 T400,390 T540,388 T680,390 T820,389 T960,390 T1100,388 L1200,390 L1200,400 Z", "M10,400 L10,392 Q70,390 140,392 T280,391 T420,392 T560,390 T700,392 T840,391 T980,392 T1120,390 L1200,392 L1200,400 Z"], g: "g3", c: ["rgba(217,119,6,.5)", "rgba(180,83,9,.45)", "rgba(28,25,23,.7)"] }
];

const branches = [
  { x: "right-0", w: 80, p: ["M200,0 Q180,30 170,60 T160,100 T155,140 T152,170", "M190,20 Q175,45 168,70 T162,110 T158,145", "M195,10 Q182,35 174,65 T165,105 T160,140"] },
  { x: "left-0", w: 64, p: ["M0,0 Q20,25 30,50 T40,90 T42,130 T43,160", "M10,20 Q25,40 32,65 T38,105 T40,140", "M5,10 Q18,30 28,55 T36,95 T39,130"] }
];

const r = (s: number) => { const x = Math.sin(s) * 10000; return x - Math.floor(x); };

export function BackgroundAnimations() {
  const base = "absolute inset-0";
  const ctn = { contain: 'layout style paint', transform: 'translateZ(0)' };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className={`${base} bg-gradient-to-b from-black via-slate-950 to-neutral-900`} />
        <div className={`${base} bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-950/25 via-transparent to-transparent`} />
        <div className={`${base} bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent`} />
        <div className={`${base} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-950/40 via-transparent to-transparent`} />
        <div className="absolute bottom-0 left-0 right-0 h-[65vh] bg-gradient-to-t from-amber-900/18 via-amber-950/8 to-transparent" />

        {layers.map((l, i) => (
          <div key={i} className="absolute bottom-0 left-0 right-0" style={{ height: l.h, opacity: l.op }}>
            <svg className="absolute bottom-0 w-full h-full" viewBox={i ? "0 0 1200 400" : "0 0 1200 500"} preserveAspectRatio="none">
              {l.p.map((d, j) => <path key={j} d={d} fill={l.g ? `url(#${l.g})` : l.f} />)}
              {l.g && <defs><linearGradient id={l.g} x1="0%" y1="0%" x2="0%" y2="100%">
                {l.c.map((c, k) => <stop key={k} offset={`${k * 50}%`} stopColor={c} />)}
              </linearGradient></defs>}
            </svg>
          </div>
        ))}

        {branches.map((b, i) => (
          <div key={i} className={`absolute top-0 ${b.x} opacity-15`} style={{ width: b.w, height: b.w }}>
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {b.p.map((d, j) => <path key={j} d={d} stroke={["rgba(180,83,9,.5)", "rgba(120,53,15,.4)", "rgba(217,119,6,.3)"][j]} strokeWidth={[2.5, 2, 1.5][j]} fill="none" />)}
            </svg>
          </div>
        ))}
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden style={ctn}>
        {Array.from({ length: 30 }, (_, i) => {
          const sz = 1.5 + (i % 3) * 0.5;
          const op = 0.4 + (i % 3) * 0.2;
          return <span key={i} className="absolute rounded-full bg-amber-400 animate-float" style={{
            top: `${(i * 47) % 300}vh`, left: `${(i * 23 + 5) % 95}vw`, width: sz, height: sz, opacity: op,
            animationDelay: `${i * 0.3}s`, animationDuration: `${3.5 + (i % 4) * 1.5}s`,
            boxShadow: `0 0 ${sz * 1.5}px rgba(251,191,36,${op * 0.5})`,
            transform: 'translateZ(0)', willChange: 'transform, opacity'
          }} />;
        })}
      </div>

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden style={ctn}>
        {Array.from({ length: 15 }, (_, i) => {
          const s1 = i * 0.618, s2 = i * 0.314, s3 = i * 0.271;
          const sz = 10 + r(s1 * 2) * 18;
          const op = 0.2 + r(s2 * 3) * 0.4;
          return <div key={i} className="absolute rounded-full" style={{
            left: `${5 + r(s1) * 90}%`, top: "-8%", width: sz, height: sz,
            animationDelay: `${r(s2) * 15}s`, animationDuration: `${20 + r(s3) * 25}s`,
            animationName: ['fall-slow', 'fall-medium', 'fall-fast'][i % 3],
            animationTimingFunction: 'linear', animationIterationCount: 'infinite',
            willChange: 'transform, opacity', transform: 'translateZ(0)',
            background: `radial-gradient(circle,rgba(251,146,60,${op}) 0%,rgba(234,88,12,${op * 0.7}) 50%,rgba(194,65,12,${op * 0.3}) 100%)`,
            boxShadow: `0 0 ${sz * 0.8}px rgba(251,146,60,${op * 0.6})`
          }} />;
        })}
      </div>
    </>
  );
}