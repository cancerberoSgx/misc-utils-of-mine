import {expectType} from '../expectType'
import {KeysToTuple} from './assets/type2'
import {checkType} from '../checkType'
type UnionOf<T extends any[]> = T[number]

test('expectType - the high level API', () => {
  // you can safely reference an imported type:
  expect(expectType('KeysToTuple<typeof Object.prototype>', 'will fail')).toBe(false)
  expect(
    expectType('KeysToTuple<typeof Object.prototype>', ['hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable']),
  ).toBe(true)

  // you can reference a local type as long as it's declared in the global scope of the file, like UnionOf:
  expect(expectType('UnionOf<[1,2]>', 'will fail')).toBe(false)
  expect(expectType('UnionOf<[1,2]>', 1)).toBe(true)
  expect(expectType('UnionOf<[1,2]>[]', [2, 1])).toBe(true)
  expect(expectType('UnionOf<[1,2]>[]', [1, 2, 3])).toBe(false)

  // for more complex stuff, define the type with a string template. in this case you will need to supply the test code
  // yourself. Note: the value is already escaped for you
  expect(expectType(value => `const v: ReturnType<typeof Math.min> = ${value}`, 'invalid')).toBe(false)
  expect(expectType(value => `const v: ReturnType<typeof Math.min> = ${value}`, Math.PI)).toBe(true)

  // IMPORTANT: Never pass types in the value The following will fail although it should match, because all type
  // information of the value is lost. This is because `describe` the test expression results in something like this:
  // `const v: typeof describe = function describe(description, specDefinitions) {return env.describe(description,
  // specDefinitions)`
  expect(expectType(value => `const v: typeof describe = ${value}`, describe)).toBe(false)

  // another example, this is a false positive caused by the lost ot type information. Because the types are inferred if
  // not declared, it will match but it shouldn't:
  expect(expectType(value => `const v: typeof Math.pow = ${value}`, (a: Date, b: string) => 2)).toBe(true)

  //if you really need to do so, use the option dontEscape and pass the string literal yourself:
  expect(expectType(value => `const v: typeof Math.pow = ${value}`, `(a:Date, b:string)=>1`, {dontEscape: true})).toBe(
    false,
  )
  expect(
    expectType(value => `const v: typeof Math.pow = ${value}`, `(a:number, b:number)=>1`, {dontEscape: true}),
  ).toBe(true)

  // if you want to play safer use the option `enforceJsonValues` so functions are not allowed. Functions are dangerous
  // because parameters and return values are not declared - only their type is. The following fails because JSON values
  // are enforced:
  expect(expectType(value => `const v: typeof describe = ${value}`, describe, {enforceJsonValues: true})).toBe(false)
})
