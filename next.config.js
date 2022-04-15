const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['via.placeholder.com', 'halvor.codes', 'www.halvor.codes', "img.icons8.com"],
  },
}

module.exports = nextConfig
