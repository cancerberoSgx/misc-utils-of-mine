export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) {
    throw new Error(msg)
  }
  return r
}

export function tryTo<R = any, D = undefined>(f: (...args: any[]) => R, def?: D): R | D | undefined {
  try {
    return f()
  } catch (error) {
    return def
  }
}
