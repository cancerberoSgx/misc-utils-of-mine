export function arrayPrototypeFind<T>(a: T[], predicate: FindPredicate<T>, thisArg?: any): T | undefined {
  for (let i = 0; i < a.length; i++) {
    const v = a[i];
    if (predicate.apply(thisArg, [v, i, a])) {
      return v;
    }
  }
}

type FindPredicate<T> = (this: void, value: T, index: number, obj: T[]) => value is T

declare global {
  interface Array<T> {
    find<S extends T>(predicate: FindPredicate<T>, thisArg?: any): S | undefined;
    find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined;
  }
}
export function installArrayPrototypeFind(force=false) {
  Array.prototype.find = (typeof Array.prototype.find === 'undefined'||force) ? function < T>(predicate: FindPredicate<T>, thisArg?: any): T | undefined { 
    //@ts-ignore
    return arrayPrototypeFind(this, predicate, thisArg); 
  } : Array.prototype.find;
}

