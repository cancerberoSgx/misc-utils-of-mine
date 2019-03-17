// union to intersection of functions
type UnionToIoF<U> =
  (U extends any ? (k: (x: U) => void) => void : never) extends
  ((k: infer I) => void) ? I : never

// return last element from Union
type UnionPop<U> = UnionToIoF<U> extends { (a: infer A): void; } ? A : never;

// prepend an element to a tuple.
type Prepend<U, T extends any[]> =
  ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;

type UnionToTupleRecursively<Union, Result extends any[]> = {
  1: Result;
  0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
  // 0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, Prepend<UnionPop<Union>, Result>>
}[[Union] extends [never] ? 1 : 0];

type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
  UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;

export type UnionToTupleOrdered<U> = UnionToTupleRecursively<U, []>;
