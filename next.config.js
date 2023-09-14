/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "andorrabloggen.onrender.com",
        port: "41985",
      },
    ],
  },
};

module.exports = nextConfig;
