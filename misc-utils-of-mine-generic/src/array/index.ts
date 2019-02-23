export * from './flat'


export function array<T=number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}
export function dedup<T>(a: T[], p: (a: T, b: T) => boolean): T[] {
  return a.reduce((x, y) => x.find(i => p(i, y)) ? x : [...x, y] as T[], [] as T[])
}
export function asArray<T>(selectors: T | T[]): T[] {
  return Array.isArray(selectors) ? selectors : [selectors];
}


export function flat<T>(arr: T[][]): T[] {
  return arr.length ? arr.reduce((a, b) => a.concat(b)) : []
}
