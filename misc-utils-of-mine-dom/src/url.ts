
export function absoluteUrl(relativeUrl: string) {
  return `${window.location.protocol}//${window.location.host}/${relativeUrl}`
}
