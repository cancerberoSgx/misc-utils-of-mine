import { Type } from 'tsd-check-runtime'
import 'tsd-check-runtime'
import { JSONValue } from '../json'
import { get, fileVariables } from './__tsd_check_runtime__'

describe('json', () => {
  it('JSON value should fail if object is not json compatible', () => {
    expect(new Date()).not.toMatchType(Type<JSONValue>(get(3, 0)))
    expect(undefined).not.toMatchType(Type<JSONValue>(get(3, 1)))
    expect({ f: function() {} }).not.toMatchType(Type<JSONValue>(get(3, 2)))
    expect({ f: new Date() }).not.toMatchType(Type<JSONValue>(get(3, 3)))
  })
  it('JSON value should not fail if object is not json compatible', () => {
    console.log(get(3, 4));
    
    expect(null).toMatchType(Type<JSONValue>(get(3, 4)))
    expect([]).toMatchType(Type<JSONValue>(get(3, 5)))
    expect('').toMatchType(Type<JSONValue>(get(3, 6)))
    expect({}).toMatchType(Type<JSONValue>(get(3, 7)))
    expect(null || [] || '').toMatchType(Type<JSONValue>(get(3, 8)))
  })
})
