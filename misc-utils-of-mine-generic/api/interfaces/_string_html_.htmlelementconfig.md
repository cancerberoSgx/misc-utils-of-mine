[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/html"](../modules/_string_html_.md) › [HtmlElementConfig](_string_html_.htmlelementconfig.md)

# Interface: HtmlElementConfig

## Hierarchy

* **HtmlElementConfig**

## Index

### Properties

* [attributes](_string_html_.htmlelementconfig.md#optional-attributes)
* [children](_string_html_.htmlelementconfig.md#optional-children)
* [forceContent](_string_html_.htmlelementconfig.md#optional-forcecontent)
* [innerHTML](_string_html_.htmlelementconfig.md#optional-innerhtml)
* [name](_string_html_.htmlelementconfig.md#name)

## Properties

### `Optional` attributes

• **attributes**? : *object[]*

*Defined in [src/string/html.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/string/html.ts#L50)*

___

### `Optional` children

• **children**? : *[HtmlElementConfig](_string_html_.htmlelementconfig.md)[]*

*Defined in [src/string/html.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/string/html.ts#L51)*

___

### `Optional` forceContent

• **forceContent**? : *undefined | false | true*

*Defined in [src/string/html.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/string/html.ts#L54)*

by default, if there's no children or innerHTML we use a single-closing tag like `<tag/>`.  If this is true will force the format <tag></tag> always.

___

### `Optional` innerHTML

• **innerHTML**? : *undefined | string*

*Defined in [src/string/html.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/string/html.ts#L52)*

___

###  name

• **name**: *string*

*Defined in [src/string/html.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/string/html.ts#L49)*
