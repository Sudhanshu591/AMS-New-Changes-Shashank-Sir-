/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The design still references the original Framer CDN for imagery.
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
    ],
  },
};

export default nextConfig;
