// import {EmptyObject, StringKeyOf} from 'misc-utils-of-mine-typescript'

export function sleep(ms: number): Promise<void>{
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve()
    }, ms);
  })
}
export const wait = sleep

let _unique: number = 0
export function unique(prefix: string='_'): string {
  return prefix+_unique++
}

// export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): StringKeyOf<Field>[] {
//   return Object.keys(o) as StringKeyOf<Field>[]
// }


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


// export type EmptyObject = {}


// strings


// export function escapeHtmlAttribute(code: string) {
//   return code.replace(/\"/gmi, '&quot;');
// }
// export function unEscapeHtmlAttribute(code: string) {
//   return code.replace(/\&quot\;/gmi, '"');
// }

// export function repeat(n: number, s: string): string {
//   return array(n, s).join('')
// }
// export function indent(i: number = 1, tabSize = 2): string {
//   return repeat(i * tabSize, ' ')
// }
