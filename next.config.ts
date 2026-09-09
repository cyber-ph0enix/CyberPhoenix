import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow access over LAN for testing */
  allowedDevOrigins: [
    "http://192.168.29.236:3000",
    "http://192.168.29.236",
    "192.168.29.236"
  ],
  // Wait, Next 15 might prefer specific origin strings or hostnames.
  // The error says: add it to "allowedDevOrigins" in next.config.js:
  // allowedDevOrigins: ['192.168.29.236']
};

export default nextConfig;
