import { installArrayPrototypeFind } from '../..'

describe('array', () => {
  it('prototypeFind', () => {
    const originalFind = Array.prototype.find
    try {
      installArrayPrototypeFind(true)
      expect(originalFind).not.toStrictEqual(Array.prototype.find)
      expect([1, 2, 3].find(i => i === 1)).toBe(1)
      expect([1, 2, 3].find(i => i === 5)).toBe(undefined)
      expect(
        ['a', 'w'].find(function(n, i, a) {
          expect(a).toEqual(['a', 'w'])
          expect(i).toBeLessThan(2)
          expect(i).toBeGreaterThan(-1)
          expect(['a', 'w']).toContain(n)
          expect(this).toEqual('hello')
          return false
        }, 'hello')
      ).toBe(undefined)
    } catch (error) {
      Array.prototype.find = originalFind
      fail(error)
    }
  })
})
