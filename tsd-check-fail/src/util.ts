import {Diagnostic, ts} from 'ts-simple-ast'
import {Options, CompilationError} from './types'
import {stringify} from 'javascript-stringify'

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
// utils
let _unique: number = 0
export function unique(prefix: string = '_'): string {
  return prefix + _unique++
}
export function quote(s: string, q: string = '"'): string {
  return q + s.replace(new RegExp(q, 'g'), '\\' + q) + q
}
export function escapeValue<T>(v: T, options: Options) {
  if (options.valueAsString) {
    return v + ''
  } else if (typeof v === 'string') {
    return quote(v)
  } else if (typeof v === 'undefined') {
    return 'undefined'
  } else if (v === null) {
    return 'null'
  } else {
    return stringify(v)
  }
  // else if ((v as any).toString) {
  //   return v.toString();
  // }
  // else {
  //   return v + '';
  // }
}

const callsites = require('callsites')
export function getCallerFile(): string | undefined {
  const c = callsites()
  return c[3] && c[3].getFileName()
  // - `getThis`: returns the value of `this`.
  // - `getTypeName`: returns the type of `this` as a string. This is the name of the function stored in the constructor field of `this`, if available, otherwise the object's `[[Class]]`
  //  internal property.
  // - `getFunction`: returns the current function.
  // - `getFunctionName`: returns the name of the current function, typically its `name` property. If a name property is not available an attempt will be made to try to infer a name from
  //  the function's context.
  // - `getMethodName`: returns the name of the property of `this` or one of its prototypes that holds the current function.
  // - `getFileName`: if this function was defined in a script returns the name of the script.
  // - `getLineNumber`: if this function was defined in a script returns the current line number.
  // - `getColumnNumber`: if this function was defined in a script returns the current column number
  // - `getEvalOrigin`: if this function was created using a call to `eval` returns a string representing the location where `eval` was called.
  // - `isToplevel`: is this a top-level invocation, that is, is this the global object?
  // - `isEval`: does this call take place in code defined by a call to `eval`?
  // - `isNative`: is this call in native V8 code?
  // - `isConstructor`: is this a constructor call?
}
