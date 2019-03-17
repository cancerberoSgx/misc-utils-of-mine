import { Project, Diagnostic, ts, SourceFile } from 'ts-simple-ast'
import { basename, dirname, join } from 'path';
import { readFileSync } from 'fs';

let project: Project
export function expectTypeNotToBe<T>(typeOrFunction: string | ((value: T) => string), value: T, options: Options = {}): Fail {
  
  let d: Diagnostic<ts.Diagnostic>[]
  let sourceFile: SourceFile
  const tsConfigFilePath = options.tsConfigFilePath || './tsconfig.json'

  if(!project){
    project = new Project({
      tsConfigFilePath, // TODO: check that file exists or throw
      addFilesFromTsConfig: true
    })
  }

  const callerFile = getCallerFile()
  if (!callerFile) {
    return {
      fail: true,
      error: `Caller source file cannot be found, aborting`,
    }
  }
  const callerSourceFile =project.getSourceFile(callerFile)
  if (!callerSourceFile) {
    return {
      fail: true,
      error: `Caller source must belong to ${tsConfigFilePath} project`,
    }
  }
  if (options.verifyProject) {
    d = project.getPreEmitDiagnostics()
    if (d.length) {
      return {
        fail: true,
        error: `Given TypeScript project cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(d)}`,
      }
    }
  }
  else if(!options.dontVerifyFile){
    d = callerSourceFile.getPreEmitDiagnostics()
    if (d.length) {
      return {
        fail: true,
        error: `Caller TypeScript file cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(d)}`,
      }
    }
  }

  //TODO: verify it's contained in project
  const fileName = `${options.folder || ''}${unique('expectTypeNotToBe')}.ts`
  const folderName = dirname(callerFile)
  const filePath = join(folderName, fileName)
  let testCode: string
  if (typeof typeOrFunction === 'string') {
    testCode = `const ${unique('variable')}: ${typeOrFunction} = ${escapeValue(value, options)}`
  } else {
    testCode = typeOrFunction(value)
  }
  const code = `
  ${readFileSync(callerFile).toString()}
  ${testCode}`

  sourceFile = project.createSourceFile(filePath, code)
  d = sourceFile.getPreEmitDiagnostics()
  return {
    fail: d.length > 0 ? true : false,
    failErrors: formatDiagnostics(d),
    code, 
    testCode
  }
}

interface Options {
  tsConfigFilePath?: string
  folder?: string
  dontVerifyFile?: boolean
  dontVerifyProject?: boolean,
  /** pass true if you are already passing a quoted value. By default value is escaped in the output */
  valueAsString?: boolean
  verifyProject?: boolean
}


interface Fail {
  fail: boolean
  error?: string
  failErrors?: CompilationError[]
  code?: string
  testCode?: string
}

interface CompilationError {
  message: string;
  code: number;
  file: string | undefined;
  length: number | undefined;
  lineNumber: number | undefined;
  start: number | undefined;
  startColumn: number;
  startLineNumber: number;
  endColumn: number;
  endLineNumber: number;
}

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
      ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()! + tsd.getLength()!).line +
      1,
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

function escapeValue<T>(v: T, options: Options) {
  if (options.valueAsString) {
    return v + ''
  }
  else if (typeof v === 'string') {
    return quote(v)
  }
  else if (typeof v === 'undefined') {
    return 'undefined'
  }
  else if (v === null) {
    return 'null'
  }

  else if ((v as any).toString) {
    return v.toString()
  }
  else {
    return v + ''
  }

}

const callsites = require('callsites')
export function getCallerFile():string|undefined {
  const c = callsites()
  // debugger
  // console.log(c.map((d: any)=>d.getMethodName()))
  return c[2] && c[2].getFileName()


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