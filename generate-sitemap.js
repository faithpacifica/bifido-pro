    const sitemap = require('sitemap');
    const fs = require('fs');
    const hostname = 'https://bifidopro.uz';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
    ];

    const sitemapInstance = sitemap.createSitemap({
      hostname,
      urls,
    });

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());