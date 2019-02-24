import { randomItem } from '../util';
import { firstNames } from './firstNames';
import { lastNames } from './lastNames';

export const names = {
  firstName(){
    return randomItem(firstNames)
  },
  lastName(){
    return randomItem(lastNames)
  }
}