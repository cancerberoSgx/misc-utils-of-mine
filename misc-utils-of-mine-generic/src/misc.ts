export function isNode() {
  return typeof module === 'object' && module && typeof module.exports === 'object' && module.exports
}

export function inBrowser() {
  // @ts-ignore
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function isWebWorker() {
  // @ts-ignore
  return typeof self !== 'undefined' && typeof self.onmessage === 'object'
}

declare var self: any
export function getGlobal(): any {
  // @ts-ignore
  return typeof self !== 'undefined' && typeof self.onmessage === 'object' ? self : global
}
