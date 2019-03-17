let types = 1
export interface Options {
  tsConfigFilePath?: string
  folder?: string
  dontVerifyFile?: boolean
  dontVerifyProject?: boolean
  /** pass true if you are already passing a quoted value. By default value is escaped in the output */
  valueAsString?: boolean
  verifyProject?: boolean
  printResultIfFail?: boolean
}
export interface Fail {
  pass: boolean
  error?: string
  failErrors?: CompilationError[]
  code?: string
  testCode?: string
}
export interface CompilationError {
  message: string
  code: number
  file: string | undefined
  length: number | undefined
  lineNumber: number | undefined
  start: number | undefined
  startColumn: number
  startLineNumber: number
  endColumn: number
  endLineNumber: number
}
