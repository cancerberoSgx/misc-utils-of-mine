
export function randomIntBetween(a: number, b: number){
  return Math.floor(Math.random() * b) + a
}

export function randomItem<T>(array: T[]): T{
  return array[randomIntBetween(0, array.length)]
}