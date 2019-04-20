[misc-utils-of-mine-generic](../README.md) > ["file"](../modules/_file_.md)

# External module: "file"

## Index

### Functions

* [basename](_file_.md#basename)
* [bytesToKiloBytes](_file_.md#bytestokilobytes)
* [dirname](_file_.md#dirname)
* [getRelativePath](_file_.md#getrelativepath)
* [pathJoin](_file_.md#pathjoin)
* [withoutExtension](_file_.md#withoutextension)

---

## Functions

<a id="basename"></a>

###  basename

▸ **basename**(f: *`string`*): `string`

*Defined in [file.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L14)*

Supports only '/' as folder separator. Similar to node.jspath basename, returns the file name without folder and with the extension. ues withoutExtension to remove it

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `string` |

**Returns:** `string`

___
<a id="bytestokilobytes"></a>

###  bytesToKiloBytes

▸ **bytesToKiloBytes**(fileSizeInBytes: *`number`*): `number`

*Defined in [file.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L1)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fileSizeInBytes | `number` |

**Returns:** `number`

___
<a id="dirname"></a>

###  dirname

▸ **dirname**(s: *`string`*): `string`

*Defined in [file.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L22)*

Supports only '/' as folder separator.

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `string`

___
<a id="getrelativepath"></a>

###  getRelativePath

▸ **getRelativePath**(source: *`string`*, target: *`string`*): `string`

*Defined in [file.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L34)*

Given a source directory and a target filename, return the relative file path from source to target.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| source | `string` |  directory path to start from for traversal |
| target | `string` |  directory path and filename to seek from source |

**Returns:** `string`
Relative path (e.g. "../../style.css") as {String}

___
<a id="pathjoin"></a>

###  pathJoin

▸ **pathJoin**(...parts: *`string`[]*): `string`

*Defined in [file.ts:56](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L56)*

similar to node.js path.join(), using separator '/'

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` parts | `string`[] |

**Returns:** `string`

___
<a id="withoutextension"></a>

###  withoutExtension

▸ **withoutExtension**(f: *`string`*): `string`

*Defined in [file.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/file.ts#L6)*

Supports only '/' as folder separator.

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `string` |

**Returns:** `string`

___

