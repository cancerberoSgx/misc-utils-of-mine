**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/html"](_string_html_.md)

# External module: "string/html"

## Index

### Functions

* [escapeHtmlAttribute](_string_html_.md#escapehtmlattribute)
* [styleObjectToCss](_string_html_.md#styleobjecttocss)
* [stylePropertyNameToCssSyntax](_string_html_.md#stylepropertynametocsssyntax)
* [unEscapeHtmlAttribute](_string_html_.md#unescapehtmlattribute)
* [wrapInHtml](_string_html_.md#wrapinhtml)

## Functions

###  escapeHtmlAttribute

▸ **escapeHtmlAttribute**(`code`: string): *string*

*Defined in [string/html.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/d8d7bf0/misc-utils-of-mine-generic/src/string/html.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  styleObjectToCss

▸ **styleObjectToCss**(`o`: Partial‹object›, `propertiesSeparator`: string): *string*

*Defined in [string/html.ts:29](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/d8d7bf0/misc-utils-of-mine-generic/src/string/html.ts#L29)*

transform an object like `{fooBar: 'value 123'}` to an string like `foo-bar: value 123`.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`o` | Partial‹object› | - |
`propertiesSeparator` | string | "" |

**Returns:** *string*

___

###  stylePropertyNameToCssSyntax

▸ **stylePropertyNameToCssSyntax**(`s`: string): *string*

*Defined in [string/html.ts:38](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/d8d7bf0/misc-utils-of-mine-generic/src/string/html.ts#L38)*

Transform a string like `fooBar` to `foo-bar`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  unEscapeHtmlAttribute

▸ **unEscapeHtmlAttribute**(`code`: string): *string*

*Defined in [string/html.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/d8d7bf0/misc-utils-of-mine-generic/src/string/html.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  wrapInHtml

▸ **wrapInHtml**(`s`: string): *string*

*Defined in [string/html.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/d8d7bf0/misc-utils-of-mine-generic/src/string/html.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*