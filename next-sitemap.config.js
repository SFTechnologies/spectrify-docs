/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.spectrify.app',
  generateRobotsTxt: true, // (optional)
};
