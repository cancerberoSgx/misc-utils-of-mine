> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["array/array"](_array_array_.md) /

# External module: "array/array"

## Index

### Functions

* [array](_array_array_.md#array)
* [arrayInterception](_array_array_.md#arrayinterception)
* [asArray](_array_array_.md#asarray)
* [dedup](_array_array_.md#dedup)
* [notSame](_array_array_.md#notsame)
* [notSameNotFalsy](_array_array_.md#notsamenotfalsy)
* [seq](_array_array_.md#seq)
* [unionEquals](_array_array_.md#unionequals)

## Functions

###  array

▸ **array**<**T**>(`n`: number, `sample?`: [T]()): *`T`[]*

*Defined in [array/array.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`sample?` | [T]() |

**Returns:** *`T`[]*

___

###  arrayInterception

▸ **arrayInterception**<**A**, **B**>(`a`: `A`[], `b`: `B`[]): *`A` | `B`[]*

*Defined in [array/array.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L26)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`a` | `A`[] |
`b` | `B`[] |

**Returns:** *`A` | `B`[]*

___

###  asArray

▸ **asArray**<**T**>(`selectors`: `T` | `T`[]): *`T`[]*

*Defined in [array/array.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L15)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`selectors` | `T` \| `T`[] |

**Returns:** *`T`[]*

___

###  dedup

▸ **dedup**<**T**>(`a`: `T`[], `p`: function): *`T`[]*

*Defined in [array/array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L11)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *`T`[]*

▪ **p**: *function*

▸ (`a`: `T`, `b`: `T`): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | `T` |
`b` | `T` |

**Returns:** *`T`[]*

___

###  notSame

▸ **notSame**<**T**>(`t`: `T`, `i`: number, `a`: `T`[]): *boolean*

*Defined in [array/array.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L41)*

Use it to remove duplicates in array's filter expressions like `array.filter(notSame)`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | `T` |
`i` | number |
`a` | `T`[] |

**Returns:** *boolean*

___

###  notSameNotFalsy

▸ **notSameNotFalsy**<**T**>(`t`: `T`, `i`: number, `a`: `T`[]): *boolean*

*Defined in [array/array.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L49)*

Use it remove duplicates and falsy values in filter() expressions like
`array.filter(notSameNotFalsy)`

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`t` | `T` |
`i` | number |
`a` | `T`[] |

**Returns:** *boolean*

___

###  seq

▸ **seq**(`start`: number, `step`: number, `max`: number): *number[]*

*Defined in [array/array.ts:30](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L30)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`start` | number | 0 |
`step` | number | 1 |
`max` | number | 0 |

**Returns:** *number[]*

___

###  unionEquals

▸ **unionEquals**<**T**>(`left`: `T`[], `right`: `T`[], `equals`: function): *`T`[]*

*Defined in [array/array.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/ca10768/misc-utils-of-mine-generic/src/array/array.ts#L19)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **left**: *`T`[]*

▪ **right**: *`T`[]*

▪ **equals**: *function*

▸ (`a`: `T`, `b`: `T`): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | `T` |
`b` | `T` |

**Returns:** *`T`[]*