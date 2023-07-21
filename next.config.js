/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/integrador",
  assetPrefix: "/integrador",
  images: {
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
