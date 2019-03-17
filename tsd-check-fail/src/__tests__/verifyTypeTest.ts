import {checkType} from '../checkType'
import {KeysToTuple} from './assets/type2'
import {If, IsString} from './assets/type1'
import {intermediateFunction} from './assets/intermediaFunction'
import {intermediateFunction2} from './assets/intermediaFunction2'

test("should not fail if type don't match", () => {
  const result = checkType('number', '1')
  expect(result.pass).toBe(false)
})

test('should not fail if type match', () => {
  const result = checkType('number', 1)
  expect(result.pass).toBe(true)
})

test('can reference types from other files', () => {
  type CoolType = If<IsString<1>, 1, 0> // we want to keep this code here because we cannot remove the imports
  let result = checkType(
    value => `
      var b = Math.random()>0.5 ? 1 : '1'
      type CoolType = If<IsString<typeof b>, 'greater than 0.5', 'lower than 0.5'>
      var a: CoolType = ${value}`,
    'equals 2 * 3',
  )
  expect(result.pass).toBe(false)

  let result2 = checkType(
    value => `
      var b = Math.random()>0.5 ? 1 : '1'
      var a: If<IsString<typeof b>, 'greater than 0.5', 'lower than 0.5'> = ${value}`,
    'greater than 0.5',
    {printResultIfFail: true},
  )
  expect(result2.pass).toBe(true)
})

test('should allow to pass an array value', () => {
  type CoolType = KeysToTuple<Date> // we want to keep this code here because we cannot remove the imports
  let result = checkType(
    value => `
      var a: KeysToTuple<Date> = ${value}`,
    ['these are', 'not the keys of Date'],
  )
  expect(result.pass).toBe(false)
  result = checkType(
    value => `
      var a: KeysToTuple<Date> = ${value}`,
    ['toUTCString', 'toISOString', 'toJSON'],
  )
  expect(result.pass).toBe(true)
})

test('should allow to pass an function value', () => {
  let result = checkType(
    value => `
      type F = (...args: any[])=>number
      var a: F = ${value}`,
    () => 'fails',
  )
  expect(result.pass).toBe(false)

  result = checkType(
    value => `
      type F = (...args: any[])=>number
      var a: F = ${value}`,
    () => Math.PI,
  )
  expect(result.pass).toBe(true)
})

test('should reference types in the global scope', () => {
  let result = checkType(`Global<'hello'>`, 1)
  expect(result.pass).toBe(false)
  result = checkType(`Global<'hello'>`, '')
  expect(result.pass).toBe(true)
})

test('should allow intermediate function calls', () => {
  let result = intermediateFunction(`number`, 1, {printResultIfFail: true})
  expect(result.pass).toBe(true)
  result = intermediateFunction(`number`, [])
  expect(result.pass).toBe(false)
  result = intermediateFunction2(`number`, 1)
  expect(result.pass).toBe(true)
  result = intermediateFunction2(`number`, [])
  expect(result.pass).toBe(false)
})

test('expectType - the low level API', () => {
  const result = checkType(
    value => `
      var a: KeysToTuple<Date> = ${value}`,
    ['toUTCString', 'toISOString', 'toJSON'],
  )
  if (!result.pass) {
    console.error(result.error, result.code, result.failErrors, result.testCode)
  }
  expect(result.pass).toBe(true)
  expect(typeof result.code).toBe('string')
  expect(result.failErrors).toHaveLength(0)
  expect(typeof result.testCode).toBe('string')
})

type Global<T> = T extends string ? string : never
