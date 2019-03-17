import {checkTypeCore} from './checkType'
import {Options} from './types'

export function expectType<T>(
  typeOrFunction: string | ((value: T) => string),
  value: T,
  options: Options = {},
): boolean {
  const result = checkTypeCore(typeOrFunction, value, options)
  return result.pass
}
