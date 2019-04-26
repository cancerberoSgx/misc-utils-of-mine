import { number, string, boolean } from './testUtil'
import 'tsd-check-runtime'
import { Type } from 'tsd-check-runtime'
import { get, fileVariables } from './__tsd_check_runtime__'

test('union and intersection', () => {
  expect(number() || string() || boolean()).toMatchType(Type<number | string | boolean>(get(2, 0)))
})
