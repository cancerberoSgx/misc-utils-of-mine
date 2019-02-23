export function createElement(parent: HTMLElement, tag = 'div') {
  const el = document.createElement(tag);
  parent.appendChild(el);
  return el;
}
export function query<T extends Element>(q: string, parent = document): T[] {
  return Array.from(parent.querySelectorAll<T>(q));
}
export function queryOne<T extends Element>(q: string, parent = document): T {
  const l = Array.from(parent.querySelectorAll<T>(q));
  if (l.length) {
    return l[0];
  }
  else
    throw new Error(`Element ${q} not found`);
}
