const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Update the URL to your GitHub Pages site
const baseUrl = 'https://theofficialwebsiteguys.com';

// Define your URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  // Add other pages as necessary
];

// Create a stream to write to
const sitemapStream = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream('src/assets/sitemap.xml');

// Pipe the stream to the write stream
sitemapStream.pipe(writeStream);

// Add each link to the sitemap
links.forEach(link => {
  sitemapStream.write(link);
});

// Convert stream to promise before ending the stream
streamToPromise(sitemapStream)
  .then(data => {
    sitemapStream.end();
    console.log('Sitemap generated successfully');
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
    sitemapStream.end();
  });