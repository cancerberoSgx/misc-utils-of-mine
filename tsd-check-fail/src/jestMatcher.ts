import {Options, TypeRepresentation} from './types'
import {checkType} from './checkType'
import {escapeValue} from './util'

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchType<T>(type: TypeRepresentation<T>, options?: Options): R
    }
  }
}

expect.extend({
  toMatchType<T>(value: T, type: TypeRepresentation<T>, options: Options = {}) {
    const r = checkType(type, value, options)
    return {
      pass: r.pass,
      message: () =>
        `expect value ${escapeValue(value, options)} to match ${
          typeof type === 'string' ? `type ${type}` : `types in code "${r.testCode}"`
        }but it failed with with errors [${
          r.failErrors ? r.failErrors.map(r => r.message).join('\n') : r.error ? r.error : 'UNKNOWN'
        }]`,
    }
  },
})
