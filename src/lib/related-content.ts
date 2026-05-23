const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'back', 'be', 'best', 'by', 'can', 'clear', 'cron', 'crontinel', 'detect',
  'for', 'from', 'failed', 'fix', 'generic', 'how', 'in', 'is', 'it', 'laravel', 'job', 'jobs', 'monitor',
  'monitoring', 'of', 'on', 'production', 'queue', 'queues', 'running', 'silent', 'the', 'to', 'use', 'using',
  'what', 'when', 'why', 'with', 'your', 'vs'
]);

export type RelatedEntry = {
  id: string;
  data: {
    title: string;
    description?: string;
    tags?: string[];
  };
};

export type RelatedGroup = {
  collection: 'blog' | 'use-cases' | 'vs' | 'integrations';
  entries: RelatedEntry[];
  weight?: number;
};

export type RelatedLink = {
  href: string;
  title: string;
  description?: string;
  collection: RelatedGroup['collection'];
};

const PATH_PREFIX: Record<RelatedGroup['collection'], string> = {
  blog: '/blog',
  'use-cases': '/use-cases',
  vs: '/vs',
  integrations: '/integrations',
};

function tokenize(...parts: Array<string | undefined>) {
  return new Set(
    parts
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .map((token) => token.trim())
      .filter((token) => token.length > 2 && !STOP_WORDS.has(token))
  );
}

function overlapScore(a: Set<string>, b: Set<string>) {
  let score = 0;
  for (const token of a) {
    if (b.has(token)) score += 1;
  }
  return score;
}

export function buildRelatedLinks(
  current: RelatedEntry,
  currentCollection: RelatedGroup['collection'],
  groups: RelatedGroup[],
  limit = 4,
): RelatedLink[] {
  const currentTokens = tokenize(current.data.title, current.data.description, current.data.tags?.join(' '), current.id);

  const scored = groups.flatMap((group) => {
    const collectionWeight = group.weight ?? (group.collection === currentCollection ? 4 : 1);

    return group.entries.map((entry) => {
      const isCurrent = group.collection === currentCollection && entry.id === current.id;
      if (isCurrent) return null;

      const entryTokens = tokenize(entry.data.title, entry.data.description, entry.data.tags?.join(' '), entry.id);
      const score = overlapScore(currentTokens, entryTokens) * 3 + collectionWeight;

      return {
        href: `${PATH_PREFIX[group.collection]}/${entry.id}/`,
        title: entry.data.title,
        description: entry.data.description,
        collection: group.collection,
        score,
      };
    }).filter(Boolean) as Array<RelatedLink & { score: number }>;
  });

  const unique = new Map<string, RelatedLink & { score: number }>();
  for (const item of scored) {
    const existing = unique.get(item.href);
    if (!existing || item.score > existing.score) unique.set(item.href, item);
  }

  return [...unique.values()]
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit)
    .map(({ score, ...item }) => item);
}
