import { objectMapValues, objectKeys, setObjectProperty, getObjectProperty } from '../object'
import { isFlowBaseAnnotation } from '@babel/types'

describe('object', () => {
  it('objectMap', () => {
    expect(objectMapValues({ a: 1, b: 2 }, (i, v) => v * 2)).toEqual({ a: 2, b: 4 })
  })
  describe('objectKeys', () => {
    it('objectKeys', () => {
      expect(objectKeys({ a: null, b: 8, c: 0, d: '', e: undefined })).toEqual(['a', 'b', 'c', 'd', 'e'])
    })
    it('should list array index', () => {
      expect(objectKeys([0, '', undefined, null, false])).toEqual(['0', '1', '2', '3', '4'])
    })
  })
  describe('setObjectProperty and getObjectProperty', () => {
    it('should work with arrays', () => {
      const o = setObjectProperty({}, ['foo', 0, 'bar'], 'hello')
      expect(o).toEqual({ foo: [{ bar: 'hello' }] })
      expect(getObjectProperty(o, ['foo', 0, 'bar'])).toEqual('hello')
      expect(getObjectProperty(o, 'foo.0.bar')).toEqual('hello')
      expect(setObjectProperty({}, ['foo', 0, 'bar', 0, 0], 'hello')).toEqual({ foo: [{ bar: [['hello']] }] })
    })
    it('should throw if number path item correspond to non array value', () => {
      expect(() => setObjectProperty({ a: {} }, ['a', 0, 'bar'], 'hello')).toThrow()
    })
  })
})
