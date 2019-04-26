import 'tsd-check-runtime'
import { UnionOf } from '..'
import { expectType, Type, PrefixedText } from 'tsd-check-runtime'
import {
  ArrayLength,
  Tuple,
  ArrayTail,
  ArrayUnshift,
  ArrayValueOfStringKey,
  ArrayStringKeyIntersection,
  ArrayIndexUnion,
  ArrayItemKeyUnion,
  ArrayLiteral
} from '../array'
import { number, string, boolean, union } from './testUtil'
import { get, fileVariables } from './__tsd_check_runtime__'

describe('array', () => {
  describe('unionOf', () => {
    it('should work jest matcher toMatchType', () => {
      expect('a').not.toMatchType(`UnionOf<[1, false]>`)
      expect(2).not.toMatchType(`UnionOf<[1, false]>`)
      expect(1).toMatchType(`UnionOf<[1, false]>`)
    })

    it('should work with get-type-text', () => {
      expect('a').not.toMatchType(Type<UnionOf<[1, false]>>(get(0, 0)))
      expect(2).not.toMatchType(Type<UnionOf<[1, false]>>(get(0, 1)))
      expect(1).toMatchType(Type<UnionOf<[1, false]>>(get(0, 2)))
    })
  })

  describe('Tuple and ArrayLength', () => {
    it('Tuple', () => {
      expect([[{ a: 1 }], [{ a: '2' }]]).not.toMatchType(Type<Tuple<[{ a: string }], 2>>(get(0, 3)))
      expect([[{ a: '2' }], [{ a: '2' }]]).toMatchType(Type<Tuple<[{ a: string }], 2>>(get(0, 4)))

      // dont validate accessing out of range - see ArrayLiteral next that it does but is hard coded
      expect(Type<Tuple<[{ a: string }], 2>>(get(0, 5))).toMatchType(
        v => `
        var a: ${v} = null as any as ${v}
        var b = a[33] // it does not fail!
        `,
        { asString: true }
      )

      expect(
        expectType(
          v => `
          var a: ${v} = null as any as ${v}
          var b = a[33] // it does not fail!
           `,
          Type<Tuple<[{ a: string }], 2>>(get(0, 6)),
          { asString: true }
        )
      ).toBe(true)

      expect(
        expectType(
          v => `
          var a: ${v} = null as any as ${v}
          var b = a[1] // it does not fail!
          `,
          Type<Tuple<[{ a: string }], 2>>(get(0, 7)),
          { asString: true }
        )
      ).toBe(true)
    })
  })

  it('ArrayLiteral', () => {
    expect([[{ a: 1 }], [{ a: '2' }]]).not.toMatchType(Type<ArrayLiteral<[{ a: string }], 2>>(get(0, 8)))
    expect([[{ a: '2' }], [{ a: '2' }]]).toMatchType(Type<ArrayLiteral<[{ a: string }], 2>>(get(0, 9)))
    expect([1, 2, 3]).not.toMatchType(Type<ArrayLiteral<number, 2>>(get(0, 10)))
    expect([1, 2]).toMatchType(Type<ArrayLiteral<number, 2>>(get(0, 11)))
    expect([1]).not.toMatchType(Type<ArrayLiteral<number, 2>>(get(0, 12)))
    // validates accessing out of range - see ArrayLiteral next that it does but is hard coded
    expect(Type<ArrayLiteral<[{ a: string }], 2>>(get(0, 13))).not.toMatchType(
      v => `
        var a: ${v} = null as any as ${v}
        var b = a[33] // it does not fail!
        `,
      { asString: true }
    )
    expect(Type<ArrayLiteral<[{ a: string }], 2>>(get(0, 14))).toMatchType(
      v => `
        var a: ${v} = null as any as ${v}
        var b = a[1] 
        `,
      { asString: true }
    )
    expect(
      expectType(
        v => `
            var a: ${v} = null as any as ${v}
            var b = a[33]  
            `,
        Type<ArrayLiteral<[{ a: string }], 2>>(get(0, 15)),
        { asString: true }
      )
    ).toBe(false)
  })

  it('arrayLiteral real world', () => {
    interface A {
      a?: number
    }
    interface B extends A {
      b?: string
    }
    interface C extends A {
      c?: boolean
    }
    expect([{ c: true }, { a: 1 }, { b: 's' }]).not.toMatchType(Type<ArrayLiteral<B | C, 2>>(get(0, 16)))
    expect([{ a: 1 }, { d: 's' }]).not.toMatchType(Type<ArrayLiteral<B | C, 2>>(get(0, 17)))
    expect([{ a: 1 }, { c: new Date() }]).not.toMatchType(Type<ArrayLiteral<B | C, 2>>(get(0, 18)))
  })
})

