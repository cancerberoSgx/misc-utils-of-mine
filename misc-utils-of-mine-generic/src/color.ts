/**
 * Transforms a color string like `rgb(0,0,0)` to a color string in hex syntax like `#000000`
 */
export function rgb2Hex(s: string) {
  // prettier-ignore
  //@ts-ignore
  return s.match(/[0-9]+/g)!.reduce((a, b: any) => a + (b | 256).toString(16).slice(1), '#').toString(16)
}
