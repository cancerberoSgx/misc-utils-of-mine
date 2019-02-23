import { join, sep, resolve } from 'path';

export function getNodeModulesFolderPath(): string {
  const inDist = join(__dirname, '..').endsWith(`dist${sep}src`)
  const result = join(__dirname, '..', '..', inDist ? '..' : '.', 'node_modules')
  return result
}

export function getPathRelativeToProjectFolder(s: string): string {
  return resolve(join(getNodeModulesFolderPath(), '..', s))
}

