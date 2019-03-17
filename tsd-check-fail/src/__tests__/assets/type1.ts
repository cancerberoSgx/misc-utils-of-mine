// export type Length<T, L> = T extends {length: number} ? {length: number} extends T ? T['length'] extends L ? L extends T['length'] ? {length: L} : never : never : never : never

// export type IntersectionOfValues<T> =
//   { [K in keyof T]: (p: T[K]) => void   } extends
//   { [n: string]:    (p: infer I) => void }
//     ? I
//     : never;

type True = '1'
/** no-doc */
type False = '0'
type Bool = False | True

export type If<Cond extends Bool, Then, Else> = Cond extends True ? Then : Else
export type IsString<T> = T extends string ? True : False

export type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false
