[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/set"](_array_set_.md)

# Module: "array/set"

## Index

### Variables

* [arrayUnion](_array_set_.md#const-arrayunion)

### Functions

* [arrayDifference](_array_set_.md#arraydifference)
* [arrayInterception](_array_set_.md#arrayinterception)
* [unionEquals](_array_set_.md#unionequals)

## Variables

### `Const` arrayUnion

• **arrayUnion**: *[unionEquals](_array_set_.md#unionequals)* = unionEquals

*Defined in [src/array/set.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/array/set.ts#L9)*

## Functions

###  arrayDifference

▸ **arrayDifference**‹**A**›(`a`: A[], `b`: A[], `predicate`: function, `output?`: A[]): *A[]*

*Defined in [src/array/set.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/array/set.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **a**: *A[]*

▪ **b**: *A[]*

▪`Default value`  **predicate**: *function*= (a, b) => a === b

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

▸ **arrayInterception**‹**A**›(`a`: A[], `b`: A[], `predicate`: function, `output?`: A[]): *A[]*

*Defined in [src/array/set.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/array/set.ts#L11)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **a**: *A[]*

▪ **b**: *A[]*

▪`Default value`  **predicate**: *function*= (a, b) => a === b

▸ (`a`: A, `b`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▪`Optional`  **output**: *A[]*

**Returns:** *A[]*

___

###  unionEquals

▸ **unionEquals**‹**T**›(`a`: T[], `b`: T[], `predicate`: function, `output?`: T[]): *T[]*

*Defined in [src/array/set.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/array/set.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *T[]*

▪ **b**: *T[]*

▪`Default value`  **predicate**: *function*= (a, b) => a === b

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

▪`Optional`  **output**: *T[]*

**Returns:** *T[]*
