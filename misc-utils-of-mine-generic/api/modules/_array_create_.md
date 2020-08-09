[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/create"](_array_create_.md)

# Module: "array/create"

## Index

### Functions

* [array](_array_create_.md#array)
* [asArray](_array_create_.md#asarray)
* [randomItems](_array_create_.md#randomitems)
* [seq](_array_create_.md#seq)
* [shuffle](_array_create_.md#shuffle)

## Functions

###  array

▸ **array**‹**T**›(`n`: number, `sample?`: T): *T[]*

*Defined in [src/array/create.ts:2](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/array/create.ts#L2)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`sample?` | T |

**Returns:** *T[]*

___

###  asArray

▸ **asArray**‹**T**›(`selectors`: T | T[]): *T[]*

*Defined in [src/array/create.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/array/create.ts#L10)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selectors` | T &#124; T[] |

**Returns:** *T[]*

___

###  randomItems

▸ **randomItems**‹**T**›(`a`: T[], `amount`: number): *T[]*

*Defined in [src/array/create.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/array/create.ts#L22)*

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

*Defined in [src/array/create.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/array/create.ts#L14)*

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

*Defined in [src/array/create.ts:36](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/array/create.ts#L36)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T[] |

**Returns:** *T[]*
