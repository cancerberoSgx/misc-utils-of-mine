
/** sets innerHTML and calls children scripts if any */
export function setInnerHTML(elm: HTMLElement, html: string) {
  elm.innerHTML = html;
  elm.querySelectorAll("script").forEach(function (el) {
    let newEl = document.createElement("script");
    el.getAttributeNames().forEach(function (attrName) {
      newEl.setAttribute(attrName, el.getAttribute(attrName)!)
    });
    newEl.appendChild(document.createTextNode(el.innerHTML));
    el.parentNode!.replaceChild(newEl, el);
  })
}