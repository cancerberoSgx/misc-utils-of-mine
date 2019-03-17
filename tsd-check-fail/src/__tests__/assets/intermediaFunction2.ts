import {Fail, Options, TypeRepresentation} from '../../types'
import {intermediateFunction} from './intermediaFunction'

export function intermediateFunction2<T>(typeOrFunction: TypeRepresentation<T>, value: T, options: Options = {}): Fail {
  return intermediateFunction(typeOrFunction, value, options)
}
