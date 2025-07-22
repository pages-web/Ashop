/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**.erxes.io",
      },
      {
        protocol: "https",
        hostname: "erxes.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://ashop.app.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "wss://tsolo.api.erxes.io/api/graphql",
    NEXT_PUBLIC_POS_TOKEN: "XcqxAS21GsYLkESgRseWvY0iQff4yY1A",
    NEXT_PUBLIC_CP_ID: "Piu9ED_K8IoswK0-UormO",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkVjb21tZXJjZSIsImNyZWF0ZWRBdCI6IjIwMjUtMDYtMTJUMTA6MDc6MDYuMTY1WiIsInVzZXJHcm91cElkIjoiTUp0ajVrREFGbG1Ub1k0OWNCZFl5IiwiZXhwaXJlRGF0ZSI6IjIwMjUtMDctMTdUMTU6MTQ6MTYuODc0WiIsIm5vRXhwaXJlIjp0cnVlLCJhbGxvd0FsbFBlcm1pc3Npb24iOmZhbHNlLCJfaWQiOiJfNGlTTHpqd3ZuamRMejVHYnh4ZXEiLCJfX3YiOjB9LCJpYXQiOjE3NTAxNzMyODd9.0zbV2Sd26925AGSpP7jJvHrD2kyZHkPKu5zWwT0eOKo",
  },
};

module.exports = nextConfig;
