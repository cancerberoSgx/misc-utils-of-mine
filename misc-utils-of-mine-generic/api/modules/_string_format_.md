[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/format"](_string_format_.md)

# Module: "string/format"

## Index

### Functions

* [indent](_string_format_.md#indent)
* [quote](_string_format_.md#quote)
* [repeat](_string_format_.md#repeat)
* [strip](_string_format_.md#strip)
* [unquote](_string_format_.md#unquote)
* [wordWrap](_string_format_.md#wordwrap)

## Functions

###  indent

▸ **indent**(`i`: number, `tabSize`: number): *string*

*Defined in [src/string/format.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`i` | number | 1 |
`tabSize` | number | 2 |

**Returns:** *string*

___

###  quote

▸ **quote**(`s`: string, `quote`: string): *string*

*Defined in [src/string/format.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L6)*

wrap string with given quote character and escape it in the string. Useful to quote strings to be printed as json, sql values, etc.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`quote` | string | """ |

**Returns:** *string*

___

###  repeat

▸ **repeat**(`n`: number, `s`: string): *string*

*Defined in [src/string/format.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`s` | string |

**Returns:** *string*

___

###  strip

▸ **strip**(`s`: string): *string*

*Defined in [src/string/format.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L32)*

strips ANSI codes from a string. From https://github.com/xpl/ansicolor/blob/master/ansicolor.js

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | a string containing ANSI escape codes. |

**Returns:** *string*

clean string.

___

###  unquote

▸ **unquote**(`s`: string): *string*

*Defined in [src/string/format.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  wordWrap

▸ **wordWrap**(`s`: string, `w`: number, `newLine`: string): *string*

*Defined in [src/string/format.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/7016944/misc-utils-of-mine-generic/src/string/format.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`w` | number | - |
`newLine` | string | "
" |

**Returns:** *string*
