import { getFileNameFromUrl } from '../url'

describe('url', () => {
  describe('getFileNameFromUrl', () => {
    it('absolute, hash and no extension', () => {
      expect(
        getFileNameFromUrl('https://foo.bar/qs/bar/js-function-to-get-filename-from-url#comment95124061_53560218')
      ).toBe('js-function-to-get-filename-from-url')
    })

    it('relative, extension and paramters', () => {
      expect(getFileNameFromUrl('../foo.png?ar=8')).toBe('foo.png')
    })

    it('file name with multiple dots, hash with slash', () => {
      expect(getFileNameFromUrl('questions/511761/js-function.min.js?bar=9.9&y=1#/src/jjj?=9.9')).toBe(
        'js-function.min.js'
      )
    })
  })
})
