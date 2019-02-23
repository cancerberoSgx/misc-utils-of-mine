import { parseJSON } from 'misc-utils-of-mine-generic';
import { JSON } from 'misc-utils-of-mine-typescript';
export function localStorageGetJSON<K>(key:string) {
  let ls : {[s:string]:any}= {}
  if (window.localStorage) {
    const v = window.localStorage.getItem(key)
    if(v){
      return parseJSON<K>(v)
    }
  }
}

export function localStorageSetJSON(key:string, value:JSONV) {
  if (window.localStorage) {
    window.localStorage.setItem(
      key,
      JSON.stringify({
        [key]: value
      })
    )
  }
}
