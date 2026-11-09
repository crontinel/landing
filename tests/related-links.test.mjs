import assert from 'node:assert/strict';
import test from 'node:test';
import { buildRelatedLinks } from '../src/lib/related-content.ts';

const entry = (id, title) => ({ id, data: { title } });

test('every page is linked from another page, even with no shared terms', () => {
  const entries = [
    entry('alpha', 'redis horizon workers'),
    entry('bravo', 'redis horizon supervisors'),
    entry('charlie', 'redis horizon balancing'),
    entry('delta', 'unrelated topic here'),
  ];
  const groups = [{ collection: 'blog', entries }];
  const linked = new Set(entries.flatMap((e) => buildRelatedLinks(e, 'blog', groups, 1).map((l) => l.href)));
  assert.deepEqual([...linked].sort(), entries.map((e) => `/blog/${e.id}/`).sort());
});

test('a single-page collection links to nothing', () => {
  const only = entry('only', 'solo');
  assert.deepEqual(buildRelatedLinks(only, 'blog', [{ collection: 'blog', entries: [only] }]), []);
});
