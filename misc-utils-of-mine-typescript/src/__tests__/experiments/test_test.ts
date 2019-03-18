// // union to intersection of functions
// type UnionToIoF<U> =
//   (U extends any ? (k: (x: U) => void) => void : never) extends
//   ((k: infer I) => void) ? I : never

// // return last element from Union
// type UnionPop<U> = UnionToIoF<U> extends { (a: infer A): void; } ? A : never;

// // prepend an element to a tuple.
// type Prepend<U, T extends any[]> =
//   ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;

// type UnionToTupleRecursively<Union, Result extends any[]> = {
//   1: Result;
//   0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
//   // 0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, Prepend<UnionPop<Union>, Result>>
// }[[Union] extends [never] ? 1 : 0];

// type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
// UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;

// type UnionToTupleOrdered<U> = UnionToTupleRecursively<U, []>;

// // /** return an fixed length array with item type TItem */
// type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
// 	length: TLength;
// };

// type UnionCount<T>=UnionToTupleOrdered<T>['length']
// type UnionToTuple<T, L  extends number> = Tuple<T,  UnionCount<T>>
// type UserTuple = UnionToTuple<1|2, 2>
// var c : UserTuple = [1, 2]




// // takes an object, and returns its values in an intersection
// type IntersectionOfValues<T> =
//   { [K in keyof T]: (p: T[K]) => void } extends
//   { [n: string]: (p: infer I) => void }
//   ? I
//   : never;

// // example:
// // type a = IntersectionOfValues<I>; // => number & string & string
// // which simplifies to // => number & string

// // takes the first argument of each function in the intersection and puts it into the tuple
// // order is not guaranteed, so this isn't a very useful type outside of this context
// type IntersectionOfFunctionsToTuple<F> =
//   F extends {
//     (a: infer A): void;
//     (b: infer B): void;
//     (c: infer C): void;
//   } ? [A, B, C] :
//   F extends {
//     (a: infer A): void;
//     (b: infer B): void;
//   } ? [A, B] :
//   F extends {
//     (a: infer A): void
//   } ? [A] :
//   never;

// type ToTuple<T> =
//   // pass the intersection of these functions to create the tuple type
//   // store the keys as arguments to functions so that they can be retrieved with inference later
//   IntersectionOfFunctionsToTuple<
//     // convert each key into a function that takes that key type as an argument
//     IntersectionOfValues<{ [K in keyof T]: (v: K) => void }>
//   >;
// type CountKeys<T> = ToTuple<T>['length'];



// type T = UnionToTupleOrdered<1|2>
// type T3 = Tuple<1|2, 2>
// var c : T3 = [1, 2]

// /** return an fixed length array with item type TItem */
// type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
// 	length: TLength;
// };

// type UnionToTuple<T, L  extends number> = Tuple<T,  UnionToTupleOrdered<T>['length']>
// type I = 1|2
// // type ff = UnionToTupleOrdered<I>['length']
// // type T2 = Tuple<I,  UnionToTupleOrdered<I>['length']>
// var c : UnionToTuple<I> = [1, 2, 3, 4]




// type T = UnionToTupleOrdered<1|2>
// type T3 = Tuple<1|2, 2>
// var c : T3 = [1, 2]

/** return an fixed length array with item type TItem */
// type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
// 	length: TLength;
// };

// // type UnionToTuple<T, L  extends number> = Tuple<T,  UnionToTupleOrdered<T>['length']>
// type I = 1|2
// // type ff = UnionToTupleOrdered<I>['length']
// // type T2 = Tuple<I,  UnionToTupleOrdered<I>['length']>
// var c : UnionToTuple<I> = [1, 2, 3, 4]
