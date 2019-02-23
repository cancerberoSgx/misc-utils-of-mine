import { parseJSON } from 'misc-utils-of-mine-generic'

export function localStorageGetJSON<K>(key: string): K | undefined {
  if (window.localStorage) {
    const v = window.localStorage.getItem(key)
    if (v) {
      return parseJSON<K>(v)
    }
  }
}

export function localStorageSetJSON<T>(key: string, value: T) {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
