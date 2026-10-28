import { test } from 'node:test';
import assert from 'node:assert/strict';
import { faqSchema, markdownPath, renderMarkdownPage, wantsMarkdown } from '../src/lib/markdown-page.mjs';

test('faqSchema reads ### questions from the FAQ section only', () => {
  const body = '## Intro\n\n### Not a question\nskip\n\n## FAQ\n\n### Is it **free**?\nYes, see [pricing](/pricing/).\n\n### Empty?\n\n## Next\n\n### Outside\nno';
  const schema = faqSchema(body);
  assert.equal(schema['@type'], 'FAQPage');
  assert.deepEqual(schema.mainEntity.map((q) => [q.name, q.acceptedAnswer.text]), [['Is it free?', 'Yes, see pricing.']]);
});

test('faqSchema returns null without a FAQ section', () => {
  assert.equal(faqSchema('## Setup\n\n### Step one\ntext'), null);
});

test('markdownPath maps content pages only', () => {
  assert.equal(markdownPath('/blog/some-post/'), '/blog/some-post.md');
  assert.equal(markdownPath('/use-cases/x/'), '/use-cases/x.md');
  assert.equal(markdownPath('/blog/'), null);
  assert.equal(markdownPath('/pricing/'), null);
});

test('wantsMarkdown checks the Accept header', () => {
  assert.equal(wantsMarkdown('text/markdown, text/html;q=0.9'), true);
  assert.equal(wantsMarkdown('text/html,*/*'), false);
  assert.equal(wantsMarkdown(null), false);
});

test('renderMarkdownPage strips MDX imports', () => {
  const md = renderMarkdownPage({ collection: 'vs', slug: 'a', title: 'T', description: 'D', body: "import X from './x';\n\nHello" });
  assert.equal(md, '# T\n\n> D\n\nSource: https://crontinel.com/vs/a/\n\nHello\n');
});
