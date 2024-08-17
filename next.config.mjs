/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/manage_blog",
        destination: "/blog/manage", // Adjust this path according to your file structure
      },
    ];
  },
};

export default nextConfig;
