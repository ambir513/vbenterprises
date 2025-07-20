import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "me7aitdbxq.ufs.sh",
      "picsum.photos",
      "res-console.cloudinary.com",
      "res.cloudinary.com",
      "i.pinimg.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
