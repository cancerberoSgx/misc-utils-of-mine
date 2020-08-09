[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["url"](_url_.md)

# Module: "url"

## Index

### Functions

* [getFileNameFromUrl](_url_.md#getfilenamefromurl)
* [getParametersFromUrl](_url_.md#getparametersfromurl)
* [isAbsoluteUrl](_url_.md#isabsoluteurl)
* [parseAbsoluteUrl](_url_.md#parseabsoluteurl)

## Functions

###  getFileNameFromUrl

▸ **getFileNameFromUrl**(`url`: string): *string*

*Defined in [src/url.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/url.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *string*

___

###  getParametersFromUrl

▸ **getParametersFromUrl**(`url`: string, `options`: object): *object*

*Defined in [src/url.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/url.ts#L7)*

**Parameters:**

▪ **url**: *string*

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`parseBoolean?` | undefined &#124; false &#124; true |
`parseNumber?` | undefined &#124; false &#124; true |

**Returns:** *object*

* \[ **s**: *string*\]: string

___

###  isAbsoluteUrl

▸ **isAbsoluteUrl**(`url`: string): *boolean*

*Defined in [src/url.ts:38](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/url.ts#L38)*

Returns true iff given url starts with a protocol ("http://", "https://", etc).
Notice that this is not strictly the absolute url definition

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *boolean*

___

###  parseAbsoluteUrl

▸ **parseAbsoluteUrl**(`url`: string): *null | object*

*Defined in [src/url.ts:42](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/url.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *null | object*
