export function shorter(text: string, much: number = 10): string {
  return text.trim().substring(0, Math.min(text.length, much)) + '...'
}

export function removeWhites(s: string, replaceWith = ' ') {
  return s.replace(/\s+/gm, replaceWith).trim()
}

export function removeEmptyLines(c: string): string {
  return c
    .split('\n')
    .filter(l => !!l.trim())
    .join('\n')
}

export function trimRightLines(s: string) {
  return s
    .split('\n')
    .map(l => l.trimRight())
    .join('\n')
}
