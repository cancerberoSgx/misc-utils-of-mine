import { number, string, boolean } from './testUtil'
import 'tsd-check-runtime'
import { Type } from 'tsd-check-runtime'

test('union and intersection', () => {
  expect(number() || string() || boolean()).toMatchType(Type<number | string | boolean>())
})
