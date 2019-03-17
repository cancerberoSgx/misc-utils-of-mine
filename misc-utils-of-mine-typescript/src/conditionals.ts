type Equal<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false

// // type Equal1<A, B> = A extends B ? B extends A ? true : false : false

// type TestNever = Equal1<never, number> // never
// type TestNever1 = Equal<never, number> // false

// type _4 = FromNumber<4>
// type _5 = FromNumber<5>
// type _6 = FromNumber<6>
// type A5 = Equal<_5, _6> // true
// type B5 = Equal<_4, _5>// false


type If<Cond, A, B> = Equal<Cond, true> extends true ? A : B

type ToBoolean<A> = If<A, true, false>

type And<A, B> = If<A, ToBoolean<B>, false>

type Or<A, B> = If<A, true, ToBoolean<B>>


type IsNever<T> = Equal<T, never>
