import { array } from '../array'

export function quote(s: string, q: string = '"'): string {
  return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
}

export function unquote(s: string) {
  return s.substring(1, s.length - 1)
}

export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}

export function indent(i: number = 1, tabSize = 2): string {
  return repeat(i * tabSize, ' ')
}
