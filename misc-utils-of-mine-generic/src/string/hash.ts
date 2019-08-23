let hash
export function hashCode(s: string) {
  let h = 0
  for (let i = 0, h = 0; i < s.length; i++) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0
  }
  return h
}
/**
 * Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world'}`
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
