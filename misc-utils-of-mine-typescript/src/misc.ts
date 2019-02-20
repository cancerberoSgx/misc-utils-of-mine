/** UnionToIntersection<1|2|3>  will be 1 & 2 & 3 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

/** Useful TODO reminder when you are porting typings of a JavaScript library */
export type TODO = any

/** Removes undefined from type */
export type NotUndefined<T> = Exclude<T, undefined>

export type Falsy = undefined | null | false | ''

/** Removes undefined from type */
export type NotFalsy<T> = Exclude<T, Falsy>

/** Useful for filtering out undefined values without casting. */
export function notUndefined<T>(n: T): n is NotUndefined<T> {
  return n !== undefined
}

/** Useful for filtering out falsy values without casting. */
export function notFalsy<T>(n: T): n is NotFalsy<T> {
  return !!n
}
