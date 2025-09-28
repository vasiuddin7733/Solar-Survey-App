import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/Solar-Survey-App" : "",
  assetPrefix: isProd ? "/Solar-Survey-App/" : "",
};

export default nextConfig;
