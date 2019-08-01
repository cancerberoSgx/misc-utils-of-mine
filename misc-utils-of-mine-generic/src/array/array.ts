import { NotFalsy } from '../type'

export function array<T = number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}

export function dedup<T>(a: T[], p: (a: T, b: T) => boolean): T[] {
  return a.reduce((x, y) => (x.find(i => p(i, y)) ? x : ([...x, y] as T[])), [] as T[])
}

export function asArray<T>(selectors: T | T[]): T[] {
  return Array.isArray(selectors) ? selectors : [selectors]
}

export function unionEquals<T>(left: T[], right: T[], equals: (a: T, b: T) => boolean): T[] {
  return left.concat(right).reduce((acc, element) => {
    //@ts-ignore
    return acc.some(elt => equals(elt, element)) ? acc : acc.concat(element)
  }, [])
}

export function arrayInterception<A = any, B = any>(a: A[], b: B[]): (A | B)[] {
  return a.filter(a => b.find((b: any) => b === a))
}

export function seq(start: number = 0, step: number = 1, max: number = 0): number[] {
  const result = []
  for (let i = start; i < max; i += step) {
    result.push(i)
  }
  return result
}

/**
 * Use it to remove duplicates in array's filter expressions like `array.filter(notSame)`.
 */
export function notSame<T>(t: T, i: number, a: T[]) {
  return a.indexOf(t) === i
}

/**
 * Use it remove duplicates and falsy values in filter() expressions like
 * `array.filter(notSameNotFalsy)`
 */
export function notSameNotFalsy<T>(t: T, i: number, a: T[]): t is NotFalsy<T> {
  return a.indexOf(t) === i
}
