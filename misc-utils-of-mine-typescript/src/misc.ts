
/** UnionToIntersection<1|2|3>  will be 1 & 2 & 3 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

/** Useful TODO reminder when you are porting typings of a JavaScript library */
export type TODO = any


// import {IsAny} from './inheritance'
// import { Range } from './array';



// /** Tests if N > M */
// export type IsGreaterThan<N, M> = N extends Exclude<Range<N>, Range<M>> ? true : false;
// export type ThereWasATypeError<T> = IsAny<T>


