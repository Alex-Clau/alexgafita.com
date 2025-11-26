import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // tells next.js to generate static html
  images: {
    unoptimized: true // required: S3 cannot resize images on the fly like Vercel
  },
  trailingSlash: true // clean up html output
};

export default nextConfig;
