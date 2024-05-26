const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Update the URL to your custom domain
const baseUrl = 'https://theofficialwebsiteguys.com';

// Define your URLs and images
const links = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: 1.0,
    images: [
      { url: `${baseUrl}/favicon.ico`, title: 'Homepage Icon' }
    ]
  },
  {
    url: '/about-us',
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      { url: `${baseUrl}/favicon.ico`, title: 'About Us Icon' }
    ]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.8,
    images: [
      { url: `${baseUrl}/favicon.ico`, title: 'About Us Icon' }
    ]
  }
  // Add other pages as necessary
];

// Create a stream to write to
const sitemapStream = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream('src/assets/sitemap.xml');

// Pipe the stream to the write stream
sitemapStream.pipe(writeStream);

// Add each link to the sitemap
links.forEach(link => {
  const url = {
    url: link.url,
    changefreq: link.changefreq,
    priority: link.priority,
    img: link.images
  };
  sitemapStream.write(url);
});

// End the stream and ensure it is completed before ending the script
streamToPromise(sitemapStream)
  .then(data => {
    console.log('Sitemap generated successfully');
    sitemapStream.end();
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
    sitemapStream.end();
  });
