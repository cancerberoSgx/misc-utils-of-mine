import { basename, dirname, withoutExtension } from '..'
import { getRelativePath, pathJoin, getFileExtension, parseGitIgnore } from '../file'
import { compareText, compareTexts } from '..'
import { isNode } from '../environment'

describe('compare', () => {
  it('isNode', () => {
    expect(isNode()).toBe(true)
  })
})
