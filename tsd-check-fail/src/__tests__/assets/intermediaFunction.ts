import {checkType} from '../../checkType'
import {Fail, Options} from '../../types'

export function intermediateFunction<T>(
  typeOrFunction: string | ((value: T) => string),
  value: T,
  options: Options = {},
): Fail {
  return checkType(typeOrFunction, value, options)
}
