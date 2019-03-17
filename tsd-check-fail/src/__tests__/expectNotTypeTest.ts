import { expectTypeNotToBe } from '../expectNotType';
import { KeysToTuple } from './assets/type2';
import { If, IsString } from './assets/type1';

test('should not fail if type don\'t match', () => {
  const result = expectTypeNotToBe('number', '1')
  expect(result.fail).toBe(true)
})

test('should not fail if type match', () => {
  const result = expectTypeNotToBe('number', 1)
  expect(result.fail).toBe(false)
})

test('can reference types from other files', () => {
  type CoolType = If<IsString<1>, 1, 0>  // we want to keep this code here because we cannot remove the imports
  let result = expectTypeNotToBe(value => `
      var b = Math.random()>0.5 ? 1 : '1'
      type CoolType = If<IsString<typeof b>, 'greater than 0.5', 'lower than 0.5'>
      var a: CoolType = '${value}'`, 'equals 2 * 3')
  expect(result.fail).toBe(true)

  result = expectTypeNotToBe(value => `
      var b = Math.random()>0.5 ? 1 : '1'
      var a: If<IsString<typeof b>, 'greater than 0.5', 'lower than 0.5'> = '${value}'`, 'greater than 0.5')
  expect(result.fail).toBe(false)
})

test('should allow to pass an array value', () => {
  type CoolType = KeysToTuple<Date> // we want to keep this code here because we cannot remove the imports
  let result = expectTypeNotToBe(value => `
      var a: KeysToTuple<Date> = ${JSON.stringify(value)}`, ['these are', 'not the keys of Date'])
  expect(result.fail).toBe(true)
  result = expectTypeNotToBe(value => `
      var a: KeysToTuple<Date> = ${JSON.stringify(value)}`, ["toUTCString", "toISOString", "toJSON"])
  expect(result.fail).toBe(false)

})

test('should allow to pass an function value', () => {
  let result = expectTypeNotToBe(value => `
      type F = (...args: any[])=>number
      var a: F = ${value.toString()}`, () => 'fails')
  expect(result.fail).toBe(true)

  result = expectTypeNotToBe(value => `
      type F = (...args: any[])=>number
      var a: F = ${value.toString()}`, () => Math.PI)
  expect(result.fail).toBe(false)
})


test('should reference types in the global scope', () => {
  let result = expectTypeNotToBe(`Global<'hello'>`, 1)
  expect(result.fail).toBe(true)

  result = expectTypeNotToBe(`Global<'hello'>`, '')
  expect(result.fail).toBe(false)
})

type Global<T> = T extends string ? string : never
// var a: Global<'hello'> = 'is string'