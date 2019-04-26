import { number, string, boolean } from './testUtil'
import 'tsd-check-runtime'
import { Type } from 'tsd-check-runtime'
import { Extends } from '../inheritance'
import { If, And, Or } from '../conditional'
import { ArrayLiteral, ArrayItem } from '../array'
import { get, fileVariables } from './__tsd_check_runtime__'

describe('conditional', () => {
  it('should if, and, or', () => {
    const v1 = number() || string() || boolean()
    type V1 = typeof v1
    expect(v1).toMatchType(Type<If<Extends<number, V1>, V1, never>>(get(1, 0)))
    expect(v1).toMatchType(Type<If<And<Extends<number, V1>, Extends<string, V1>>, V1, never>>(get(1, 1)))
    expect(v1).not.toMatchType(Type<If<And<Extends<Date, V1>, Or<Extends<never, V1>, false>>, V1, never>>(get(1, 2)))
  })

  it('conditionals and arrays', () => {
    interface A {
      a?: number
    }
    interface B extends A {
      b?: string
    }
    interface C extends A {
      c?: boolean
    }
    const v2 = [{ c: true }, { a: 1 }, { b: 's' }]
    type V2 = [{ c: true }, { a: 1 }, { b: 's' }]
    expect(v2).toMatchType(Type<[C, A, B]>(get(1, 3)))
    expect(v2).not.toMatchType(Type<[A, A, B]>(get(1, 4)))
    expect(v2).not.toMatchType(Type<[C, A]>(get(1, 5)))
    expect(v2).not.toMatchType(Type<ArrayLiteral<A, 3>>(get(1, 6)))
    expect(v2).toMatchType(Type<ArrayLiteral<B | C, 3>>(get(1, 7)))
    expect(v2).not.toMatchType(Type<ArrayLiteral<A | C, 3>>(get(1, 8)))
    type TT<T> = If<Extends<T, C>, C, If<Extends<T, B>, B, never>>
    expect(v2).toMatchType(Type<[TT<ArrayItem<V2, 0>>, TT<ArrayItem<V2, 1>>, TT<ArrayItem<V2, 2>>]>(get(1, 9)))
    expect(v2).not.toMatchType(Type<[TT<ArrayItem<V2, 0>>, TT<ArrayItem<V2, 2>>, TT<ArrayItem<V2, 1>>]>(get(1, 10)))
  })
})
