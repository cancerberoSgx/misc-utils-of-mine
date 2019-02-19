import {ObjectStringKeyValue, ObjectStringKeyUnion} from './object'
/**
 * Creates a union from the types of an Array or tuple. For example, `UnionOf<[number, string]>` will be
 * `number|string`
 */
export type UnionOf<T extends any[]> = T[number]

/**
 * Returns the length of an array or tuple
 */
export type ArrayLength<T extends any[]> = T['length']

/**
 * Returns an fixed length array with item type TItem. Tuple will validate that a value assigned dont have
 * more than L keys but when accessing it doesn't validate. ie: `let a1:Tuple<number, 2> = [1,2,3]` causes
 * error but this is not:  `declare let a1:Tuple<{ a: number }, 2>  let b = a1[5]`.
 *
 * If you want to validate this, go to ArrayLiteral, but will only work for limited L value
 */
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength
}
// type t2= Tuple<{  a: number }, 2>  = [{a:2}, a:3,a:4] declare let a1:Tuple<{  a: number }, 2> let a1a =
// a1[5].a

/**
 * Returns an fixed length array with item type TItem. L must be lower than 10. More strict than Tuple but
 * this one is hard coded to limit of numbers. This will validate accessing out of range wile tuple wont.
 * `interface I=... ArrayOfLength<I,2>` === [I,I]
 */
export type ArrayLiteral<T, L> = 0 extends L
  ? []
  : 1 extends L
  ? [T]
  : 2 extends L
  ? [T, T]
  : 3 extends L
  ? [T, T, T]
  : 4 extends L
  ? [T, T, T, T]
  : 5 extends L
  ? [T, T, T, T, T]
  : 6 extends L
  ? [T, T, T, T, T, T]
  : 7 extends L
  ? [T, T, T, T, T, T, T]
  : 8 extends L
  ? [T, T, T, T, T, T, T, T]
  : 9 extends L
  ? [T, T, T, T, T, T, T, T, T]
  : never
// type t1=ArrayLiteral<{  hi: number , there: string}, 3> declare let a2: ArrayLiteral<{  hi: number , there:
// string},3> let a2a = a2[1].a type t = t1 extends t2 ? true:false

/**
 * Returns all but the first item's type in a tuple/array
 */
export type ArrayTail<T extends any[]> = ((...args: T) => any) extends ((head: any, ...tail: infer R) => any)
  ? R
  : never

/**
 * Returns the given tuple/array with the item type prepended to it
 */
export type ArrayUnshift<List extends any[], Item> = ((first: Item, ...rest: List) => any) extends ((
  ...list: infer R
) => any)
  ? R
  : never

/**
 * Return the union of values of given key in all objects in array. For example:
 * `NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>`  will be `1|2`
 */
export type ArrayValueOfStringKey<a extends any[], k extends string> = ObjectStringKeyValue<UnionOf<a>, k>

/**
 * Returns the union of common keys in array objects. For example:
 * `ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's', c: 9}, {c: true; b: 0}]>` will be `'b'|'c'`
 */
export type ArrayStringKeyIntersection<a extends any[]> = ObjectStringKeyUnion<UnionOf<a>>

/**
 * Returns the union of all indexes in array. For example,
 * `ArrayIndexUnion<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>` will be `'0'|'1'|'2'`
 */
export type ArrayIndexUnion<
  T extends any[],
  K extends Exclude<keyof T, keyof []> = Exclude<keyof T, keyof []>
> = T extends {[k in K]: any} ? K : never

/**
 * Returns the union of common keys in array objects .
 * `ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>` will be `'b'|'c'`
 */
export type ArrayItemKeyUnion<T extends any[]> = keyof T[ArrayIndexUnion<T>]
