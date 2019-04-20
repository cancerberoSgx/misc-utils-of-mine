import { EmptyObject, ObjectStringKeyUnion } from 'misc-utils-of-mine-typescript'

export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): ObjectStringKeyUnion<Field>[] {
  return Object.keys(o) as ObjectStringKeyUnion<Field>[]
}
/**
 * Returns a new object with the same keys of given one, and values mapped with given function
 */
export function objectMapValues<O extends { [k in keyof O]: O[keyof O] } = any, T = any>(
  o: O,
  p: (k: keyof O, v: O[keyof O]) => T
): { [k in keyof O]: T } {
  var r: { [k in keyof O]: T } = {} as any
  objectKeys(o).forEach(k => {
    r[k] = p(k, o[k])
  })
  return r
}
export const objectMap = objectMapValues

export function objectFilter<O extends { [k in keyof O]: O[keyof O] } = any>(
  o: O,
  p: (k: keyof O, v: O[keyof O]) => boolean
): Partial<O> {
  var r: Partial<O> = {}
  objectKeys(o)
    .filter((k, v) => p(k, o[k]))
    .forEach(k => {
      r[k] = o[k]
    })
  return r
}

/**
 * build an object using keys in [[a]] and values returning from [[fn]] as long as they are not undefined
 */
export function arrayToObject<T = any>(a: string[], fn: (a: string) => T | undefined) {
  const o: { [s: string]: T } = {}
  a.forEach(k => {
    const v = fn(k)
    if (typeof v !== 'undefined') {
      o[k] = v
    }
  })
  return o
}

/**
 * Returns a nested property of given object and given path. For example path could be 'foo.bar' and it will return `object['foo']['bar']`
 */
export function getObjectProperty<T>(
  object: any,
  path: string | string[],
  defaultValue: T | undefined = undefined
): T | undefined {
  if (!path) {
    return object
  } else if (object) {
    var tokens = typeof path === 'string' ? path.split('.') : path,
      prev = object,
      n = 0
    while (typeof prev !== 'undefined' && n < tokens.length) {
      prev = prev[tokens[n++]]
    }
    if (typeof prev !== 'undefined') {
      return prev
    }
  }
  return defaultValue
}

/**
 * sets a nested property on given path. For example path could be 'foo.bar' and it will set `object.foo.bar = value`
 */
export function setObjectProperty<T>(object: any, path: string | string[], value: T) {
  if (!path) {
    return
  } else if (!object) {
    return
  }
  var tokens = typeof path === 'string' ? path.split('.') : path,
    prev = object
  for (var i = 0; i < tokens.length - 1; ++i) {
    var currentToken = tokens[i]
    if (typeof prev[currentToken] === 'undefined') {
      prev[currentToken] = {}
    }
    prev = prev[currentToken]
  }
  if (tokens.length) {
    prev[tokens[tokens.length - 1]] = value
  }
}
