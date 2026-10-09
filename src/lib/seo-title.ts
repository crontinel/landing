const MAX_TITLE = 60;

// Appends the brand suffix only when the result stays within the length
// search results display; long titles ship without it.
export function seoTitle(title: string, suffix: string): string {
  const full = `${title}${suffix}`;
  return full.length <= MAX_TITLE ? full : title;
}
