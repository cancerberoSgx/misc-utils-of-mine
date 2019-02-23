import { expectTextEquals } from '..';

describe('string', ()=>{
  it('expectTextEquals', ()=>{
    expect(()=>{expectTextEquals('abc', 'foo')}).toThrow()
    expect(()=>{expectTextEquals('a  b    s', 'a b s')}).not.toThrow()
  })
})