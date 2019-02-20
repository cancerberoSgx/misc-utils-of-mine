import {Type} from 'tsd-check-runtime'
import 'tsd-check-runtime'
import {JSONValue} from '../json'

describe('json', () => {
  it('JSON value should fail if object is not json compatible', () => {
    expect(new Date()).not.toMatchType(Type<JSONValue>())
  })
  it('JSON value should not fail if object is not json compatible', () => {
    expect(null || [] || '').toMatchType(Type<JSONValue>())
    expect(undefined).not.toMatchType(Type<JSONValue>())
  })
})
