/** try to parse given json string. return undefined in case there is an error. */
export function parseJSON<K = any>(s: string, defaultValue: K | undefined = undefined): K | undefined {
  try {
    return JSON.parse(s)
  } catch (error) {
    return defaultValue
  }
}

export function stringifyJSON<K = any>(s: K, defaultValue: string | undefined = undefined): string | undefined {
  try {
    return JSON.stringify(s)
  } catch (error) {
    return defaultValue
  }
}

export function cloneJSON<T>(a: T): T {
  return JSON.parse(JSON.stringify(a))
}

// export function jsonParseOr<K>(s: string, defaultValue: K): K {
//   return parseJSON(s) || defaultValue
// }
