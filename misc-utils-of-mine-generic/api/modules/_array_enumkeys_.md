**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["array/enumKeys"](_array_enumkeys_.md)

# External module: "array/enumKeys"

## Index

### Functions

* [enumKeys](_array_enumkeys_.md#enumkeys)
* [enumNoValueKeys](_array_enumkeys_.md#enumnovaluekeys)

## Functions

###  enumKeys

▸ **enumKeys**(`anEnum`: any): *string[]*

*Defined in [array/enumKeys.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/29f2b37/misc-utils-of-mine-generic/src/array/enumKeys.ts#L5)*

List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'},
if not values could be also returned . For enums without declared values, use enumNoValueKeys

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |

**Returns:** *string[]*

___

###  enumNoValueKeys

▸ **enumNoValueKeys**(`anEnum`: any): *string[]*

*Defined in [array/enumKeys.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/29f2b37/misc-utils-of-mine-generic/src/array/enumKeys.ts#L18)*

List given enum keys as array. Differently to [enumKeys](_array_enumkeys_.md#enumkeys), is should be used only on enums that doesn't
have assigned values
or other wise on those which values are identical to the keys or not strings. If not, they will be returned also!

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |

**Returns:** *string[]*