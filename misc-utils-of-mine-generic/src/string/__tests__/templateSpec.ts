import { changeText } from '../..'
import { styleObjectToCss } from '../html'
import { template } from '../template'

describe('template', () => {
  it('should render', () => {
    const t = `Hello <%= name %>`
    const r = template(t, { name: 'seba' })

    expect(r).toBe('Hello seba')
  })
})
