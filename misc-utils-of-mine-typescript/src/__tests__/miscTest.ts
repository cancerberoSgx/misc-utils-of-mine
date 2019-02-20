import 'tsd-check-runtime'
import { Type } from 'tsd-check-runtime'
import { ArrayLiteral } from '../array'
import { Falsy, NotFalsy } from '../misc'
import { number, boolean } from './testUtil'

describe('misc', () => {
  it('NotFalsy', () => {
    const t1 = Type<NotFalsy<number | boolean | undefined | null>>().text
    const t2 = Type<number | boolean>().text
    const t3 = Type<number | true>().text
    expect(`
    const f2: ${t2} = null as any as ${t2}
    const f1: ${t1} = f2
    `).not.toCompile()
    expect(`
    const f2: ${t1} = null as any as ${t1}
    const f1: ${t2} = f2
    `).toCompile()
    expect(`
    const f2: ${t1} = null as any as ${t1}
    const f1: ${t3} = f2
    `).toCompile()
    expect(`
    const f2: ${t3} = null as any as ${t3}
    const f1: ${t1} = f2
    `).toCompile()
  })
  // it('Falsy', () => {
  // expect(Type<NotFalsy<number|boolean>>({text: "NotFalsy<number|boolean|undefined|null>", __tsdCR_prefix: __CE[0]})).not.toMatchType(Type<undefined>({text: "number|boolean", __tsdCR_prefix: __CE[0]}))
  // expect(Type<NotFalsy<number|boolean|undefined|null>>({text: "NotFalsy<number|boolean|undefined|null>", __tsdCR_prefix: __CE[0]})).toMatchType(Type<number|true>({text: "number|boolean", __tsdCR_prefix: __CE[0]}))
  // })
})
