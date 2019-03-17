import {checkTypeCore} from './checkType'
import {Options, TypeRepresentation} from './types'

export function expectType<T>(typeOrFunction: TypeRepresentation<T>, value: T, options: Options = {}): boolean {
  const result = checkTypeCore(typeOrFunction, value, options)
  return result.pass
}
