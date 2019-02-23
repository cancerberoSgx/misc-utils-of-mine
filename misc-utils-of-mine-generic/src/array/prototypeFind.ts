export function arrayPrototypeFind<T, E=any>(this: E, a: T[], predicate: FindPredicate<T, typeof thisArg>, thisArg?: E): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate.apply(thisArg, [v, i, a])) {
      return v;
    }
  }
}

type FindPredicate<T,  E=any> =   (this: E, value: T, index: number, obj: T[]) => boolean

declare global {
  interface Array<T> {
    find<S extends T>(predicate: FindPredicate<T, typeof thisArg>, thisArg?: any): S | undefined;
    find(predicate: FindPredicate<T, typeof thisArg>, thisArg?: any): T | undefined;
  }
}
export function installArrayPrototypeFind(force=false) {
  Array.prototype.find = (typeof Array.prototype.find === 'undefined'||force) ? function < T>(this: Array<T>,predicate: FindPredicate<T, typeof thisArg>, thisArg?: any): T | undefined { 
    //@ts- ignore
    return arrayPrototypeFind(this, predicate, thisArg); 
  } : Array.prototype.find;
}

