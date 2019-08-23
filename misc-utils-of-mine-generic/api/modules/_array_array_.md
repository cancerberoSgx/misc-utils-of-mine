**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["array/array"](_array_array_.md)

# External module: "array/array"

## Index

### Variables

* [arrayUnion](_array_array_.md#const-arrayunion)

### Functions

* [array](_array_array_.md#array)
* [arrayDifference](_array_array_.md#arraydifference)
* [arrayInterception](_array_array_.md#arrayinterception)
* [asArray](_array_array_.md#asarray)
* [dedup](_array_array_.md#dedup)
* [notSame](_array_array_.md#notsame)
* [notSameNotFalsy](_array_array_.md#notsamenotfalsy)
* [seq](_array_array_.md#seq)
* [unionEquals](_array_array_.md#unionequals)

## Variables

### `Const` arrayUnion

• **arrayUnion**: *[unionEquals](_array_array_.md#unionequals)* =  unionEquals

*Defined in [array/array.ts:38](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L38)*

## Functions

###  array

▸ **array**<**T**>(`n`: number, `sample?`: [T]()): *T[]*

*Defined in [array/array.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`sample?` | [T]() |

**Returns:** *T[]*

___

###  arrayDifference

▸ **arrayDifference**<**A**>(`a`: A[], `b`: A[], `predicate`: function, `output?`: A[]): *A[]*

*Defined in [array/array.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L52)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **a**: *A[]*

▪ **b**: *A[]*

▪`Default value`  **predicate**: *function*=  (a, b) => a === b

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▪`Optional`  **output**: *A[]*

**Returns:** *A[]*

___

###  arrayInterception

▸ **arrayInterception**<**A**>(`a`: A[], `b`: A[], `predicate`: function, `output?`: A[]): *A[]*

*Defined in [array/array.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L40)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **a**: *A[]*

▪ **b**: *A[]*

▪`Default value`  **predicate**: *function*=  (a, b) => a === b

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▪`Optional`  **output**: *A[]*

**Returns:** *A[]*

___

###  asArray

▸ **asArray**<**T**>(`selectors`: T | T[]): *T[]*

*Defined in [array/array.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L16)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selectors` | T \| T[] |

**Returns:** *T[]*

___

###  dedup

▸ **dedup**<**T**>(`a`: T[], `p`: function): *T[]*

*Defined in [array/array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L11)*

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

*Defined in [array/array.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L75)*

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

*Defined in [array/array.ts:83](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L83)*

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

___

###  seq

▸ **seq**(`start`: number, `step`: number, `max`: number): *number[]*

*Defined in [array/array.ts:64](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L64)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`start` | number | 0 |
`step` | number | 1 |
`max` | number | 0 |

**Returns:** *number[]*

___

###  unionEquals

▸ **unionEquals**<**T**>(`a`: T[], `b`: T[], `predicate`: function, `output?`: T[]): *T[]*

*Defined in [array/array.ts:20](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b8cbc13/misc-utils-of-mine-generic/src/array/array.ts#L20)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *T[]*

▪ **b**: *T[]*

▪`Default value`  **predicate**: *function*=  (a, b) => a === b

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪`Optional`  **output**: *T[]*

**Returns:** *T[]*