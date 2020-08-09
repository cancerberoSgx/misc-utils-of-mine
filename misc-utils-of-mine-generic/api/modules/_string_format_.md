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

*Defined in [src/string/format.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L15)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`i` | number | 1 |
`tabSize` | number | 2 |

**Returns:** *string*

___

###  quote

▸ **quote**(`s`: string, `q`: string): *string*

*Defined in [src/string/format.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`q` | string | """ |

**Returns:** *string*

___

###  repeat

▸ **repeat**(`n`: number, `s`: string): *string*

*Defined in [src/string/format.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`s` | string |

**Returns:** *string*

___

###  strip

▸ **strip**(`s`: string): *string*

*Defined in [src/string/format.ts:29](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L29)*

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

*Defined in [src/string/format.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  wordWrap

▸ **wordWrap**(`s`: string, `w`: number, `newLine`: string): *string*

*Defined in [src/string/format.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/string/format.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`w` | number | - |
`newLine` | string | "
" |

**Returns:** *string*
