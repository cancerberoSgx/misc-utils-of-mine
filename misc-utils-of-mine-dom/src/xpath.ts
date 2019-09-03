
export function getXPathOfElement(el: Element | string): string | undefined {
  if (typeof el == 'string') {
    return document.evaluate(el, document, null, 0, null) + ''
  }
  if (!el || el.nodeType != 1) {
    return ''
  }
  if (el.id) return "//*[@id='" + el.id + "']"
  if (el.parentNode) {
    const sames = Array.from(el.parentNode.children).filter(x => x.tagName == el.tagName)
    return (
      getXPathOfElement(el.parentNode as Element) +
      '/' +
      (el.tagName || '').toLowerCase() +
      (sames.length > 1 ? '[' + (sames.indexOf(el) + 1) + ']' : '')
    )
  } else {
    return undefined
  }
}

export function getElementByXPath(path: string, predicate?: (n: Node) => boolean): Node | undefined {
  const p = document.evaluate(path, document, null, 0, null)
  if (!predicate) {
    return p.iterateNext() || undefined
  }
  try {
    let n
    let n2
    while ((n = p.iterateNext()) && !predicate(n)) {
      n2 = n
    }
    return n2
  } catch (e) {
    alert('Error: Document tree modified during iteration ' + e)
  }
}
