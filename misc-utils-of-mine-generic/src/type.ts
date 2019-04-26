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
