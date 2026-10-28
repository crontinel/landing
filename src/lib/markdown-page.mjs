// Content pages also ship as markdown (/blog/<slug>.md) for AI agents, and
// worker.ts serves that file for `Accept: text/markdown` on the HTML URL.
export const markdownCollections = ['blog', 'use-cases', 'vs', 'integrations'];

const site = 'https://crontinel.com';

export function markdownPath(pathname) {
  const match = pathname.match(/^\/(blog|use-cases|vs|integrations)\/([^/]+)\/$/);
  return match ? `/${match[1]}/${match[2]}.md` : null;
}

export function wantsMarkdown(accept) {
  return /\btext\/markdown\b/i.test(accept || '');
}

export function renderMarkdownPage({ collection, slug, title, description, body }) {
  // MDX import lines are build-time only and mean nothing to a reader.
  const content = body.replace(/^import\s.+\n/gm, '').trim();
  const lines = [`# ${title}`, ''];
  if (description) lines.push(`> ${description}`, '');
  lines.push(`Source: ${site}/${collection}/${slug}/`, '', content, '');
  return lines.join('\n');
}

// FAQPage JSON-LD from a "## FAQ" (or "## Frequently asked questions") section
// whose questions are "### " headings. Returns null when there is none.
export function faqSchema(body) {
  const section = body.match(/^## (?:FAQ|Frequently asked questions)[^\n]*\n([\s\S]*?)(?=^## |(?![\s\S]))/im);
  if (!section) return null;

  const mainEntity = section[1]
    .split(/^### /m)
    .slice(1)
    .map((block) => {
      const [question, ...rest] = block.split('\n');
      const answer = plainText(rest.join('\n'));
      return answer && {
        '@type': 'Question',
        name: plainText(question),
        acceptedAnswer: { '@type': 'Answer', text: answer },
      };
    })
    .filter(Boolean);

  return mainEntity.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity }
    : null;
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
