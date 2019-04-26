export * from './object'
export * from './misc'
export * from './array'
export * from './inheritance'
export * from './json'
export * from './enum'
export * from './conditional'

type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T]

// type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

// type Overwrite<T, U> = { [P in Diff<keyof T, keyof U>]: T[P] } & U;

// type Overwrite<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>> & T2

// type T1 = Diff<"a" | "b" | "c", "c" | "d">;  // "a" | "b"

// type Item1 = { a: string, b: number, c: boolean };
// type Item2 = { a: number };

// type T2 = Omit<Item1, "a"> // { b: number, c: boolean };
// type T3 = Overwrite<Item1, Item2> // { a: number, b: number, c: boolean };

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type KnownKeys<T> = { [K in keyof T]: string extends K ? never : number extends K ? never : K } extends {
  [_ in keyof T]: infer U
}
  ? U
  : never

/** removes not eplicit keys from object (ike map type's ) */
let a: KnownKeys<{ a: '2'; b: 'd'; [a: string]: string }>
