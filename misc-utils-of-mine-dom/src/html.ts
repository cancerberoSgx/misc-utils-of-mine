
export function wrapInHtml(s: string): string {
  return `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
${s}
</body>
</html>
`;
}

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