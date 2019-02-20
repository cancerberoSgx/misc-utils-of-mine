import { UnionToIntersection } from './misc'
/** Tests if N <= M */
export type Identical<T1, T2> = UnionToIntersection<T1> extends UnionToIntersection<T2>
  ? (UnionToIntersection<T2> extends UnionToIntersection<T1> ? true : false)
  : false
/** return T and all its super interfaces/classes ascendants */
export type Extended<T extends any, K extends any = any> = T extends K ? T : never
export type Extends<T1, T2> = NonNullable<T1> extends NonNullable<T2> ? true : false
export type NotExtends<T1, T2> = T1 extends T2 ? false : true
export type IsAny<T> = undefined extends T ? (string extends T ? true : false) : false
export type CannotBeUndefined<T> = undefined extends T ? false : true
export type CanBeUndefined<T> = undefined extends T ? true : false

/**
 * Tests if two types are equal
 */
export type Equals<T, S> = [T] extends [S] ? ([S] extends [T] ? true : false) : false
