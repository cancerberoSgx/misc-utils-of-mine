export function number() {
  return Math.random()
}
export function string() {
  return String.fromCharCode(Math.random())
}
export function boolean() {
  return Math.random() > 0.55 ? true : false
}
/** union(1,'f', false) === 1|'f','false */
export function union<T1, T2, T3, T4>(t1?: T1, t2?: T2, t3?: T3, t4?: T4) {
  return t1 || t2 || t3
}
