/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
        pathname: "/output=format:jpg/**",
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
