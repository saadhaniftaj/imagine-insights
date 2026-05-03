import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/imagine-insights",
  assetPrefix: "/imagine-insights/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
