export function bytesToKiloBytes(fileSizeInBytes: number) {
  return fileSizeInBytes / 1000.0
}
/** Supports only '/' as folder separator.  */
export function withoutExtension(f: string) {
  return f.substring(0, f.lastIndexOf('.'))
}
/**
 * Supports only '/' as folder separator. Similar to node.jspath basename, returns the file name without folder and with the extension. ues withoutExtension to remove it
 */
export function basename(f: string) {
  const i = f.lastIndexOf('/')
  return i === -1 ? f : f.substring(i + 1, f.length)
}
