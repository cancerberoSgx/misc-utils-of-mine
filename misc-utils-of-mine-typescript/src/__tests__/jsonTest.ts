import TypeText from 'get-type-text'
import 'tsd-check-runtime'
import {JSONValue} from '../json'

describe('json', () => {
  it('JSON value should fail if object is not json compatible', () => {
    expect(new Date()).not.toMatchType(TypeText<JSONValue>())
  })
  it('JSON value should not fail if object is not json compatible', () => {
    expect(null || [] || '').toMatchType(TypeText<JSONValue>())
  })
  // it('JSON value should fail if object is not json compatible', () => {
  //   expect(new Date()).not.toMatchType(TypeText<JSONValue>('JSONValue'))
  // })
})
