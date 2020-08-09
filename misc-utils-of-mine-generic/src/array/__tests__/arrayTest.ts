import { randomItems } from "../create"
import { arrayDifference, arrayInterception, arrayUnion } from "../set"

describe('array', () => {

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

  it('randomItems', () => {
    expect(randomItems([1, 2, 3, 4, 5], 2).length).toBe(2)
  })
})
