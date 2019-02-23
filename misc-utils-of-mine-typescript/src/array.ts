import { Equals } from './inheritance';
import { ValueOfStringKey, StringKeyOf } from "./object";
/**
 * Creates a union from the types of an Array or tuple
 */
export type UnionOf<T extends any[]> = T[number];
/**
 * Returns the length of an array or tuple
 */
export type LengthOf<T extends any[]> = T["length"];
/** return an fixed length array with item type TItem */
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
	length: TLength;
};
/**
 * Returns all but the first item's type in a tuple/array
 */
export type Tail<T extends any[]> = ((...args: T) => any) extends ((head: any, ...tail: infer R) => any) ? R : never;
/**
 * Returns the given tuple/array with the item type prepended to it
 */
export type Unshift<List extends any[], Item> = ((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;
export type Range<N, T extends number[]=[]> = {
	0: T;
	1: Range<N, Unshift<T, LengthOf<T>>>;
}[Equals<LengthOf<Tail<T>>, N> extends true ? 0 : 1];
/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type ValueOfStringKeyInArray<a extends any[], k extends string> = ValueOfStringKey<UnionOf<a>, k>;
/** NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>  will be 1|2 */
export type StringKeyInArray<a extends any[]> = StringKeyOf<UnionOf<a>>;
export type arrayIndexUnion<T extends any[], K extends Exclude<keyof T, keyof []> = Exclude<keyof T, keyof []>> = T extends {
	[k in K]: any;
} ? K : never;
export type arrayItemKeyUnion<T extends any[]> = keyof T[arrayIndexUnion<T>];
