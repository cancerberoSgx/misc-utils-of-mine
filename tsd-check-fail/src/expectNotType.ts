import {Project, Diagnostic, ts} from 'ts-simple-ast'
import { basename, dirname, join } from 'path';
import { readFileSync } from 'fs';

export function expectTypeNotToBe(typeOrFunction: string, value: string, options: Options={}): Fail {
  
 const project = new Project({
  tsConfigFilePath:options.tsConfigFilePath || './tsconfig.json', // TODO: check that file exists or throw
  addFilesFromTsConfig: true
 }) 
 if(!options.dontVerifyProject){
  let d = project.getPreEmitDiagnostics()
  if(d.length){
    return {
     fail: true,
      error: `Given TypeScript project cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(d)}`,
    }
  }
 }

 const callerFile = getCallerFile() 
 //TODO: verify it's contained in project
 const fileName= `${options.folder||''}${unique('expectTypeNotToBe')}.ts`
 const folderName = dirname(callerFile)
 const filePath = join(folderName, fileName)
 console.log(filePath);
 
 const testCode = `const ${unique('variable')}: ${type} = ${value}`
 const code = `
 ${readFileSync(callerFile).toString()}
 
${testCode}
 `
 const sourceFile = project.createSourceFile(filePath, code)
 const d=sourceFile.getPreEmitDiagnostics()
 return {
   fail: d.length>0,
   failErrors: formatDiagnostics(d),
   code
 }
}

interface Options {
  tsConfigFilePath?: string
  folder?: string
  dontVerifyProject?: boolean,
  /** pass true if you are already passing a quoted value. By default value is escaped in the output */
  valueAsString?: boolean
}



interface Fail {
  fail: boolean
  error?: string
  failErrors?: CompilationError[]
  code?:string
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
export function  formatDiagnostics(d: Diagnostic[]): CompilationError[]{
  return d.map(tsd => ({
      message: ts.flattenDiagnosticMessageText(tsd.compilerObject.messageText, '\n'),
      code: tsd.getCode(),
      file:  tsd.getSourceFile() && tsd.getSourceFile()!.getFilePath(),
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
export function unique(prefix: string='_'): string {
  return prefix+_unique++
}
export function getCallerFile() {
  try {
      var err = new Error() as any
      var callerfile;
      var currentfile;

      Error.prepareStackTrace = function (err, stack) { return stack; };

      currentfile = err.stack.shift().getFileName();

      while (err.stack.length) {
          callerfile = err.stack.shift().getFileName();

          if(currentfile !== callerfile) return callerfile;
      }
  } catch (err) {}
  return undefined;
}