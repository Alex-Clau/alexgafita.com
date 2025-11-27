export function BackgroundVines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-60"
      aria-hidden="true"
    >
      <div className="vine-orb top-[-10%] left-[-10%] size-[28rem]" />
      <div className="vine-orb bottom-[-20%] right-[-10%] size-[32rem] delay-[4s]" />
      <div className="vine-trail top-10 left-1/2 hidden h-[120%] w-px -translate-x-1/2 md:block" />
    </div>
  );
}


