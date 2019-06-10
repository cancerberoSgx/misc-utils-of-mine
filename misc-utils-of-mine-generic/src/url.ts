export function getFileNameFromUrl(url: string) {
  const hashIndex = url.indexOf('#')
  url = hashIndex !== -1 ? url.substring(0, hashIndex) : url
  return (url.split('/').pop() || '').replace(/[\?].*$/g, '')
}
