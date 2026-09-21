import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://crontinel.com';
  type SitemapPage = {
    url: string;
    priority: string;
    changefreq: string;
    lastmod?: Date;
  };

  const toUrl = (path: string) => (path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`);

  const staticPages: SitemapPage[] = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'monthly' },
    { url: '/lifetime-deal', priority: '0.9', changefreq: 'monthly' },
    { url: '/features', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
    { url: '/agent', priority: '0.6', changefreq: 'monthly' },
    { url: '/changelog', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/vs', priority: '0.7', changefreq: 'weekly' },
    { url: '/vs/telescope', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases', priority: '0.7', changefreq: 'weekly' },
    { url: '/integrations', priority: '0.7', changefreq: 'weekly' },
    { url: '/security', priority: '0.4', changefreq: 'yearly' },
    { url: '/legal/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/legal/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/legal/cookies', priority: '0.3', changefreq: 'yearly' },
  ];

  const blogPosts = (await getCollection('blog')).filter((p) => !p.data.draft);
  const vsPosts   = await getCollection('vs');
  const useCases  = await getCollection('use-cases');
  const integrations = await getCollection('integrations');

  const dynamicPages = [
    ...blogPosts.map((p) => ({ url: `/blog/${p.id}`, priority: '0.7', changefreq: 'monthly', lastmod: p.data.updated ?? p.data.date })),
    ...vsPosts.map((p) => ({ url: `/vs/${p.id}`, priority: '0.8', changefreq: 'monthly', lastmod: p.data.updated ?? p.data.date })),
    ...useCases.map((p) => ({ url: `/use-cases/${p.id}`, priority: '0.7', changefreq: 'monthly', lastmod: p.data.updated ?? p.data.date })),
    ...integrations.map((p) => ({ url: `/integrations/${p.id}`, priority: '0.7', changefreq: 'monthly', lastmod: p.data.updated ?? p.data.date })),
  ];

  const allPages: SitemapPage[] = [...staticPages, ...dynamicPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${site}${toUrl(page.url)}</loc>${page.lastmod ? `\n    <lastmod>${page.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
