import { EmptyObject, ObjectStringKeyUnion } from 'misc-utils-of-mine-typescript'
let object
export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): ObjectStringKeyUnion<Field>[] {
  return Object.keys(o) as ObjectStringKeyUnion<Field>[]
}
export function objectMap(
  o: {
    [k: string]: any
  },
  f: (k: string, v: any) => any
) {
  var r: any = {}
  Object.keys(o).forEach(k => {
    r[k] = f(k, o[k])
  })
  return r
}
