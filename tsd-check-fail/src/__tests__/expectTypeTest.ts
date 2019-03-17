import {expectType} from '../expectType'

import {KeysToTuple} from './assets/type2'
test('types imported from other files or projects is fine', () => {
  expect(expectType('KeysToTuple<typeof Object.prototype>', 'will fail')).toBe(false)
  expect(
    expectType('KeysToTuple<typeof Object.prototype>', ['hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable'], {
      printResultIfFail: true,
    }),
  ).toBe(true)
})

type UnionOf<T extends any[]> = T[number]
test('types declared in the global scope of this file (cannot be declared in a closure)', () => {
  expect(expectType('UnionOf<[1,2]>', 'will fail')).toBe(false)
  expect(expectType('UnionOf<[1,2]>', 1)).toBe(true)
  expect(expectType('UnionOf<[1,2]>[]', [2, 1])).toBe(true)
  expect(expectType('UnionOf<[1,2]>[]', [1, 2, 3])).toBe(false)
})

test('should use functions and value is escaped automatically', () => {
  expect(
    expectType(
      value => `
      type F = (...args: any[])=>number
      var a: F = ${value}`,
      () => 'fails',
    ),
  ).toBe(false)
  expect(
    expectType(
      value => `
      type F = (...args: any[])=>number
      var a: F = ${value}`,
      () => Math.E,
    ),
  ).toBe(true)
})

test('types lost wont impact if types can be inferred, but it will cause false positives', () => {
  expect(expectType(value => `const v: typeof Math.pow = ${value}`, (a: number, b: number) => 1)).toBe(true)
  expect(expectType(value => `const v: typeof Math.pow = ${value}`, (a: string, b: Date) => 1)).toBe(true) // this should not match, but because types are lost it does
})
