export function getFileNameFromUrl(url: string) {
  const hashIndex = url.indexOf('#')
  url = hashIndex !== -1 ? url.substring(0, hashIndex) : url
  return (url.split('/').pop() || '').replace(/[\?].*$/g, '')
}

export function getParametersFromUrl(url: string, options: { parseNumber?: boolean, parseBoolean?: boolean } = {}) {
  var queryString = url.split('?')[1]
  var obj: { [s: string]: string } = {}
  if (!queryString) {
    return obj
  }
  queryString = queryString.split('#')[0]
  var arr = queryString.split('&')
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i].split('=')
    let value: any = a[1] || ''
    if (options.parseNumber) {
      const numeric = parseFloat(value)
      if (!isNaN(numeric)) {
        value = numeric
      }
    }
    if (options.parseBoolean) {
      if (['true', 'false'].includes(value)) {
        value = value === 'true' ? true : false
      }
    }
    obj[a[0]] = value
  }
  return obj
}
