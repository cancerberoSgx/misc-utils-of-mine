export function evaluate<T = any>(s: string, defaultValue = undefined): T | undefined {
  try {
    return eval(`(${s})`) as T
  } catch (error) {
    return defaultValue
  }
}
