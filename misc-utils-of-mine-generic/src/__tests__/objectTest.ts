
import { objectMapValues } from '../object';

describe('object', () => {
  it('objectMap', () => {
    expect(objectMapValues({a: 1, b: 2}, (i, v)=>v*2)).toEqual({a: 2, b: 4})
  })

})
