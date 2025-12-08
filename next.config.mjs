/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // PENTING: Ini agar jadi HTML statis
  images: {
    unoptimized: true, // PENTING: Agar gambar muncul di hosting biasa
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
