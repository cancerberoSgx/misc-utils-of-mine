export function getFileNameFromUrl(url: string) {
  const hashIndex = url.indexOf('#')
  url = hashIndex !== -1 ? url.substring(0, hashIndex) : url
  return (url.split('/').pop() || '').replace(/[\?].*$/g, '')
}

export function getParametersFromUrl(url: string) {
  var queryString = url.split('?')[1]
  var obj: { [s: string]: string } = {}
  if (!queryString) {
    return obj
  }
  queryString = queryString.split('#')[0]
  var arr = queryString.split('&')
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=')
    obj[a[0]] = a[1] || ''
  }
  return obj
}
