/** List given enum keys as array */
export function enumKeys(anEnum: any): string[] {
  const a = []
  for (let i in anEnum) {
    a.push(i)
  }
  return a
}
