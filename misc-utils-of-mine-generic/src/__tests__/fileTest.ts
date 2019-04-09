import { basename, dirname, withoutExtension } from '..'
import { getRelativePath, pathJoin } from '../file'

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

  it('getRelativePath', () => {
    expect(getRelativePath('/users/eric/src/csslint', '/users/eric/style.css')).toBe('../../style.css')
  })

  it('pathJoin', () => {
    expect(pathJoin('s', '..', 'b')).toBe('s/../b')
  })
})
