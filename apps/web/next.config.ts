import type { NextConfig } from "next";

/** Next.js 16+ blocks optimizer fetches to private IPs (localhost → 127.0.0.1) unless this is set. */
const allowLocalStrapiImages =
  process.env.NODE_ENV === "development" ||
  process.env.STRAPI_IMAGES_ALLOW_LOCAL_IP === "true";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: allowLocalStrapiImages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
