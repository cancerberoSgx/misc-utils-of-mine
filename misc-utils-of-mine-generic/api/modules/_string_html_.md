[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/html"](_string_html_.md)

# Module: "string/html"

## Index

### Interfaces

* [HtmlElementConfig](../interfaces/_string_html_.htmlelementconfig.md)

### Functions

* [addUniqueParam](_string_html_.md#adduniqueparam)
* [escapeHtmlAttribute](_string_html_.md#escapehtmlattribute)
* [htmlElement](_string_html_.md#htmlelement)
* [styleObjectToCss](_string_html_.md#styleobjecttocss)
* [stylePropertyNameToCssSyntax](_string_html_.md#stylepropertynametocsssyntax)
* [unEscapeHtmlAttribute](_string_html_.md#unescapehtmlattribute)
* [wrapInHtml](_string_html_.md#wrapinhtml)

## Functions

###  addUniqueParam

▸ **addUniqueParam**(`url`: string, `param`: string): *string*

*Defined in [src/string/html.ts:98](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L98)*

adds a parameter named `param` with a value that tries to be unique. The intending behavior is to add a "nocache" parameter

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`param` | string |

**Returns:** *string*

___

###  escapeHtmlAttribute

▸ **escapeHtmlAttribute**(`code`: string): *string*

*Defined in [src/string/html.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  htmlElement

▸ **htmlElement**(`config`: [HtmlElementConfig](../interfaces/_string_html_.htmlelementconfig.md)): *string*

*Defined in [src/string/html.ts:72](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L72)*

```
htmlElement({
name: 'a',
attributes: [{name: 'href', value: 'foo.com'}, {name: 'id', value: 'clickMe'}],
innerHTML: 'click me'
})
```
will return something like:

```
<a href="foo.com" id="clickMe">click me</a>
```

TODO: indentLevel

**Parameters:**

Name | Type |
------ | ------ |
`config` | [HtmlElementConfig](../interfaces/_string_html_.htmlelementconfig.md) |

**Returns:** *string*

___

###  styleObjectToCss

▸ **styleObjectToCss**(`o`: Partial‹object›, `propertiesSeparator`: string): *string*

*Defined in [src/string/html.ts:31](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L31)*

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

*Defined in [src/string/html.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L40)*

Transform a string like `fooBar` to `foo-bar`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  unEscapeHtmlAttribute

▸ **unEscapeHtmlAttribute**(`code`: string): *string*

*Defined in [src/string/html.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  wrapInHtml

▸ **wrapInHtml**(`s`: string): *string*

*Defined in [src/string/html.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/string/html.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*
