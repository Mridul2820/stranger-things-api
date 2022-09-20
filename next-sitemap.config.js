const SITE_URL = 'https://stranger-things-api.mridul.tech';

module.exports = {
  siteUrl: SITE_URL,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
};
