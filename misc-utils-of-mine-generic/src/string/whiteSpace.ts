export function shorter(text: string, much: number = 10): string {
  return text.trim().substring(0, Math.min(text.length, much)) + '...'
}

export function removeWhites(s: string, replaceWith = ' ') {
  return s.replace(/\s+/gm, replaceWith).trim()
}

export function removeEmptyLines(c: string, newLine = '\n'): string {
  return c
    .split(newLine)
    .filter(l => !!l.trim())
    .join(newLine)
}

export function trimRightLines(s: string, newLine = '\n') {
  return s
    .split(newLine)
    .map(l => l.trimRight())
    .join(newLine)
}
