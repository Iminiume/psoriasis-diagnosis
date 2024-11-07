/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "188.121.106.125",
        pathname: "/api/get_image/**",
      },
      {
        protocol: "https",
        hostname: "hamyarpsoriasis.ir",
        pathname: "/api/get_image/**",
      },
    ],
  },
};

module.exports = nextConfig;
