[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/enumKeys"](_array_enumkeys_.md)

# Module: "array/enumKeys"

## Index

### Functions

* [buildEnumMap](_array_enumkeys_.md#buildenummap)
* [enumKeys](_array_enumkeys_.md#enumkeys)
* [enumNoValueKeys](_array_enumkeys_.md#enumnovaluekeys)
* [enumValueFromString](_array_enumkeys_.md#enumvaluefromstring)
* [getEnumKey](_array_enumkeys_.md#getenumkey)
* [getEnumKeyAndValue](_array_enumkeys_.md#getenumkeyandvalue)
* [toObject](_array_enumkeys_.md#toobject)

## Functions

###  buildEnumMap

▸ **buildEnumMap**(`anEnum`: any): *any*

*Defined in [src/array/enumKeys.ts:83](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L83)*

From an enum like :
```
enum Providers {
apple = 1,
google = 2,
facebook = 3,
}
```
builds an object like this:
```
{
apple: 1,
google: 2,
facebook: 3
}
```
useful for in-code documentation/descriptions/validations

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |

**Returns:** *any*

___

###  enumKeys

▸ **enumKeys**(`anEnum`: any): *string[]*

*Defined in [src/array/enumKeys.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L5)*

List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'}, if not
values could be also returned . For enums without declared values, use enumNoValueKeys

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |

**Returns:** *string[]*

___

###  enumNoValueKeys

▸ **enumNoValueKeys**(`anEnum`: any): *string[]*

*Defined in [src/array/enumKeys.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L18)*

List given enum keys as array. Differently to [enumKeys](_array_enumkeys_.md#enumkeys), is should be used only on enums that doesn't
have assigned values or other wise on those which values are identical to the keys or not strings. If not,
they will be returned also!

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |

**Returns:** *string[]*

___

###  enumValueFromString

▸ **enumValueFromString**‹**T**›(`key`: string, `anEnum`: any): *T | undefined*

*Defined in [src/array/enumKeys.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L50)*

return the Enum type from given string enum key obtained with key [enumNoValueKeys](_array_enumkeys_.md#enumnovaluekeys)

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`anEnum` | any |

**Returns:** *T | undefined*

___

###  getEnumKey

▸ **getEnumKey**(`anEnum`: any, `value`: any): *string*

*Defined in [src/array/enumKeys.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L27)*

Returns the key of the first property with given value of given enum

**Parameters:**

Name | Type |
------ | ------ |
`anEnum` | any |
`value` | any |

**Returns:** *string*

___

###  getEnumKeyAndValue

▸ **getEnumKeyAndValue**(`e`: any): *object[]*

*Defined in [src/array/enumKeys.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L39)*

Return given enum as a {name, value} array.

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *object[]*

___

###  toObject

▸ **toObject**‹**T**›(`array`: T[], `groupByKey`: string): *object*

*Defined in [src/array/enumKeys.ts:55](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/3f33ab6/misc-utils-of-mine-generic/src/array/enumKeys.ts#L55)*

Optimal array to dictionary de serialization because `array.reduce` and `Object.assign` are too slow for large collections.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`array` | T[] |
`groupByKey` | string |

**Returns:** *object*

* \[ **s**: *string*\]: T
