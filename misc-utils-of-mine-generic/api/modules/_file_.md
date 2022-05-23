[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["file"](_file_.md)

# Module: "file"

## Index

### Functions

* [basename](_file_.md#basename)
* [bytesToKiloBytes](_file_.md#bytestokilobytes)
* [detectNewline](_file_.md#detectnewline)
* [dirname](_file_.md#dirname)
* [getFileExtension](_file_.md#getfileextension)
* [getRelativePath](_file_.md#getrelativepath)
* [parseGitIgnore](_file_.md#parsegitignore)
* [pathJoin](_file_.md#pathjoin)
* [slash](_file_.md#slash)
* [withFinalSlash](_file_.md#withfinalslash)
* [withoutExtension](_file_.md#withoutextension)

## Functions

###  basename

▸ **basename**(`f`: string, `removeExtension`: boolean): *string*

*Defined in [src/file.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L17)*

Similar to node's' path.basename, returns the file name without folder and with the extension.
Pass [withoutExtension](_file_.md#withoutextension) to remove it.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`f` | string | - |
`removeExtension` | boolean | false |

**Returns:** *string*

___

###  bytesToKiloBytes

▸ **bytesToKiloBytes**(`fileSizeInBytes`: number): *number*

*Defined in [src/file.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`fileSizeInBytes` | number |

**Returns:** *number*

___

###  detectNewline

▸ **detectNewline**(`s`: string, `def`: string): *string*

*Defined in [src/file.ts:115](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L115)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`def` | string | "
" |

**Returns:** *string*

___

###  dirname

▸ **dirname**(`path`: string): *string*

*Defined in [src/file.ts:37](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L37)*

Gets the directory path of given path converting `\\` path separator to `/`.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  getFileExtension

▸ **getFileExtension**(`s`: string): *string*

*Defined in [src/file.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L26)*

Gets given file path extension.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  getRelativePath

▸ **getRelativePath**(`source`: string, `target`: string): *string*

*Defined in [src/file.ts:48](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L48)*

Given a source directory and a target file name, return the relative file path from source to target, converting `\\` path separator to `/`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | directory path to start from for traversal |
`target` | string | directory path and filename to seek from source |

**Returns:** *string*

Relative path from `source` to `target` (e.g. `"../../style.css"`), converting `\\` path separator to `/`.

___

###  parseGitIgnore

▸ **parseGitIgnore**(`content`: string, `options`: object): *string[]*

*Defined in [src/file.ts:85](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L85)*

Parses given .gitignore file contents to an array of string patterns. Adapted from https://github.com/sindresorhus/globby .

**Parameters:**

▪ **content**: *string*

▪`Default value`  **options**: *object*= { cwd: '.', fileName: '.gitignore' }

Name | Type |
------ | ------ |
`cwd` | string |
`fileName` | string |

**Returns:** *string[]*

___

###  pathJoin

▸ **pathJoin**(...`parts`: string[]): *string*

*Defined in [src/file.ts:72](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L72)*

Similar to node's' `path.join()`. It will return the path resulting of join given path parts, converting `\\` path separator to `/`.

**Parameters:**

Name | Type |
------ | ------ |
`...parts` | string[] |

**Returns:** *string*

___

###  slash

▸ **slash**(`path`: string): *string*

*Defined in [src/file.ts:106](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L106)*

Converts Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`. Adapted from https://github.com/sindresorhus/slash/ .

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  withFinalSlash

▸ **withFinalSlash**(`s`: string): *string*

*Defined in [src/file.ts:125](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L125)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  withoutExtension

▸ **withoutExtension**(`f`: string): *string*

*Defined in [src/file.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/file.ts#L8)*

Gets given path extension or empty string if any

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *string*
