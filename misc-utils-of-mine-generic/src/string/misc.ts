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

/**
 * Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world}`
 */
export function stringToObject(s: string = '', propSep = ',', nameValueSep = ':') {
  const a = s.split(propSep).map(s => s.trim())
  const o: any = {}
  a.forEach(f => {
    const b = f.split(nameValueSep).map(a => a.trim())
    if (b.length !== 2) {
      return
    }
    o[b[0]] = b[1]
  })
  return o
}
