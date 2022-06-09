[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/create"](_array_create_.md)

# Module: "array/create"

## Index

### Functions

* [array](_array_create_.md#array)
* [arrayRangePartition](_array_create_.md#arrayrangepartition)
* [asArray](_array_create_.md#asarray)
* [fill](_array_create_.md#fill)
* [randomItems](_array_create_.md#randomitems)
* [seq](_array_create_.md#seq)
* [shuffle](_array_create_.md#shuffle)

## Functions

###  array

▸ **array**‹**T**›(`n`: number, `sample?`: T): *T[]*

*Defined in [src/array/create.ts:2](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L2)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`sample?` | T |

**Returns:** *T[]*

___

###  arrayRangePartition

▸ **arrayRangePartition**‹**T**›(`input`: T[], `length`: number, `fillRestWith?`: T): *T[][]*

*Defined in [src/array/create.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L40)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`input` | T[] |
`length` | number |
`fillRestWith?` | T |

**Returns:** *T[][]*

___

###  asArray

▸ **asArray**‹**T**›(`value`: T | T[]): *T[]*

*Defined in [src/array/create.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L10)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`value` | T &#124; T[] |

**Returns:** *T[]*

___

###  fill

▸ **fill**‹**T**›(`a`: T[], `length`: number, `fillWith`: T, `before`: boolean): *T[]*

*Defined in [src/array/create.ts:59](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L59)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | T[] | - |
`length` | number | - |
`fillWith` | T | - |
`before` | boolean | false |

**Returns:** *T[]*

___

###  randomItems

▸ **randomItems**‹**T**›(`a`: T[], `amount`: number): *T[]*

*Defined in [src/array/create.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L22)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T[] |
`amount` | number |

**Returns:** *T[]*

___

###  seq

▸ **seq**(`start`: number, `step`: number, `max`: number): *number[]*

*Defined in [src/array/create.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`start` | number | 0 |
`step` | number | 1 |
`max` | number | 0 |

**Returns:** *number[]*

___

###  shuffle

▸ **shuffle**‹**T**›(`a`: T[]): *T[]*

*Defined in [src/array/create.ts:36](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/array/create.ts#L36)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T[] |

**Returns:** *T[]*
