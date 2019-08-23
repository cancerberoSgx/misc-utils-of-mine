import { NotFalsy } from '../type'

export function dedup<T>(a: T[], p: (a: T, b: T) => boolean): T[] {
  return a.filter((n, i, a) => i === a.findIndex(x => p(n, x)))
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
