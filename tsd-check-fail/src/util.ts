import {Diagnostic, ts} from 'ts-simple-ast'
import {Options, CompilationError} from './types'
import {stringify} from 'javascript-stringify'
/** @internal */

export function formatDiagnostics(d: Diagnostic[]): CompilationError[] {
  return d.map(tsd => ({
    message: ts.flattenDiagnosticMessageText(tsd.compilerObject.messageText, '\n'),
    code: tsd.getCode(),
    file: tsd.getSourceFile() && tsd.getSourceFile()!.getFilePath(),
    length: tsd.getLength(),
    lineNumber: tsd.getLineNumber(),
    start: tsd.getStart(),
    startColumn: ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()!).character + 1,
    startLineNumber: ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()!).line + 1,
    endColumn:
      ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()! + tsd.getLength()!)
        .character + 1,
    endLineNumber:
      ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()! + tsd.getLength()!).line + 1,
  }))
}
let _unique: number = 0
/** @internal */
export function unique(prefix: string = '_'): string {
  return prefix + _unique++
}
/** @internal */
export function quote(s: string, q: string = '"'): string {
  return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
}
/** @internal */
export function escapeValue<T>(v: T, options: Options): string | undefined {
  if (options.enforceJsonValues) {
    try {
      return JSON.stringify(v)
    } catch (error) {
      return undefined
    }
  } else if (typeof v === 'string') {
    return quote(v)
  } else if (typeof v === 'undefined') {
    return 'undefined'
  } else if (v === null) {
    return 'null'
  } else {
    const s = stringify(v)
    if (s === undefined) {
      throw new Error('Cannot escape value ' + v)
    } else {
      return s
    }
  }
}

const callsites = require('callsites')
/** @internal */
export function getCallerFile(): string | undefined {
  const c = callsites()
  return c[3] && c[3].getFileName()
}
