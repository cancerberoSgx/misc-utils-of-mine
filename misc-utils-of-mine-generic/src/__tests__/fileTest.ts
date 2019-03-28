import { basename } from '..'

describe('file', () => {
  it('basename', () => {
    expect(basename('/urs/name.txt')).toBe('name.txt')
  })
})
