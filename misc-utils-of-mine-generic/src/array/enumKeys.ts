/**
 * List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'}, if not
 * values could be also returned . For enums without declared values, use enumNoValueKeys
 */
export function enumKeys(anEnum: any): string[] {
  const a = []
  for (let i in anEnum) {
    a.push(i)
  }
  return a
}

/**
 * List given enum keys as array. Differently to [[enumKeys]], is should be used only on enums that doesn't
 * have assigned values or other wise on those which values are identical to the keys or not strings. If not,
 * they will be returned also!
 */
export function enumNoValueKeys(anEnum: any): string[] {
  return Object.keys(anEnum)
    .map(i => anEnum[i as any])
    .filter((s, i, a) => typeof s === 'string' && a.indexOf(s) === i)
}

/**
 * Returns the key of the first property with given value of given enum
 */
export function getEnumKey(anEnum: any, value: any): string {
  for (const key in anEnum) {
    if (value === anEnum[key]) {
      return key
    }
  }
  return ''
}

/**
 * Return given enum as a {name, value} array.
 */
export function getEnumKeyAndValue(e: any) {
  const a = []
  for (const key in e) {
    a.push({ key, value: e[key] })
  }
  return a
}
