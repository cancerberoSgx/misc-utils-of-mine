import { Extends } from './inheritance'
import { Falsy, NotFalsy } from './misc'

export type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false

export type If<Conditional, A, B> = Equal<Conditional, true> extends true ? A : B

export type ToBoolean<A> = If<A, true, false>

export type And<A, B> = If<A, ToBoolean<B>, false>
export type Not<A> = If<Extends<Falsy, A>, NotFalsy<A>, Falsy>

export type Or<A, B> = If<A, true, ToBoolean<B>>

export type IsNever<T> = Equal<T, never>
