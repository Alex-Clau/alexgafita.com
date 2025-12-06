import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundAnimations } from "@/components/layout/background";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-black text-foreground">
      <BackgroundAnimations />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-8xl sm:text-9xl font-bold text-amber-600/80 mb-4">404</h1>
          <p className="text-xl sm:text-2xl text-stone-300 mb-2">Page Not Found</p>
          <p className="text-sm sm:text-base text-stone-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-500 hover:to-amber-600"
        >
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}

