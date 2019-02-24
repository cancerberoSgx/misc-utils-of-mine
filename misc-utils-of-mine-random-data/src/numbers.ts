import { randomIntBetween } from './util';

export const numbers = {
  integer(min:number, max: number){
    return randomIntBetween(min, max)
  }
}