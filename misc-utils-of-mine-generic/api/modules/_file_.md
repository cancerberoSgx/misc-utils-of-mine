> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["file"](_file_.md) /

# External module: "file"

## Index

### Functions

* [basename](_file_.md#basename)
* [bytesToKiloBytes](_file_.md#bytestokilobytes)
* [dirname](_file_.md#dirname)
* [getFileExtension](_file_.md#getfileextension)
* [getRelativePath](_file_.md#getrelativepath)
* [parseGitIgnore](_file_.md#parsegitignore)
* [pathJoin](_file_.md#pathjoin)
* [slash](_file_.md#slash)
* [withoutExtension](_file_.md#withoutextension)

## Functions

###  basename

▸ **basename**(`f`: string): *string*

*Defined in [file.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L16)*

Similar to node's' path.basename, returns the file name without folder and with the extension. Use [withoutExtension](_file_.md#withoutextension) to remove it.

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *string*

___

###  bytesToKiloBytes

▸ **bytesToKiloBytes**(`fileSizeInBytes`: number): *number*

*Defined in [file.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`fileSizeInBytes` | number |

**Returns:** *number*

___

###  dirname

▸ **dirname**(`path`: string): *string*

*Defined in [file.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L34)*

Gets the directory path of given path converting `\\` path separator to `/`.

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  getFileExtension

▸ **getFileExtension**(`s`: string): *string*

*Defined in [file.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L23)*

Gets given file path extension.

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  getRelativePath

▸ **getRelativePath**(`source`: string, `target`: string): *string*

*Defined in [file.ts:45](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L45)*

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

*Defined in [file.ts:82](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L82)*

Parses given .gitignore file contents to an array of string patterns. Adapted from https://github.com/sindresorhus/globby .

**Parameters:**

▪ **content**: *string*

▪`Default value`  **options**: *object*=  { cwd: '.', fileName: '.gitignore' }

Name | Type |
------ | ------ |
`cwd` | string |
`fileName` | string |

**Returns:** *string[]*

___

###  pathJoin

▸ **pathJoin**(...`parts`: string[]): *string*

*Defined in [file.ts:69](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L69)*

Similar to node's' `path.join()`. It will return the path resulting of join given path parts, converting `\\` path separator to `/`.

**Parameters:**

Name | Type |
------ | ------ |
`...parts` | string[] |

**Returns:** *string*

___

###  slash

▸ **slash**(`path`: string): *string*

*Defined in [file.ts:103](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L103)*

Converts Windows backslash paths to slash paths: `foo\\bar` ➔ `foo/bar`. Adapted from https://github.com/sindresorhus/slash/ .

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *string*

___

###  withoutExtension

▸ **withoutExtension**(`f`: string): *string*

*Defined in [file.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/file.ts#L8)*

Gets given path extension or empty string if any

**Parameters:**

Name | Type |
------ | ------ |
`f` | string |

**Returns:** *string*