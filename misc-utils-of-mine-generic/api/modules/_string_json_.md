**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/json"](_string_json_.md)

# External module: "string/json"

## Index

### Functions

* [cloneJSON](_string_json_.md#clonejson)
* [parseJSON](_string_json_.md#parsejson)
* [stringifyJSON](_string_json_.md#stringifyjson)

## Functions

###  cloneJSON

▸ **cloneJSON**<**T**>(`a`: T): *T*

*Defined in [string/json.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/81c6d6b/misc-utils-of-mine-generic/src/string/json.ts#L18)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

**Returns:** *T*

___

###  parseJSON

▸ **parseJSON**<**K**>(`s`: string, `defaultValue`: K | undefined): *K | undefined*

*Defined in [string/json.ts:2](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/81c6d6b/misc-utils-of-mine-generic/src/string/json.ts#L2)*

try to parse given json string. return undefined in case there is an error.

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`defaultValue` | K \| undefined |  undefined |

**Returns:** *K | undefined*

___

###  stringifyJSON

▸ **stringifyJSON**<**K**>(`s`: K, `defaultValue`: string | undefined): *string | undefined*

*Defined in [string/json.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/81c6d6b/misc-utils-of-mine-generic/src/string/json.ts#L10)*

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | K | - |
`defaultValue` | string \| undefined |  undefined |

**Returns:** *string | undefined*