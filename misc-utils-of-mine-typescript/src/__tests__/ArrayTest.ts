import 'tsd-check-runtime'
import {UnionOf} from '..'
import {expectType} from 'tsd-check-runtime'
import TypeText from 'get-type-text'
import {
  LengthOf as ArrayLength,
  Tuple,
  ArrayTail,
  ArrayUnshift,
  ArrayValueOfStringKey  ,
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
      expect(1).toMatchType(`UnionOf<[1, false]>` )
    })

    it('should work with get-type-text', () => {
      expect('a').not.toMatchType(TypeText<UnionOf<[1, false]>>('UnionOf<[1, false]>'))
      expect(2).not.toMatchType(TypeText<UnionOf<[1, false]>>('UnionOf<[1, false]>'))
      expect(1).toMatchType(TypeText<UnionOf<[1, false]>>('UnionOf<[1, false]>'))
    })
  })


  describe('Tuple and ArrayLength', () => {
    it('Tuple', () => {
      expect([[{a: 1}], [{a: '2'}]]).not.toMatchType(TypeText<Tuple<[{a: string}], 2>>('Tuple<[{a: string}], 2>'))
      expect([[{a: '2'}], [{a: '2'}]]).toMatchType(TypeText<Tuple<[{a: string}], 2>>('Tuple<[{a: string}], 2>'))

      // dont validate accessing out of range - see ArrayLiteral next that it does but is hard coded
      expect(TypeText<Tuple<[{a: string}], 2>>('Tuple<[{a: string}], 2>')).toMatchType(
        v => `
      declare var a: ${v}
      var b = a[33] // it does not fail!
      `,
        {asString: true},
      )

      expect(
        expectType(
          v => `
    declare var a: ${v}
    var b = a[33] // it does not fail!
    `,
          TypeText<Tuple<[{a: string}], 2>>('Tuple<[{a: string}], 2>'),
          {asString: true},
        ),
      ).toBe(true) // doesn't validate accessing out of range
    })

    it('ArrayLiteral', () => {
      expect([[{a: 1}], [{a: '2'}]]).not.toMatchType(
        TypeText<ArrayLiteral<[{a: string}], 2>>('ArrayLiteral<[{a: string}], 2>'),
      )
      expect([[{a: '2'}], [{a: '2'}]]).toMatchType(
        TypeText<ArrayLiteral<[{a: string}], 2>>('ArrayLiteral<[{a: string}], 2>'),
      )

      // dont validate accessing out of range - see ArrayLiteral next that it does but is hard coded
      expect(TypeText<ArrayLiteral<[{a: string}], 2>>('ArrayLiteral<[{a: string}], 2>')).toMatchType(
        v => `
      declare var a: ${v}
      var b = a[33] // it does not fail!
      `,
      ),
        {asString: true}

      expect(
        expectType(
          v => `
    declare var a: ${v}
    var b = a[33] // it does not fail!
    `,
          TypeText<ArrayLiteral<[{a: string}], 2>>('ArrayLiteral<[{a: string}], 2>'),
          {asString: true},
        ),
      ).toBe(false) // because it validates accesssing out of range - see ArrayLiteral next that it does but is hard coded
    })
  })

  
  describe('the rest', () => {
    it('LengthOf', () => {
      expect(1).not.toMatchType(TypeText<ArrayLength<[1, false]>>('ArrayLength<[1, false]>'))
      expect(2).toMatchType(TypeText<ArrayLength<[1, false]>>('ArrayLength<[1, false]>'))
    })

   
    it('ArrayTail', () => {
      expect([2, 1]).toMatchType(TypeText<ArrayTail<[3, 2, 1]>>('ArrayTail<[3, 2, 1]>'))
      expect([1, 2]).not.toMatchType(TypeText<ArrayTail<[3, 2, 1]>>('ArrayTail<[3, 2, 1]>'))
    })

    it('ArrayUnshift', () => {
      expect([1, 3, 2]).toMatchType(TypeText<ArrayUnshift<[3, 2], 1>>('ArrayUnshift<[3, 2], 1>'))
      expect([1, 2, 3]).not.toMatchType(TypeText<ArrayUnshift<[3, 2, 1], 1>>('ArrayUnshift<[3, 2, 1], 1>'))
    })

    it('ArrayStringKeyValueUnion', () => {
      expect(number() || string() || boolean()).not.toMatchType(
        TypeText<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(
          'ArrayValueOfStringKey<[{a: 1}, {a: \'s\'}, {a: true}], \'a\'>',
        ),
      )
      expect([string()] || boolean() || number() * 2).not.toMatchType(
        TypeText<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(
          'ArrayValueOfStringKey<[{a: 1}, {a: \'s\'}, {a: true}], \'a\'>',
        ),
      )
      expect(true).toMatchType(
        TypeText<ArrayValueOfStringKey<[{a: 1}, {a: 's'}, {a: true}], 'a'>>(
          'ArrayValueOfStringKey<[{a: 1}, {a: \'s\'}, {a: true}], \'a\'>',
        ),
      )
    })

    it('ArrayStringKeyIntersection', () => {
      expect('b').toMatchType(
        TypeText<ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>>(
          'ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: \'s\'}, {c: true; b: 0}]>',
        ),
      )
      expect('b').not.toMatchType(
        TypeText<ArrayStringKeyIntersection<[{a: 1; c: 4}, {b: 's'}, {c: true; b: 0}]>>(
          'ArrayStringKeyIntersection<[{a: 1; c: 4}, {b: \'s\'}, {c: true; b: 0}]>',
        ),
      )
    })

    it('arrayIndexUnion', () => {
      expect('0' || '1' || '2').toMatchType(
        TypeText<ArrayIndexUnion<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>>(
          'ArrayIndexUnion<[{a: 1; b: 6; c: 4}, {b: \'s\'}, {c: true; b: 0}]>',
        ),
      )
      expect(union('0', '1', '2')).toMatchType(
        TypeText<ArrayIndexUnion<[{a: 1; c: 4}, {b: 's'}, {c: true; b: 0}]>>(
          'ArrayIndexUnion<[{a: 1; c: 4}, {b: \'s\'}, {c: true; b: 0}]>',
        ),
      )
    })

    it('ArrayItemKeyUnion', () => {
      expect('b' || 'c').toMatchType(
        TypeText<ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>>(
          'ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: \'s\'; a: null; c: 1.2}, {c: true; b: 0}]>',
        ),
      )
      expect('a' || 'c').not.toMatchType(
        TypeText<ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>>(
          'ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: \'s\'; a: null; c: 1.2}, {c: true; b: 0}]>',
        ),
      )
    })

  })
})



describe('particular problem tsd-check-runtime is good at', ()=>{
  it('Tuple wont verify out of range access', ()=>{
    expect(`
      declare var a: Tuple<number, 2>
      var c = a[3] 
    `).toCompile()
  })
  it('ArrayLiteral will verify out of range access', ()=>{
    expect(`
      declare var a: ArrayLiteral<number, 2>
      var c = a[3] 
    `).not.toCompile()
  })
})

