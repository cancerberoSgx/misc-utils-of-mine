[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/boxes"](_string_boxes_.md)

# Module: "string/boxes"

## Index

### Enumerations

* [BorderSide](../enums/_string_boxes_.borderside.md)
* [BorderStyle](../enums/_string_boxes_.borderstyle.md)

### Type aliases

* [BoxStyles](_string_boxes_.md#boxstyles)

### Variables

* [borderStyles](_string_boxes_.md#const-borderstyles)
* [boxStyles](_string_boxes_.md#let-boxstyles)

### Functions

* [getBoxChar](_string_boxes_.md#getboxchar)
* [getBoxStyles](_string_boxes_.md#const-getboxstyles)

## Type aliases

###  BoxStyles

Ƭ **BoxStyles**: *object*

*Defined in [src/string/boxes.ts:84](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/boxes.ts#L84)*

#### Type declaration:

## Variables

### `Const` borderStyles

• **borderStyles**: *string[]* = enumKeys(BorderStyle)

*Defined in [src/string/boxes.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/boxes.ts#L28)*

___

### `Let` boxStyles

• **boxStyles**: *[BoxStyles](_string_boxes_.md#boxstyles) | undefined*

*Defined in [src/string/boxes.ts:88](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/boxes.ts#L88)*

## Functions

###  getBoxChar

▸ **getBoxChar**(`s`: [BorderStyle](../enums/_string_boxes_.borderstyle.md), `si`: [BorderSide](../enums/_string_boxes_.borderside.md)): *string*

*Defined in [src/string/boxes.ts:45](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/boxes.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | [BorderStyle](../enums/_string_boxes_.borderstyle.md) |
`si` | [BorderSide](../enums/_string_boxes_.borderside.md) |

**Returns:** *string*

___

### `Const` getBoxStyles

▸ **getBoxStyles**(): *[BoxStyles](_string_boxes_.md#boxstyles)*

*Defined in [src/string/boxes.ts:90](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/boxes.ts#L90)*

**Returns:** *[BoxStyles](_string_boxes_.md#boxstyles)*
