[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/html"](_string_html_.md)

# Module: "string/html"

## Index

### Interfaces

* [HtmlElementConfig](../interfaces/_string_html_.htmlelementconfig.md)

### Functions

* [escapeHtmlAttribute](_string_html_.md#escapehtmlattribute)
* [htmlElement](_string_html_.md#htmlelement)
* [styleObjectToCss](_string_html_.md#styleobjecttocss)
* [stylePropertyNameToCssSyntax](_string_html_.md#stylepropertynametocsssyntax)
* [unEscapeHtmlAttribute](_string_html_.md#unescapehtmlattribute)
* [wrapInHtml](_string_html_.md#wrapinhtml)

## Functions

###  escapeHtmlAttribute

▸ **escapeHtmlAttribute**(`code`: string): *string*

Defined in src/string/html.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  htmlElement

▸ **htmlElement**(`config`: [HtmlElementConfig](../interfaces/_string_html_.htmlelementconfig.md)): *string*

Defined in src/string/html.ts:68

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

Defined in src/string/html.ts:29

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

Defined in src/string/html.ts:38

Transform a string like `fooBar` to `foo-bar`

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

###  unEscapeHtmlAttribute

▸ **unEscapeHtmlAttribute**(`code`: string): *string*

Defined in src/string/html.ts:5

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *string*

___

###  wrapInHtml

▸ **wrapInHtml**(`s`: string): *string*

Defined in src/string/html.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*
