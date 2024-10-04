const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define the paths for your app
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add more routes as needed
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://bifidopro.uz/' });

Readable.from(links).pipe(stream);

streamToPromise(stream).then((data) => {
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), data.toString());
});