import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Gafița - Software Engineer & Computer Science Student",
  description: "Software Engineer specializing in backend development, scalable APIs, data workflows, and cloud infrastructure. React, Node.js, TypeScript, AWS.",
  keywords: ["Software Engineer", "Backend Developer", "React", "Node.js", "TypeScript", "AWS", "Portfolio", "Computer Science"],
  authors: [{ name: "Alex Gafița", url: "https://alexgafita.com" }],
  creator: "Alex Gafița",
  openGraph: {
    title: "Alex Gafița - Software Engineer",
    description: "Software Engineer specializing in backend development, scalable APIs, data workflows, and cloud infrastructure.",
    type: "website",
    url: "https://alexgafita.com",
    siteName: "Alex Gafița Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Gafița - Software Engineer",
    description: "Software Engineer specializing in backend development and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
