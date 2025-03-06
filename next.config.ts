import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/simpson-2025-production' : '',
  output: 'export',
};

export default nextConfig;
