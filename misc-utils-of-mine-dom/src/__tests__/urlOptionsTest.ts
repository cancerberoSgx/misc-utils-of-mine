import { decodeOptions, encodeOptions } from '../urlOptions';

describe('urlOptions', ()=>{
  xit('decodeOptions', ()=>{
    expect(decodeOptions('{"foo":2}')).toEqual(JSON.stringify({foo:2}))
  })
  it('encodeOptions', ()=>{
    expect(encodeOptions({foo:2})).toEqual('%7B%22foo%22%3A2%7D')
  })
})