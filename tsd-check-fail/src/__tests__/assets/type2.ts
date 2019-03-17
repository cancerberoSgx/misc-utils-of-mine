interface I {
  hi: number
  there: string
  friend: string
}

// takes an object, and returns its values in an intersection
type IntersectionOfValues<T> = {[K in keyof T]: (p: T[K]) => void} extends {[n: string]: (p: infer I) => void}
  ? I
  : never

// example:
type a = IntersectionOfValues<I> // => number & string & string
// which simplifies to // => number & string

// takes the first argument of each function in the intersection and puts it into the tuple
// order is not guaranteed, so this isn't a very useful type outside of this context
type IntersectionOfFunctionsToTuple<F> = F extends {
  (a: infer A): void
  (b: infer B): void
  (c: infer C): void
}
  ? [A, B, C]
  : F extends {
      (a: infer A): void
      (b: infer B): void
    }
  ? [A, B]
  : F extends {
      (a: infer A): void
    }
  ? [A]
  : never

export type KeysToTuple<T> =
  // pass the intersection of these functions to create the tuple type
  // store the keys as arguments to functions so that they can be retrieved with inference later
  IntersectionOfFunctionsToTuple<
    // convert each key into a function that takes that key type as an argument
    IntersectionOfValues<{[K in keyof T]: (v: K) => void}>
  >

export type CountKeys<T> = KeysToTuple<T>['length']
// let a : KeysToTuple<{a:1}>
// type ArrayOfLength<T, L> = 1 extends L ? [T] : 2 extends L ? [T, T] : 3 extends L ? [T, T, T] : never
// export type input = ArrayOfLength<I, 2>
// // // const input : ArrayOf<I, 2> = [{hi: 1}]
// // // type numKeys = ToTuple<I>;

// // type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
// //   length: TLength;
// // };

// // type TO_TUPLE<T> = ToTuple<T>
// // type t = ToTuple<1 | 2>
// // type tt = Tuple<1 | 2, 8>
// // const c: t = [1, 2]

// // union to intersection of functions
// type UnionToIoF<U> =
//     (U extends any ? (k: (x: U) => void) => void : never) extends
//     ((k: infer I) => void) ? I : never

// // return last element from Union
// type UnionPop<U> = UnionToIoF<U> extends { (a: infer A): void; } ? A : never;

// // prepend an element to a tuple.
// type Prepend<U, T extends any[]> =
//     ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;

// type UnionToTupleRecursively<Union, Result extends any[]> = {
//     1: Result;
//     0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
//     // 0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, Prepend<UnionPop<Union>, Result>>
// }[[Union] extends [never] ? 1 : 0];

// type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
//     UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;

// type UnionToTuple<U> = UnionToTupleRecursively<U, []>;

// // support union size of 43 at most
// type Union43 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
//     10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
//     20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
//     30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
//     40 | 41 | 42 | 43;
// type Tuple = UnionToTuple<Union43>;

// // type ttt = 1|2
// // type ff = UnionToTuple<ttt>
// const fffa:UnionToTuple<1|3> = [3, 1]

// // // union to intersection of functions
// // type UnionToIoF<U> =
// //   (U extends any ? (k: (x: U) => void) => void : never) extends
// //   ((k: infer I) => void) ? I : never

// // // return last element from Union
// // type UnionPop<U> = UnionToIoF<U> extends { (a: infer A): void; } ? A : never;

// // // prepend an element to a tuple.
// // type Prepend<U, T extends any[]> =
// //   ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;

// // type UnionToTupleRecursively<Union, Result extends any[]> = {
// //   1: Result;
// //   0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
// //   // 0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, Prepend<UnionPop<Union>, Result>>
// // }[[Union] extends [never] ? 1 : 0];

// // type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
// //   UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;

// // type UnionToTuple<U> = UnionToTupleRecursively<U, []>;

// // // support union size of 43 at most
// // type Union43 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
// //   10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
// //   20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
// //   30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
// //   40 | 41 | 42 | 43;

// // interface I {
// //   hi: number;
// //   there: string;
// //   friend: string;
// // }

// // takes an object, and returns its values in an intersection
// type IntersectionOfValues<T> =
//   { [K in keyof T]: (p: T[K]) => void } extends
//   { [n: string]: (p: infer I) => void }
//   ? I
//   : never;

// // example:
// type a = IntersectionOfValues<I>; // => number & string & string
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

// type ArrayOf<T, L> = 1 extends L ? [T] : 2 extends L ? [T, T] : 3 extends L ? [T, T, T] : never
// type input = ArrayOf<I, 2>
// // const input : ArrayOf<I, 2> = [{hi: 1}]
// // type numKeys = ToTuple<I>;

// type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
//   length: TLength;
// };

// type TO_TUPLE<T> = ToTuple<T>
// type t = ToTuple<1 | 2>
// type tt = Tuple<1 | 2, 8>
// const c: t = [1, 2]

// // type Tuple = UnionToTuple<Union43>;
