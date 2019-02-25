export function escapeHtmlAttribute(code: string) {
  return code.replace(/\"/gmi, '&quot;');
}
export function unEscapeHtmlAttribute(code: string) {
  return code.replace(/\&quot\;/gmi, '"');
}

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
