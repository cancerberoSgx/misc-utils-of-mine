import {IsAny} from './inheritance'
// import { Range } from './array';
/** UnionToIntersection<1|2|3>  will be 1 & 2 & 3 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never
/** Tests if N > M */
// export type IsGreaterThan<N, M> = N extends Exclude<Range<N>, Range<M>> ? true : false;
export type ThereWasATypeError<T> = IsAny<T>
export type TODO = any
