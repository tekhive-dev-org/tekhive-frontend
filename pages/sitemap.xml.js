const WEBSITE_URL = 'https://tekhive.dev';

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const pages = [
    '',
    '/services',
    '/about',
    '/book-session',
    '/testimonials',
    '/faqs',
    '/blog',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${WEBSITE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
