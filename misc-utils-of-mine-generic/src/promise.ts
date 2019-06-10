import { promisify } from 'util'

/**
 * Execute given functions returning promises serially. Returns a promise that resolves when all finish with they results as array.
 */
export function serial<T = any>(p: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise(resolve => {
    p.reduce((promiseChain: any, currentTask: () => Promise<T>) => {
      return promiseChain.then((chainResults: T[]) =>
        currentTask().then(currentResult => [...chainResults, currentResult])
      )
    }, Promise.resolve([])).then((arrayOfResults: T[]) => {
      resolve(arrayOfResults)
    })
  })
}

/**
 * Promise like object that allows to resolve it promise from outside code. Example: 
 * 
```
class Api {
  fooReady = new Deferred<Data>()
  private knower() {
    inOtherMoment(data=>{
      this.fooReady.resolve(data)
    })
  }
}
```
 */
export class Deferred<R, J = any> {
  resolve: (r: R) => void
  reject: (r: J) => void
  private promise: Promise<R>
  constructor(callback?: (this: Deferred<R, J>, resolve: (r: R) => void, reject?: (r: J) => void) => void) {
    let instance = this
    this.resolve = null as any
    this.reject = null as any
    this.promise = new Promise(function(resolve, reject) {
      instance.resolve = resolve
      instance.reject = reject
    })
    if (typeof callback === 'function') {
      callback.call(this, this.resolve, this.reject)
    }
  }
  then(resolve: (r: R) => void) {
    return this.promise.then(resolve)
  }
  catch(r: (reject: J) => void) {
    return this.promise.catch(r)
  }
}
