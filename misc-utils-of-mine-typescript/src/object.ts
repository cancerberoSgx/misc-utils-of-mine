import { Extended } from './inheritance';
export type EmptyObject = {};
/** returns the type of the value with key K in the Mapped type T. Example: `type _string = ValueOf<A, 'a'>` . */
export type ValueOf<T extends any, K extends string | number> = T[K];
export type ValueOfStringKey<T extends {
	[k: string]: any;
}, K extends string> = T[K];
export type ValueOfNumberKey<T extends {
	[k: number]: any;
}, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;
export type NumberKeyOf<T extends any> = Extract<keyof T, number>;
export type NamedMemberNamesOf<T extends any, K extends Extended<T> = Extended<T>> = StringKeyOf<K>;
export type NamedMemberValuesOf<T extends any, K extends Extended<T> = Extended<T>> = ValueOfStringKey<K, NamedMemberNamesOf<K>>;
export type NamedMemberValueOf<T extends any, K extends NamedMemberNamesOf<T>> = ValueOfStringKey<Extended<T>, K>;
export type NamedMemberValueOf2<T extends any, K extends string> = ValueOfStringKey<Extended<T>, K>;
