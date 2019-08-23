import { stringToObject } from "../hash"
describe('string/misc', () => {
  it('stringToObject', () => {
    expect(stringToObject('a:1, b: ffff')).toEqual({
      a: '1',
      b: 'ffff'
    })
  })
})
