import { basename, dirname, withoutExtension } from '..'

describe('file', () => {
  it('basename', () => {
    expect(basename('/usr/name.txt')).toBe('name.txt')
    expect(basename('../bar/foo.txt')).toBe('foo.txt')
  })

  it('dirname', () => {
    expect(dirname('foo.txt')).toBe('')
    expect(dirname('../bar/foo.txt')).toBe('../bar')
    expect(dirname('/usr/name.txt')).toBe('/usr')
  })

  it('withoutExtension', () => {
    expect(withoutExtension('/usr/name.txt')).toBe('/usr/name')
  })
})
