**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["array/filter"](_array_filter_.md)

# External module: "array/filter"

## Index

### Functions

* [dedup](_array_filter_.md#dedup)
* [notSame](_array_filter_.md#notsame)
* [notSameNotFalsy](_array_filter_.md#notsamenotfalsy)

## Functions

###  dedup

▸ **dedup**<**T**>(`a`: T[], `p`: function): *T[]*

*Defined in [array/filter.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/array/filter.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *T[]*

▪ **p**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T[]*

___

###  notSame

▸ **notSame**<**T**>(`t`: T, `i`: number, `a`: T[]): *boolean*

*Defined in [array/filter.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/array/filter.ts#L10)*

Use it to remove duplicates in array's filter expressions like `array.filter(notSame)`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |
`i` | number |
`a` | T[] |

**Returns:** *boolean*

___

###  notSameNotFalsy

▸ **notSameNotFalsy**<**T**>(`t`: T, `i`: number, `a`: T[]): *boolean*

*Defined in [array/filter.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/array/filter.ts#L18)*

Use it remove duplicates and falsy values in filter() expressions like
`array.filter(notSameNotFalsy)`

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |
`i` | number |
`a` | T[] |

**Returns:** *boolean*