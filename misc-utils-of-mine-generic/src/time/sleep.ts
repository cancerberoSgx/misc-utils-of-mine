export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export const wait = sleep

export function withTime<T>(label: string, fn: () => T): T {
  console.time(label)
  const r = fn()
  console.timeEnd(label)
  return r
}
