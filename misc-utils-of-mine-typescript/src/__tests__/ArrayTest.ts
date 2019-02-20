import 'tsd-check-runtime'
import {UnionOf} from '..'
import {expectType, Type, PrefixedText} from 'tsd-check-runtime'
import {
  ArrayLength,
  Tuple,
  ArrayTail,
  ArrayUnshift,
  ArrayValueOfStringKey,
  ArrayStringKeyIntersection,
  ArrayIndexUnion,
  ArrayItemKeyUnion,
  ArrayLiteral,
} from '../array'
import {number, string, boolean, union} from './testUtil'

describe('array', () => {
  describe('unionOf', () => {
    it('should work jest matcher toMatchType', () => {
      expect('a').not.toMatchType(`UnionOf<[1, false]>`)
      expect(2).not.toMatchType(`UnionOf<[1, false]>`)
      expect(1).toMatchType(`UnionOf<[1, false]>`)
    })

    it('should work with get-type-text', () => {
      expect('a').not.toMatchType(Type<UnionOf<[1, false]>>())
      expect(2).not.toMatchType(Type<UnionOf<[1, false]>>())
      expect(1).toMatchType(Type<UnionOf<[1, false]>>())
    })
  })

  describe('Tuple and ArrayLength', () => {
    it('Tuple', () => {
      expect([[{a: 1}], [{a: '2'}]]).not.toMatchType(
        Type<Tuple<[{a: string}], 2>>(),
      )
      expect([[{a: '2'}], [{a: '2'}]]).toMatchType(
        Type<Tuple<[{a: string}], 2>>(),
      )

      // dont validate accessing out of range - see ArrayLiteral next that it does but is hard coded
      expect(Type<Tuple<[{a: string}], 2>>()).toMatchType<PrefixedText>(
        v => `
        var a: ${v.text} = null as any as ${v.text}
        var b = a[33] // it does not fail!
        `,
        {asString: true},
      )

      expect(
        expectType(
          v => `
          var a: ${v.text} = null as any as ${v.text}
          var b = a[33] // it does not fail!
           `,
          Type<Tuple<[{a: string}], 2>>(),
          {asString: true},
        ),
      ).toBe(true) // doesn't validate accessing out of range

      expect(
        expectType(
          v => `
          var a: ${v.text} = null as any as ${v.text}
          var b = a[1] // it does not fail!
          `,
          Type<Tuple<[{a: string}], 2>>(),
          {asString: true},
        ),
      ).toBe(true)
    })
  })

  it('ArrayLiteral', () => {
    expect([[{a: 1}], [{a: '2'}]]).not.toMatchType(
      Type<ArrayLiteral<[{a: string}], 2>>(),
    )
    expect([[{a: '2'}], [{a: '2'}]]).toMatchType(
      Type<ArrayLiteral<[{a: string}], 2>>(),
    )
    expect([1, 2, 3]).not.toMatchType(Type<ArrayLiteral<number, 2>>())
    expect([1, 2]).toMatchType(Type<ArrayLiteral<number, 2>>())
    expect([1]).not.toMatchType(Type<ArrayLiteral<number, 2>>())
    // validates accessing out of range - see ArrayLiteral next that it does but is hard coded
    expect(
      Type<ArrayLiteral<[{a: string}], 2>>(),
    ).not.toMatchType<PrefixedText>(
      v => `
        var a: ${v.text} = null as any as ${v.text}
        var b = a[33] // it does not fail!
        `,
      {asString: true},
    ),
      expect(
        Type<ArrayLiteral<[{a: string}], 2>>(),
      ).toMatchType<PrefixedText>(
        v => `
        var a: ${v.text} = null as any as ${v.text}
        var b = a[1] // it does not fail!
        `,
        {asString: true},
      ),
      expect(
        expectType(
          v => `
            var a: ${v.text} = null as any as ${v.text}
            var b = a[33] // it does not fail!
            `,
          Type<ArrayLiteral<[{a: string}], 2>>(),
          {asString: true},
        ),
      ).toBe(false)
  })
})

describe('the rest', () => {
  it('LengthOf', () => {
    expect(1).not.toMatchType(Type<ArrayLength<[1, false]>>())
    expect(2).toMatchType(Type<ArrayLength<[1, false]>>())
  })

  it('ArrayTail', () => {
    expect([2, 1]).toMatchType(Type<ArrayTail<[3, 2, 1]>>())
    expect([1, 2]).not.toMatchType(Type<ArrayTail<[3, 2, 1]>>())
  })

  it('ArrayUnshift', () => {
    expect([1, 3, 2]).toMatchType(Type<ArrayUnshift<[3, 2], 1>>())
    expect([1, 2, 3]).not.toMatchType(
      Type<ArrayUnshift<[3, 2, 1], 1>>(),
    )
  })

  it('ArrayValueOfStringKey', () => {
    expect(number() || string() || boolean()).not.toMatchType(
      Type<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(),
    )
    expect([string()] || boolean() || number() * 2).not.toMatchType(
      Type<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(),
    )
    expect(true).toMatchType(
      Type<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(),
    )

    expect(true || 's' || 1).toMatchType(
      Type<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(),
    )
  })

  it('ArrayStringKeyValueUnion', () => {
    expect('b').toMatchType(
      Type<ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>>(),
    )

    expect('a').not.toMatchType(
      Type<ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>>(),
    )

    // let c:ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's', c: 9}, {c: true; b: 0}]>
    expect('b').not.toMatchType(
      Type<ArrayStringKeyIntersection<[{a: 1; c: 4}, {b: 's'}, {c: true; b: 0}]>>(),
    )
  })

  it('ArrayIndexUnion', () => {
    expect('0' || '1' || '2').toMatchType(
      Type<ArrayIndexUnion<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>>(),
    )
    expect(union('0', '1', '2')).toMatchType(
      Type<ArrayIndexUnion<[{a: 1; c: 4}, {b: 's'}, {c: true; b: 0}]>>(),
    )
  })

  it('ArrayItemKeyUnion', () => {
    expect('b' || 'c').toMatchType(
      Type<ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>>(),
    )
    expect('a' || 'c').not.toMatchType(
      Type<ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>>(),
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
