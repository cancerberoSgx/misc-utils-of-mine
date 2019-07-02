declare var document: any

export function isNode() {
  return typeof process !== 'undefined' && typeof module !== 'undefined' && typeof module.exports !== 'undefined' && (typeof document !== 'undefined' ? document.nodeType !== 9 : true) && typeof module === 'object' && !!module.exports
}

export function isJSDOM() {
  return isNode() && isDOM()
}

export const inNode = isNode

export function inBrowser() {
  // @ts-ignore
  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof Node !== 'undefined' && document.nodeType === Node.DOCUMENT_NODE
}

export const isBrowser = inBrowser

export const inDOM = inBrowser

export const isDOM = inBrowser

export function isWebWorker() {
  // @ts-ignore
  return !isDOM() && !isNode() && typeof self !== 'undefined' && typeof self.onmessage !== 'undefined'
}

declare var self: any, window:any
//@ts-ignore
const _this = this
export function getGlobal(): any {
  // @ts-ignore
  return isWebWorker() ? self : isNode() ? global : isBrowser() ? window : _this
}
