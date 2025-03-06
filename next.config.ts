import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/simpson-2025-production' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add assetPrefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/simpson-2025-production' : '',
};

export default nextConfig;
