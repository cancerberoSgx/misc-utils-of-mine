**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/misc"](_string_misc_.md)

# External module: "string/misc"

## Index

### Functions

* [removeEmptyLines](_string_misc_.md#removeemptylines)
* [removeWhites](_string_misc_.md#removewhites)
* [shorter](_string_misc_.md#shorter)
* [stringToObject](_string_misc_.md#stringtoobject)
* [trimRightLines](_string_misc_.md#trimrightlines)

## Functions

###  removeEmptyLines

▸ **removeEmptyLines**(`c`: string): *string*

*Defined in [string/misc.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dbc2d8a/misc-utils-of-mine-generic/src/string/misc.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *string*

___

###  removeWhites

▸ **removeWhites**(`s`: string, `replaceWith`: string): *string*

*Defined in [string/misc.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dbc2d8a/misc-utils-of-mine-generic/src/string/misc.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`replaceWith` | string | " " |

**Returns:** *string*

___

###  shorter

▸ **shorter**(`text`: string, `much`: number): *string*

*Defined in [string/misc.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dbc2d8a/misc-utils-of-mine-generic/src/string/misc.ts#L1)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`text` | string | - |
`much` | number | 10 |

**Returns:** *string*

___

###  stringToObject

▸ **stringToObject**(`s`: string, `propSep`: string, `nameValueSep`: string): *any*

*Defined in [string/misc.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dbc2d8a/misc-utils-of-mine-generic/src/string/misc.ts#L26)*

Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world}`

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | "" |
`propSep` | string | "," |
`nameValueSep` | string | ":" |

**Returns:** *any*

___

###  trimRightLines

▸ **trimRightLines**(`s`: string): *string*

*Defined in [string/misc.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dbc2d8a/misc-utils-of-mine-generic/src/string/misc.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*