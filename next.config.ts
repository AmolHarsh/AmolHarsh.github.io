import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static HTML export for GitHub Pages (no Node server there).
  output: "export",
  // Emit /projects/index.html so the route resolves without a rewrite rule.
  trailingSlash: true,
  // Pages serves plain files; Next's on-demand image optimizer can't run.
  images: { unoptimized: true },
};

export default nextConfig;
