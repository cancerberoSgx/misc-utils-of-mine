export function isNode() {
  return typeof module === 'object' && module && typeof module.exports === 'object' && module.exports
}

export function inBrowser() {
  // @ts-ignore
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
