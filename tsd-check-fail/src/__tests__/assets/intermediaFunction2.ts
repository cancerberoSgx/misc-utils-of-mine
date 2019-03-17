import { Fail, Options } from '../../types';
import { intermediateFunction } from './intermediaFunction';

export function intermediateFunction2<T>(typeOrFunction: string | ((value: T) => string), value: T, options: Options = {}): Fail {
  return intermediateFunction(typeOrFunction, value, options)
}