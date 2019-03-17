import {EmptyObject, StringKeyOf} from 'misc-utils-of-mine-typescript'

let _unique: number = 0
export function unique(prefix: string='_'): string {
  return prefix+_unique++
}

export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): StringKeyOf<Field>[] {
  return Object.keys(o) as StringKeyOf<Field>[]
}

export function randomIntBetween(a: number, b: number){
  return Math.floor(Math.random() * b) + a
}

export function checkThrow<T>(r?: T, msg = 'Throwing on undefined value'): T {
  if (!r) { throw new Error(msg) }
  return r
}
export function tryTo<F extends (...args: any[]) => any>(f: F): ReturnType<F> | undefined {
  try {
    return f()
  } catch (error) {
  }
}


export function objectMap(o: {[k:string]:any}, f: (k:string, v:any)=>any){
  var r:any = {}
  Object.keys(o).forEach(k=>{
    r[k] = f(k, o[k])
  })
  return r
}