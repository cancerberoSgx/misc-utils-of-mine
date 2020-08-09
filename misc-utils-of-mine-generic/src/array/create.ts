
export function array<T = number>(n: number, sample?: T): T[] {
  const a: (T | number)[] = []
  for (let i = 0; i < n; i++) {
    a.push(typeof sample === 'undefined' ? i : sample)
  }
  return a as T[]
}

export function asArray<T>(selectors: T | T[]): T[] {
  return Array.isArray(selectors) ? selectors : [selectors]
}

export function seq(start: number = 0, step: number = 1, max: number = 0): number[] {
  const result = []
  for (let i = start; i < max; i += step) {
    result.push(i)
  }
  return result
}

export function randomItems<T>(a: T[], amount: number): T[] {
  if (amount <= 0) {
    return []
  }
  amount = Math.min(a.length, amount)
  const indexes = shuffle(array(a.length))
  const result: T[] = []
  for (let i = 0; i < amount; i++) {
    result.push(a[indexes[i]])
  }
  return result
  // return randomIntsBetween(amount, 0, a.length - 1).map(i => a[i]).filter(notUndefined)
}

export function shuffle<T>(a: T[]): T[] {
  return a.sort(() => Math.random() - 0.5)
}
