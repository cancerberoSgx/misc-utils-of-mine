import { expectTypeNotToBe } from '../expectNotType';
import { If, IsString } from './assets/type1';
// import {Length} from './assets/type1'
describe('expectNotType', ()=>{
  it('should not fail if type don\'t match', ()=>{
    const result = expectTypeNotToBe('number', '"1"')
    expect(result.fail).toBe(true)
      })
  
      it('should not fail if type match', ()=>{
    const result = expectTypeNotToBe('number', '1')
    expect(result.fail).toBe(false)
  })
  
  it('can reference types from other files', ()=>{
    const result = expectTypeNotToBe(value=>`
var b = Math.random()>0.5 ? 1 : '1'
var a: If<IsString<typeof b>, 'greater than 0.5', 'lower than 0.5'> = '${value}'`, 'should  fail value')
    console.log(result);
    expect(result.fail).toBe(true)
  })
})


var b = Math.random()>0.5 ? 1 : '1'
var a: If<IsString<typeof b>, 'greater', 'lower'> = 'anotherthing'