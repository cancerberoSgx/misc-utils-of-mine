import { ObjectStringKeyValue, ObjectStringKeyUnion } from "./object";
/**
 * Creates a union from the types of an Array or tuple
 */
export type UnionOf<T extends any[]> = T[number];

/**
 * Returns the length of an array or tuple
 */
export type LengthOf<T extends any[]> = T["length"];

/** return an fixed length array with item type TItem. Tuple will validate that a value assigned dont have more than L keys but when accessing it doesnt validate. ie: let a1:Tuple<number, 2> = [1,2,3] causes error but this is not:  declare let a1:Tuple<{  a: number }, 2>  let a1a = a1[5].a ---- a1a and member a are number. If you want to validate this, go to ArrayLiteral */
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
	length: TLength;
};
// type t2= Tuple<{  a: number }, 2>  = [{a:2}, a:3,a:4]
// declare let a1:Tuple<{  a: number }, 2> 
// let a1a = a1[5].a

/** More strict than Tuple but this one is hard coded to limit of numbers. This will validate accessing out of range wile tuple wont. interface I=... ArrayOfLength<I,2> === [I,I]*/
export type ArrayLiteral<T, L> = 1 extends L ? [T] : 2 extends L ? [T, T] : 3 extends L ? [T, T, T] : never
// type t1=ArrayLiteral<{  hi: number , there: string}, 3>
// declare let a2: ArrayLiteral<{  hi: number , there: string},3>
// let a2a = a2[1].a
// type t = t1 extends t2 ? true:false
/**
 * Returns all but the first item's type in a tuple/array
 */
export type Tail<T extends any[]> = ((...args: T) => any) extends ((head: any, ...tail: infer R) => any) ? R : never;

/**
 * Returns the given tuple/array with the item type prepended to it
 */
export type Unshift<List extends any[], Item> = ((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;


// type Range<N, T extends number[]=[]> = {
// 	0: T;
// 	1: Range<N, Unshift<T, LengthOf<T>>>;
// }[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];

/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type ValueOfStringKeyInArray<a extends any[], k extends string> = ObjectStringKeyValue<UnionOf<a>, k>;

/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type ArrayStringKeyIntersection<a extends any[]> = ObjectStringKeyUnion<UnionOf<a>>;

export type ArrayIndexUnion<T extends any[], K extends Exclude<keyof T, keyof []> = Exclude<keyof T, keyof []>> = T extends {
	[k in K]: any;
} ? K : never;

export type ArrayItemKeyUnion<T extends any[]> = keyof T[ArrayIndexUnion<T>];


