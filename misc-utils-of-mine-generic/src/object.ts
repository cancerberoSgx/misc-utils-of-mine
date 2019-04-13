import { EmptyObject, ObjectStringKeyUnion } from 'misc-utils-of-mine-typescript'

export function objectKeys<Field extends EmptyObject = EmptyObject>(o: Field): ObjectStringKeyUnion<Field>[] {
  return Object.keys(o) as ObjectStringKeyUnion<Field>[]
}
/**
 * Returns a new object with the same keys of given one, and values mapped with given function
 */
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

/**
 * build an object using keys in [[a]] and values returning from [[fn]] as long as they are not undefined
 */
export function arrayToObject<T=any>(a: string[], fn: (a:string)=>T|undefined){
  const o :{[s:string]:T} = {}
  a.forEach(k=>{
    const v = fn(k)
    if(typeof v !== 'undefined'){
      o[k] = v
    }
  })
  return o
}
/**
 * Returns a nested property of given object and given path. For example path could be 'foo.bar' and it will return `object['foo']['bar']`
 */
export function getObjectProperty<T>(object: any, path: string, default_value: T): T | undefined {
  if (!path) {
    return object;
  }
  else if (object) {
    var tokens = path.split('.')
      , prev = object
      , n = 0;
    while (typeof prev !== 'undefined' && n < tokens.length) {
      prev = prev[tokens[n++]];
    }
    if (typeof prev !== 'undefined') {
      return prev;
    }
  }
  return default_value;
}

export function setProperty<T>(object: any, path: string, value: T) {
  if (!path) {
    return;
  }
  else if (!object) {
    return;
  }
  var tokens = path.split('.')
    , prev = object;
  for (var token_idx = 0; token_idx < tokens.length - 1; ++token_idx) {
    var current_token = tokens[token_idx];
    if (typeof prev[current_token] === 'undefined') {
      prev[current_token] = {};
    }
    prev = prev[current_token];
  }
  if (tokens.length) {
    prev[tokens[tokens.length - 1]] = value
  }
}
