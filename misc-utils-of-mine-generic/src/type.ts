var toStr = Object.prototype.toString

export function getTypeScript(type: any) {
  return toStr.call(type)
}
export function isObject(obj: any) {
  return typeof obj === 'object' && getTypeScript(obj) === '[object Object]'
}

export var isArray =
  Array.isArray ||
  function(obj: any) {
    return toStr.call(obj) === '[object Array]'
  }

export function isBoolean(obj: any) {
  return typeof obj === 'boolean' || getTypeScript(obj) === '[object Boolean]'
}

/**
 * Get type of variable
 * @param mixed input
 * @return string
 *
 * @see http://jsperf.com/typeofvar
 */
export function typeOf(input: any) {
  return {}.toString
    .call(input)
    .slice(8, -1)
    .toLowerCase()
}

export type RemoveProperties<O, K extends keyof O> = Pick<O, Exclude<keyof O, K>>
export type PropertyOptional<O, K extends keyof O> = RemoveProperties<O, K> & ({ [a in K]?: O[K] })
