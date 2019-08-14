import { NotFalsy } from '../type'

export function array<T = number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}

export function dedup<T>(a: T[], p: (a: T, b: T) => boolean): T[] {
  return a.filter((n, i, a) => i === a.findIndex(x => p(n, x)))
  // return a.reduce((x, y) => (x.find(i => p(i, y)) ? x : ([...x, y] as T[])), [] as T[])
}

export function asArray<T>(selectors: T | T[]): T[] {
  return Array.isArray(selectors) ? selectors : [selectors]
}

export function unionEquals<T>(
  a: T[],
  b: T[],
  predicate: (a: T, b: T) => boolean = (a, b) => a === b,
  output?: T[]
): T[] {
  // var r =  .filter(a => b.find(b=> predicate(a,b)))
  var r = dedup([...a, ...b], predicate)
  output && output.push(...dedup([...r, ...output], predicate))

  // var r =  left.concat(right).reduce((acc:T[] , element) => {
  //   return acc.some(elt => predicate(elt, element)) ? acc : acc.concat(element)
  // }, []  )
  // r = dedup(r, predicate)
  // output && output.push(...dedup([...r, ...output], predicate))
  return r
}

export const arrayUnion = unionEquals

export function arrayInterception<A = any>(
  a: A[],
  b: A[],
  predicate: (a: A, b: A) => boolean = (a, b) => a === b,
  output?: A[]
): A[] {
  var r = a.filter(a => b.find(b => predicate(a, b)))
  r = dedup(r, predicate)
  output && output.push(...dedup([...r, ...output], predicate))
  return r
}

export function arrayDifference<A = any>(
  a: A[],
  b: A[],
  predicate: (a: A, b: A) => boolean = (a, b) => a === b,
  output?: A[]
): A[] {
  var r = a.filter(a => !b.find(b => predicate(a, b))).concat(b.filter(b => !a.find(a => predicate(b, a))))
  r = dedup(r, predicate)
  output && output.push(...dedup([...r, ...output], predicate))
  return r
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
