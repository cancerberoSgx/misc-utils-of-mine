/** try to parse given json string. return undefined in case there is an error. */
export function parseJSON(s: string): any {
  try {
    return JSON.parse(s)
  } catch (error) {
    return undefined
  }
}