export function getPreviousMatchingPos(text: string, pos: number, condition: string | ((char: string) => boolean)) {
  pos = text.length <= pos ? text.length : pos
  if (typeof condition === 'string') {
    const s = condition
    condition = c => c === s
  }
  while (pos >= 0) {
    const char = text[pos]
    if (!condition(char)) {
      pos--
    } else {
      break
    }
  }
  return pos
}
