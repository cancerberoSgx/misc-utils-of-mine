import { ValueOfStringKeyInArray } from '../array';

describe('ValueOfStringKeyInArray', ()=>{
  it('w', ()=>{
    const a = [{a: 1, b: 's'}]
    type t = ValueOfStringKeyInArray<typeof a, 'a'>
    expect(1).toBe(1)
  })
})