export function flatDeep<T = any>(arr1: T[][] | T[]): T[] {
  return (arr1 as any[]).reduce((acc, val) => (Array.isArray(val) ? acc.concat(flatDeep(val)) : acc.concat(val)), [])
}

export function flat<T>(arr: T[][]): T[] {
  return arr.reduce((a, b) => a.concat(b))
}
