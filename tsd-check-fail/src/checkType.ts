import {Project, Diagnostic, ts, SourceFile} from 'ts-simple-ast'
import {dirname, join} from 'path'
import {readFileSync} from 'fs'
import {Options, Fail, TypeRepresentation} from './types'
import {getCallerFile, formatDiagnostics, unique, escapeValue} from './util'

export function checkType<T>(typeOrFunction: TypeRepresentation<T>, value: T, options: Options = {}): Fail {
  return checkTypeCore(typeOrFunction, value, options)
}
/** @internal */
export function checkTypeCore<T>(typeOrFunction: TypeRepresentation<T>, value: T, options: Options = {}): Fail {
  let d: Diagnostic<ts.Diagnostic>[]
  let sourceFile: SourceFile
  const tsConfigFilePath = options.tsConfigFilePath || './tsconfig.json'
  if (!project) {
    project = new Project({
      tsConfigFilePath,
      addFilesFromTsConfig: true,
    })
  }
  const callerFile = getCallerFile()
  if (!callerFile) {
    return {
      pass: false,
      error: `Caller source file cannot be found, aborting`,
    }
  }
  const callerSourceFile = project.getSourceFile(callerFile)
  if (!callerSourceFile) {
    return {
      pass: false,
      error: `Caller source must belong to ${tsConfigFilePath} project`,
    }
  }
  if (options.verifyProject) {
    d = project.getPreEmitDiagnostics()
    if (d.length) {
      return {
        pass: false,
        error: `Given TypeScript project cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(
          d,
        )}`,
      }
    }
  } else if (!options.dontVerifyFile) {
    d = callerSourceFile.getPreEmitDiagnostics()
    if (d.length) {
      return {
        pass: false,
        error: `Caller TypeScript file cannot have compilation errors, fix them and try again. Errors: ${formatDiagnostics(
          d,
        )}`,
      }
    }
  }
  //TODO: verify it's contained in project
  const fileName = `${options.folder || ''}${unique('expectTypeNotToBe')}.ts`
  const folderName = dirname(callerFile)
  const filePath = join(folderName, fileName)
  let testCode: string
  const escapedValue = options.dontEscape ? value : escapeValue(value, options)
  if (escapedValue === undefined) {
    return {
      pass: false,
      error: `Value is not JSON and option enforceJsonValues was used`,
    }
  }
  if (typeof typeOrFunction === 'string') {
    testCode = `const ${unique('variable')}: ${typeOrFunction} = ${escapedValue}`
  } else {
    testCode = typeOrFunction(escapedValue)
  }
  const code = `
  ${readFileSync(callerFile).toString()}
  ${testCode}`
  sourceFile = project.createSourceFile(filePath, code)
  d = sourceFile.getPreEmitDiagnostics()
  const r = {
    pass: d.length > 0 ? false : true,
    failErrors: formatDiagnostics(d),
    code,
    testCode,
  }
  if (options.printResult || (!r.pass && options.printResultIfFail)) {
    console.log(r)
  }
  return r
}
let project: Project
