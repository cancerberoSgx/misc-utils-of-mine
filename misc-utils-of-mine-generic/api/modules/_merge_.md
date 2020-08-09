[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["merge"](_merge_.md)

# Module: "merge"

## Index

### Functions

* [clone](_merge_.md#clone)
* [merge](_merge_.md#merge)
* [mergeRecursive](_merge_.md#mergerecursive)
* [recursive](_merge_.md#recursive)

## Functions

###  clone

▸ **clone**(`input`: any): *any*

*Defined in [src/merge.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/merge.ts#L21)*

Clone the input removing any reference.

**Parameters:**

Name | Type |
------ | ------ |
`input` | any |

**Returns:** *any*

___

###  merge

▸ **merge**(`clone_`: boolean, `recursive`: boolean, ...`argv`: any[]): *any*

*Defined in [src/merge.ts:55](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/merge.ts#L55)*

Mergestwo or more objects.

**Parameters:**

Name | Type |
------ | ------ |
`clone_` | boolean |
`recursive` | boolean |
`...argv` | any[] |

**Returns:** *any*

___

###  mergeRecursive

▸ **mergeRecursive**(`base`: any, `extend`: any): *any*

*Defined in [src/merge.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/merge.ts#L40)*

Merges two objects recursively.

**Parameters:**

Name | Type |
------ | ------ |
`base` | any |
`extend` | any |

**Returns:** *any*

___

###  recursive

▸ **recursive**(`clone?`: undefined | false | true): *any*

*Defined in [src/merge.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6fdfb9c/misc-utils-of-mine-generic/src/merge.ts#L13)*

Merge two or more objects recursively.

**Parameters:**

Name | Type |
------ | ------ |
`clone?` | undefined &#124; false &#124; true |

**Returns:** *any*
