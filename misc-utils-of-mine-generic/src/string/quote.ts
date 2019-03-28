export function quote(s: string, q: string = '"'): string {
  return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
}

export function unquote(s: string) {
  return s.substring(1, s.length - 1)
}
