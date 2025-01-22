/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**.erxes.io',
      },
      {
        protocol: 'https',
        hostname: 'erxes.io',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_MAIN_API_DOMAIN: "https://tsolo.app.erxes.io/gateway",
    NEXT_PUBLIC_WS_DOMAIN: "wss://tsolo.api.erxes.io/api/graphql",
    NEXT_PUBLIC_POS_TOKEN: "UZaEboNKWI8vcWc4hvKkOUzYSqJm2wV7",
    NEXT_PUBLIC_CP_ID: "Z1GeCHMaXEyDc5qdRg_Qs",
    // NEXT_PUBLIC_FACEBOOK_ID: "477832793072863",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IlRzb2xvIiwiY3JlYXRlZEF0IjoiMjAyNS0wMS0yMFQwMDowMTo1OC42NjdaIiwidXNlckdyb3VwSWQiOiJpQkZJU1p5cHEwUXJxVWZ5S2N4SGkiLCJleHBpcmVEYXRlIjoiMjAyNS0wMi0yMVQxMjowODoxMS41NDJaIiwibm9FeHBpcmUiOnRydWUsImFsbG93QWxsUGVybWlzc2lvbiI6dHJ1ZSwiX2lkIjoiY2RiWTEtNjdPS1hYUWtPQkZXUU02IiwiX192IjowfSwiaWF0IjoxNzM3NTQ3NzAwfQ._K_JmwST-ULM-4-XIO8vK30SrZDqa6k5ZeFZwXOfEOw"
  },
};

module.exports = nextConfig;
