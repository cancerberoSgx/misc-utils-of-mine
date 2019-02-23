import { array } from '../array';

export * from "./changeText";
export * from './getPreviousMatchingPos'
export * from './quote'
export * from './json'
export * from './shorter'




export function escapeHtmlAttribute(code: string) {
  return code.replace(/\"/gmi, '&quot;');
}
export function unEscapeHtmlAttribute(code: string) {
  return code.replace(/\&quot\;/gmi, '"');
}

export function repeat(n: number, s: string): string {
  return array(n, s).join('')
}
export function indent(i: number = 1, tabSize = 2): string {
  return repeat(i * tabSize, ' ')
}

export function getPosition(string: string, subString: string, index: number) {
  return string.split(subString, index).join(subString).length;
}

export function removeWhites(s: string, replaceWith=' '){
  return s.replace(/\s+/gm, replaceWith).trim()
}