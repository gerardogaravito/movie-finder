/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  images: {
    domains: ['imdb-api.com', 'd1csarkz8obe9u.cloudfront.net'],
  },
};
