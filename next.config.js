/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "brilliant-capybara-281.convex.cloud",
      },
      {
        hostname: "brilliant-capybara-281.convex.cloud",
      },
    ],
    unoptimized:true
  },
};

module.exports = nextConfig;
