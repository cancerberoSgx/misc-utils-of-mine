let _unique: number = 0
export function unique(prefix: string = '_'): string {
  return prefix + _unique++
}

export function randomIntBetween(a: number, b: number) {
  return Math.floor(Math.random() * b) + a
}
export const int = randomIntBetween

export function randomFloatBetween(a: number, b: number) {
  return Math.random() * b + a
}
export const float = randomFloatBetween
