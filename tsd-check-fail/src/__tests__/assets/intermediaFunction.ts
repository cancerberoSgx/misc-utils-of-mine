import {checkType} from '../../checkType'
import {Fail, Options, TypeRepresentation} from '../../types'

export function intermediateFunction<T>(typeOrFunction: TypeRepresentation<T>, value: T, options: Options = {}): Fail {
  return checkType(typeOrFunction, value, options)
}
