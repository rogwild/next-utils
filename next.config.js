/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: false,
  images: {
    domains: [`localhost`, `*.apisps.ru`, `apisps.ru`, `vercel.app`],
  },
  trailingSlash: true,
};
