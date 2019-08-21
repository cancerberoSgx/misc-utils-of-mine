import { objectToArray } from './object'
import { isArray } from './type'

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

export function visitJson(o: JSONValue, v: (o: JSONValue) => boolean): boolean {
  if (isArray(o)) {
    return v(o) || o.some(v)
  }
  else if (typeof o === 'object') {
    return v(o) || objectToArray(o).some(v)
  }
  else {
    return v(o)
  }
}

export type JSONPrimitive = string | number | boolean | null

/** makes sure an object is JSON compatible so we can safely serialize with JSON.stringify */
export type JSONValue = JSONPrimitive | JSONObject | JSONArray

export type JSONObject = {
  [member: string]: JSONValue
}

export interface JSONArray extends Array<JSONValue> {

}

export function isJSONObject(o: any): o is JSONObject {
  return typeof o === 'object' && !Array.isArray(o)
}
