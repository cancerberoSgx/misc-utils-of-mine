export function isNode() {
  return typeof module === 'object' && module && typeof module.exports === 'object' && module.exports
}
