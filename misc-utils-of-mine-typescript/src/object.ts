import { Extended } from './inheritance'

export type EmptyObject = {}

/** ObjectKeyValue<{a:1,b:'s',2:9},2>===9 ObjectKeyValue<{a:1,b:'s',2:'b'},'s'>. */
export type ObjectKeyValue<T extends any, K extends string | number> = T[K]
// let c:ObjectKeyValue<{a:1,b:'s',2:9},2>
/** ObjectStringKey<{a:1,b:'s',2:9},'b'> === 9   ObjectStringKey<{a:1,b:'s',2:9},2> fails*/
export type ObjectStringKeyValue<T extends { [k: string]: any }, K extends string> = T[K]
// let c:ObjectStringKeyValue<{a:1,b:'s',2:9},'b'>

/** ValueOfNumberKey<{a:1,b:'s',2:9},2>===9 */
export type ObjectNumberKeyValue<T extends { [k: number]: any }, K extends number> = T[K]
// let c:ValueOfNumberKey<{a:1,b:'s',2:9},2>

/** c:ObjectStringKeyUnion<{a:1,b:'s'}> === 'a'|'b' */
export type ObjectStringKeyUnion<T extends any> = Extract<keyof T, string>
// let c:ObjectStringKeyUnion<{a:1,b:'s'}>

/** ObjectNumberKeyUnion<{1:'g',7:false}> === 1|7 */
export type ObjectNumberKeyUnion<T extends any> = Extract<keyof T, number>
// let c:ObjectNumberKeyUnion<{1:'g',7:false}>

// export type NamedMemberNamesOf<T extends any, K extends Extended<T> = Extended<T>> = StringKeyOf<K>
// let c:NamedMemberNamesOf<{a:1,b:'s'}>

/** ObjectStringKeyValueUnion<{a:1,b:'s'}>===1|'s' */
export type ObjectStringKeyValueUnion<T extends any, K extends Extended<T> = Extended<T>> = ObjectStringKeyValue<
  K,
  ObjectStringKeyUnion<K>
>
// let c:ObjectStringKeyValueUnion<{a:1,b:'s'}>

// export type NamedMemberValueOf<T extends any, K extends StringKeyOf<T>> = ValueOfStringKey<Extended<T>, K>
// let c:NamedMemberValueOf<{a:1,b:'s'},'b'>

// export type NamedMemberValueOf2<T extends any, K extends string> = ObjectStringKeyValue<Extended<T>, K>
// // let c:NamedMemberValuesOf<{a:1,b:'s'}>

/**takes an object, and returns its values in an intersection. ObjectStringValueIntersection<{a:2,b:'0'}> === 'a'&2*/
export type ObjectStringValueIntersection<T> = { [K in keyof T]: (p: T[K]) => void } extends {
  [n: string]: (p: infer I) => void
}
  ? I
  : never
// let g : ObjectStringValueIntersection<{a:2,b:'0'}>
// type a = ObjectStringValueIntersection<I> // => number & string & string

/** counts given object keys : CountKeys<{a:5,g:0,b:'s'}> === 3*/
export type ObjectKeyLength<T> = KeysToTuple<T>['length']
// let a: ObjectKeyLength<{a:5,g:0,b:'s'}>

/** KeysToTuple<{a:1,b:5,9:2}> === ['a','b',9]*/
export type KeysToTuple<T> =
  // pass the intersection of these functions to create the tuple type
  // store the keys as arguments to functions so that they can be retrieved with inference later
  IntersectionOfFunctionsToTuple<
    // convert each key into a function that takes that key type as an argument
    ObjectStringValueIntersection<{ [K in keyof T]: (v: K) => void }>
  >
// let h: KeysToTuple<{a:1,b:5,9:2}>

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


  export type Map<V> = {[key:string]: V}

export type ValueOfNumberKey<T extends {
	[k: number]: any;
}, K extends number> = T[K];
export type StringKeyOf<T extends any> = Extract<keyof T, string>;
export type NumberKeyOf<T extends any> = Extract<keyof T, number>;