import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { markdownCollections, renderMarkdownPage } from '../../lib/markdown-page.mjs';

export const prerender = true;

export async function getStaticPaths() {
  const paths = [];
  for (const collection of markdownCollections) {
    const entries = await getCollection(collection as 'blog', ({ data }) => !('draft' in data && data.draft));
    for (const entry of entries) {
      paths.push({ params: { collection, slug: entry.id }, props: { entry } });
    }
  }
  return paths;
}

export const GET: APIRoute = ({ params, props }) =>
  new Response(
    renderMarkdownPage({
      collection: params.collection!,
      slug: params.slug!,
      title: props.entry.data.title,
      description: props.entry.data.description,
      body: props.entry.body ?? '',
    }),
    { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } },
  );
