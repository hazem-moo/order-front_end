import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-excellence-874ec7ebe1.media.strapiapp.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
