// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript:
//   {ignoreBuildErrors:true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores eslint errors during production build
  },
};

export default nextConfig;
