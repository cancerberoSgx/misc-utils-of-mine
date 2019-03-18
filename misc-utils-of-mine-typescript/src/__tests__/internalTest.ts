import { number, string, boolean } from './testUtil';
import TypeText from 'get-type-text';
import 'tsd-check-runtime'


test('union and intersection', ()=>{
  expect(number()||string()||boolean()).toMatchType(TypeText<number|string|boolean>('number|string|boolean'))

})