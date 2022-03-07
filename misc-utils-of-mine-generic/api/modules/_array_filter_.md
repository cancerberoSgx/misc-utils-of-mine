[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/filter"](_array_filter_.md)

# Module: "array/filter"

## Index

### Functions

* [anyUndefined](_array_filter_.md#anyundefined)
* [dedup](_array_filter_.md#dedup)
* [notFalsy](_array_filter_.md#notfalsy)
* [notSame](_array_filter_.md#notsame)
* [notSameNotFalsy](_array_filter_.md#notsamenotfalsy)
* [notUndefined](_array_filter_.md#notundefined)

## Functions

###  anyUndefined

▸ **anyUndefined**(...`a`: any[]): *boolean*

*Defined in [src/array/filter.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L41)*

Returns true if any item in given array is undefined.

**Parameters:**

Name | Type |
------ | ------ |
`...a` | any[] |

**Returns:** *boolean*

___

###  dedup

▸ **dedup**‹**T**›(`a`: T[], `predicate`: function): *T[]*

*Defined in [src/array/filter.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L6)*

Remove duplicate items according to given predicate.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *T[]*

▪ **predicate**: *function*

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *T[]*

___

###  notFalsy

▸ **notFalsy**‹**T**›(`n`: T): *n is NotFalsy‹T›*

*Defined in [src/array/filter.ts:20](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L20)*

Useful for filtering out falsy values without casting. like `array.filter(notFalsy)`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *n is NotFalsy‹T›*

___

###  notSame

▸ **notSame**‹**T**›(`t`: T, `i`: number, `a`: T[]): *boolean*

*Defined in [src/array/filter.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L27)*

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

▸ **notSameNotFalsy**‹**T**›(`t`: T, `i`: number, `a`: T[]): *t is NotFalsy‹T›*

*Defined in [src/array/filter.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L34)*

Use it remove duplicates and falsy values in filter() expressions like `array.filter(notSameNotFalsy)`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |
`i` | number |
`a` | T[] |

**Returns:** *t is NotFalsy‹T›*

___

###  notUndefined

▸ **notUndefined**‹**T**›(`n`: T): *n is NotUndefined‹T›*

*Defined in [src/array/filter.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b2d6050/misc-utils-of-mine-generic/src/array/filter.ts#L13)*

Useful for filtering out undefined values without casting. like `array.filter(notUndefined)`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *n is NotUndefined‹T›*
