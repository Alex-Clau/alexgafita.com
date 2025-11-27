'use client';

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
  
    <section className="relative flex min-h-[90vh] items-center justify-center px-4 py-16 md:py-24">

      {/* 2. Constrained Width (Half Screen) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-2xl relative z-10" // TIGHTER: max-w-2xl for balanced width
      >
        <Card className="
          border border-amber-900/20
          bg-black/40
          backdrop-blur-xl
          rounded-2xl
          shadow-2xl shadow-amber-950/50
          overflow-hidden
        ">
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-stone-950/20 pointer-events-none" />

          <CardHeader className="relative p-8">
            {/* Header: Horizontal layout for desktop, stacked for mobile */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative flex-shrink-0"
              >
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600/20 to-amber-900/20 blur-xl" />
                  <Image
                    src="/profil.jpeg"
                    alt="Profile"
                    width={144}
                    height={144}
                    className="relative rounded-full object-cover border-2 border-amber-900/30"
                  />
                </div>
              </motion.div>

              {/* 3. Text Content + Skills (Integrated) */}
              <div className="flex-1 text-center md:text-left pt-2">
                <CardTitle className="text-3xl font-bold tracking-tight text-stone-50 mb-1">
                  Gafița Claudiu-Alexandru
                </CardTitle>
                <CardDescription className="text-base text-amber-400/90 font-medium">
                  Software Engineer · Computer Science Student
                </CardDescription>

                {/* Skills Badges (Moved up for density) */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-3">
                  <span className="rounded-full border border-amber-800/50 bg-amber-950/40 px-3 py-1 text-[11px] text-amber-300 font-medium">
                    React / Node.js / Typescript
                  </span>
                  <span className="rounded-full border border-stone-800/40 bg-stone-900/20 px-3 py-1 text-[11px] text-stone-400/80 font-medium">
                    AWS · Databases · Firebase
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative p-8 pt-4 border-t border-stone-800/50">

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-500 hover:to-amber-600 font-semibold shadow-lg shadow-amber-900/50 px-8"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-amber-700/50 bg-amber-800/60  text-white hover:text-amber-500 hover:border-amber-600 font-semibold px-8"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}