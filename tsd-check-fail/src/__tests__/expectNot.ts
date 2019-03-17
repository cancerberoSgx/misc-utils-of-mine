// import {Project, Diagnostic, ts} from 'ts-simple-ast'

// export function expectTypeNotToBe<T>(input: (()=>any)|string, options: Options={}): Fail|undefined {
//  const project = new Project({
//   tsConfigFilePath:options.tsConfigFilePath || './tsconfig.json', // TODO: check that file exists or throw
//   addFilesFromTsConfig: true
//  }) 
//  let d = project.getPreEmitDiagnostics()
//  if(d.length){
//    return {
//      error: `Given TypeScript project cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(d)}`
//    }
//  }
//  const code = input.toString()
//  const fileName= `${options.folder||''}${unique('expectTypeNotToBe')}.ts`
//  const sourceFile = project.createSourceFile(fileName, code)
//  d = project.getPreEmitDiagnostics()
//  if(d.length){
//    return {
//      error: `Given TypeScript project cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(d).map(d=>`${d.file}#${d.startLineNumber} "${d.message}"`).join('\n')}`
//    }
//  }
//  d=project.getPreEmitDiagnostics()
//  return {
//    failErrors: formatDiagnostics(d)
//  }
// }

// interface Options {
//   tsConfigFilePath?: string
//   folder?: string
// }



// interface Fail {
//   error?: string
//   failErrors?: CompilationError[]
// } 

// interface CompilationError {
//   message: string;
//   code: number;
//   file: string | undefined;
//   length: number | undefined;
//   lineNumber: number | undefined;
//   start: number | undefined;
//   startColumn: number;
//   startLineNumber: number;
//   endColumn: number;
//   endLineNumber: number;
// }
// export function  formatDiagnostics(d: Diagnostic[]): CompilationError[]{
//   return d.map(tsd => ({
//       message: ts.flattenDiagnosticMessageText(tsd.compilerObject.messageText, '\n'),
//       code: tsd.getCode(),
//       file:  tsd.getSourceFile() && tsd.getSourceFile()!.getFilePath(),
//       length: tsd.getLength(),
//       lineNumber: tsd.getLineNumber(),
//       start: tsd.getStart(),
//       startColumn: ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()!).character + 1,
//       startLineNumber: ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()!).line + 1,
//       endColumn:
//         ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()! + tsd.getLength()!)
//           .character + 1,
//       endLineNumber:
//         ts.getLineAndCharacterOfPosition(tsd.getSourceFile()!.compilerNode, tsd.getStart()! + tsd.getLength()!).line +
//         1,
//     }))  
// }



// // utils

// let _unique: number = 0
// export function unique(prefix: string='_'): string {
//   return prefix+_unique++
// }
// function getCallerFile() {
//   try {
//       var err = new Error() as any
//       var callerfile;
//       var currentfile;

//       Error.prepareStackTrace = function (err, stack) { return stack; };

//       currentfile = err.stack.shift().getFileName();

//       while (err.stack.length) {
//           callerfile = err.stack.shift().getFileName();

//           if(currentfile !== callerfile) return callerfile;
//       }
//   } catch (err) {}
//   return undefined;
// }