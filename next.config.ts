import type { NextConfig } from "next";

const repo = "infera-web";

// Para Pages normalmente se sirve como https://<org>.github.io/<repo>/
// Si luego usás dominio propio, seteás NEXT_PUBLIC_BASE_PATH="".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
