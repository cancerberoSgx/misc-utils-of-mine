// TODO: relocate all of these
export function sleep(ms: number): Promise<void>{
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

let _unique: number = 0
export function unique(prefix: string='_'): string {
  return prefix+_unique++
}