describe('the rest', () => {
  it('LengthOf', () => {
    expect(1).not.toMatchType(Type<ArrayLength<[1, false]>>(get(0, 19)))
    expect(2).toMatchType(Type<ArrayLength<[1, false]>>(get(0, 20)))
  })

  it('ArrayTail', () => {
    expect([2, 1]).toMatchType(Type<ArrayTail<[3, 2, 1]>>(get(0, 21)))
    expect([1, 2]).not.toMatchType(Type<ArrayTail<[3, 2, 1]>>(get(0, 22)))
  })

  it('ArrayUnshift', () => {
    expect([1, 3, 2]).toMatchType(Type<ArrayUnshift<[3, 2], 1>>(get(0, 23)))
    expect([1, 2, 3]).not.toMatchType(Type<ArrayUnshift<[3, 2, 1], 1>>(get(0, 24)))
  })

  it('ArrayValueOfStringKey', () => {
    expect(number() || string() || boolean()).not.toMatchType(
      Type<ArrayValueOfStringKey<[{ a: 1 }, { a: 's' }, { a: true }], 'a'>>(get(0, 25))
    )
    expect([string()] || boolean() || number() * 2).not.toMatchType(
      Type<ArrayValueOfStringKey<[{ a: 1 }, { a: 's' }, { a: true }], 'a'>>(get(0, 26))
    )
    expect(true).toMatchType(Type<ArrayValueOfStringKey<[{ a: 1 }, { a: 's' }, { a: true }], 'a'>>(get(0, 27)))

    expect(true || 's' || 1).toMatchType(
      Type<ArrayValueOfStringKey<[{ a: 1 }, { a: 's' }, { a: true }], 'a'>>(get(0, 28))
    )
  })

  it('ArrayStringKeyValueUnion', () => {
    expect('b').toMatchType(
      Type<ArrayStringKeyIntersection<[{ a: 1; b: 6; c: 4 }, { b: 's' }, { c: true; b: 0 }]>>(get(0, 29))
    )

    expect('a').not.toMatchType(
      Type<ArrayStringKeyIntersection<[{ a: 1; b: 6; c: 4 }, { b: 's' }, { c: true; b: 0 }]>>(get(0, 30))
    )

    // let c:ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's', c: 9}, {c: true; b: 0}]>
    expect('b').not.toMatchType(
      Type<ArrayStringKeyIntersection<[{ a: 1; c: 4 }, { b: 's' }, { c: true; b: 0 }]>>(get(0, 31))
    )
  })

  it('ArrayIndexUnion', () => {
    expect('0' || '1' || '2').toMatchType(
      Type<ArrayIndexUnion<[{ a: 1; b: 6; c: 4 }, { b: 's' }, { c: true; b: 0 }]>>(get(0, 32))
    )
    expect(union('0', '1', '2')).toMatchType(
      Type<ArrayIndexUnion<[{ a: 1; c: 4 }, { b: 's' }, { c: true; b: 0 }]>>(get(0, 33))
    )
  })

  it('ArrayItemKeyUnion', () => {
    expect('b' || 'c').toMatchType(
      Type<ArrayItemKeyUnion<[{ a: 1; b: 6; c: 4 }, { b: 's'; a: null; c: 1.2 }, { c: true; b: 0 }]>>(get(0, 34))
    )
    expect('a' || 'c').not.toMatchType(
      Type<ArrayItemKeyUnion<[{ a: 1; b: 6; c: 4 }, { b: 's'; a: null; c: 1.2 }, { c: true; b: 0 }]>>(get(0, 35))
    )
  })
})

describe('particular problem tsd-check-runtime is good at', () => {
  it('Tuple wont verify out of range access', () => {
    expect(`
      var a: Tuple<number, 2> = null as any as Tuple<number, 2>
      var c:any = a[3] 
    `).toCompile()
  })
  it('ArrayLiteral will verify out of range access', () => {
    expect(`
      var a: ArrayLiteral<number, 2> = null as any as ArrayLiteral<number, 2>
      var c:any = a[3] 
    `).not.toCompile()
  })
})
