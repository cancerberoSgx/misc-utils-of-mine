export function bytesToKiloBytes(fileSizeInBytes: number) {
  return fileSizeInBytes / 1000.0
}

/** Supports only '/' as folder separator.  */
export function withoutExtension(f: string) {
  return f.substring(0, f.lastIndexOf('.'))
}

/**
 * Supports only '/' as folder separator. Similar to node.jspath basename, returns the file name without
 * folder and with the extension. ues withoutExtension to remove it
 */
export function basename(f: string) {
  const i = f.lastIndexOf('/')
  return i === -1 ? f : f.substring(i + 1, f.length)
}
/**
 * Gets given file path extension.
 */
export function getFileExtension(s: string) {
  const i = s.lastIndexOf('.')
  if (i == -1 || i === s.length - 1) {
    return ''
  }
  return s.substring(i + 1, s.length)
}

/**
 * Supports only '/' as folder separator.
 */
export function dirname(s: string) {
  const i = s.lastIndexOf('/')
  return i === -1 ? '' : s.substring(0, i)
}

/**
 * Given a source directory and a target filename, return the relative
 * file path from source to target.
 * @param source {String} directory path to start from for traversal
 * @param target {String} directory path and filename to seek from source
 * @return Relative path (e.g. "../../style.css") as {String}
 */
export function getRelativePath(source: string, target: string) {
  var sep = source.indexOf('/') !== -1 ? '/' : '\\',
    targetArr = target.split(sep),
    sourceArr = source.split(sep),
    filename = targetArr.pop(),
    targetPath = targetArr.join(sep),
    relativePath = ''

  while (targetPath.indexOf(sourceArr.join(sep)) === -1) {
    sourceArr.pop()
    relativePath += '..' + sep
  }

  var relPathArr = targetArr.slice(sourceArr.length)
  relPathArr.length && (relativePath += relPathArr.join(sep) + sep)

  return relativePath + filename
}

/**
 * similar to node.js path.join(), using separator '/'
 */
export function pathJoin(...parts: string[]) {
  var separator = '/'
  var replace = new RegExp(separator + '{1,}', 'g')
  return parts.join(separator).replace(replace, separator)
}
