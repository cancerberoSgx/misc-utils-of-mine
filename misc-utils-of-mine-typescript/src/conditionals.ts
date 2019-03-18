export type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false

// // export type Equal1<A, B> = A extends B ? B extends A ? true : false : false

// export type TestNever = Equal1<never, number> // never
// export type TestNever1 = Equal<never, number> // false

// export type _4 = FromNumber<4>
// export type _5 = FromNumber<5>
// export type _6 = FromNumber<6>
// export type A5 = Equal<_5, _6> // true
// export type B5 = Equal<_4, _5>// false

export type If<Cond, A, B> = Equal<Cond, true> extends true ? A : B

export type ToBoolean<A> = If<A, true, false>

export type And<A, B> = If<A, ToBoolean<B>, false>

export type Or<A, B> = If<A, true, ToBoolean<B>>

export type IsNever<T> = Equal<T, never>
