/** try to parse given json string. return undefined in case there is an error. */
export function parseJSON<K = any>(s: string, defaultValue?: K): K | undefined {
  try {
    return JSON.parse(s)
  } catch (error) {
    return defaultValue
  }
}

export function clone<T>(a: T): T {
  return JSON.parse(JSON.stringify(a))
}

// export function jsonParseOr<K>(s: string, defaultValue: K): K {
//   return parseJSON(s) || defaultValue
// }
