import { NotFalsy } from 'misc-utils-of-mine-typescript'

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

export function seq(start: number = 0, step: number = 1, max: number = 0): number[] {
  const result = []
  for (let i = start; i < max; i += step) {
    result.push(i)
  }
  return result
}
/**
 * List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'},
 * if not values could be also returned . For enums without declared values, use enumNoValueKeys
 */
export function enumKeys(anEnum: any): string[] {
  const a = []
  for (let i in anEnum) {
    a.push(i)
  }
  return a
}

/**
 * List given enum keys as array. Differently to [[enumKeys]], is should be used only on enums that doesn't
 * have assigned values
 * or other wise on those which values are identical to the keys or not strings. If not, they will be returned also!
 */
export function enumNoValueKeys(anEnum: any): string[] {
  return Object.keys(anEnum)
    .map(i => anEnum[i as any])
    .filter((s, i, a) => typeof s === 'string' && a.indexOf(s) === i)
}

// /**
//  * return the Enum type from given string enum key obtained with key [[enumNoValueKeys]]
//  */
// function enumValueFromString<T>(key: string, anEnum: any): T | undefined {
//   return anEnum[key]
// }
// s

/** use it to remove duplicates in .filter expressions like `array.filter(notSame)` */
export function notSame<T>(t: T, i: number, a: T[]) {
  return a.indexOf(t) === i
}
/** use it remove duplicates and falsy values in filter() expressions like `array.filter(notSameNotFalsy)` */
export function notSameNotFalsy<T>(t: T, i: number, a: T[]): t is NotFalsy<T> {
  return a.indexOf(t) === i
}
