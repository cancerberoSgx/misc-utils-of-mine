export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) {
    throw new Error(msg)
  }
  return r
}

export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
  try {
    return f()
  } catch (error) {}
}
