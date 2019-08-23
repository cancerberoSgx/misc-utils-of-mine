// import { installArrayPrototypeFind } from '../..'
import { arrayDifference, arrayInterception, arrayUnion } from "../set"
// import { FindPredicate } from '../prototypeFind'
// declare global {
//   interface Array<T> {
//     find<S extends T>(predicate: FindPredicate<T, typeof thisArg>, thisArg?: any): S | undefined
//     find(predicate: FindPredicate<T, typeof thisArg>, thisArg?: any): T | undefined
//   }
// }
describe('array', () => {
  // xit('prototypeFind - obsoleted', () => {
  //   const originalFind = Array.prototype.find
  //   try {
  //     // installArrayPrototypeFind(true)
  //     expect(originalFind).not.toStrictEqual(Array.prototype.find)
  //     expect([1, 2, 3].find(i => i === 1)).toBe(1)
  //     expect([1, 2, 3].find(i => i === 5)).toBe(undefined)
  //     expect(
  //       ['a', 'w'].find(function(n, i, a) {
  //         expect(a).toEqual(['a', 'w'])
  //         expect(i).toBeLessThan(2)
  //         expect(i).toBeGreaterThan(-1)
  //         expect(['a', 'w']).toContain(n)
  //         expect(this).toEqual('hello')
  //         return false
  //       }, 'hello')
  //     ).toBe(undefined)
  //   } catch (error) {
  //     Array.prototype.find = originalFind
  //     fail(error)
  //   }
  // })

  it('arrayUnion', () => {
    expect(arrayUnion([{ a: 1 }, { a: 2 }], [{ a: 1 }, { a: 2 }], (a, b) => a.a === b.a)).toEqual([{ a: 1 }, { a: 2 }])
  })

  it('arrayInterception', () => {
    expect(arrayInterception([{ a: 1 }, { a: 2 }], [{ a: 1 }, { a: 2 }], (a, b) => a.a === b.a)).toEqual([
      { a: 1 },
      { a: 2 }
    ])
  })

  it('arrayDifference', () => {
    expect(arrayDifference([{ a: 1 }, { a: 2 }], [{ a: 1 }, { a: 2 }], (a, b) => a.a === b.a)).toEqual([])
  })
})
