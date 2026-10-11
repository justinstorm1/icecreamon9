import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Keep links to the old Microweber site working.
  redirects() {
    return [
      { source: "/about-us", destination: "/#about", permanent: true },
      { source: "/contact-us", destination: "/#visit", permanent: true },
      {
        source: "/cakes-and-novelties",
        destination: "/cakes",
        permanent: true,
      },
      { source: "/home", destination: "/", permanent: true },
    ]
  },
}

export default nextConfig
