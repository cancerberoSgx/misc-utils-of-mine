[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["promise"](_promise_.md)

# Module: "promise"

## Index

### Classes

* [Deferred](../classes/_promise_.deferred.md)

### Functions

* [asyncForEach](_promise_.md#asyncforeach)
* [asyncMap](_promise_.md#asyncmap)
* [serial](_promise_.md#serial)

## Functions

###  asyncForEach

▸ **asyncForEach**(`array`: any[], `callback`: any): *Promise‹void›*

*Defined in [src/promise.ts:18](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L18)*

iterates serially

**Parameters:**

Name | Type |
------ | ------ |
`array` | any[] |
`callback` | any |

**Returns:** *Promise‹void›*

___

###  asyncMap

▸ **asyncMap**‹**T**, **R**›(`array`: T[], `callback`: function): *Promise‹R[]›*

*Defined in [src/promise.ts:25](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L25)*

applies a map() serially

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

▪ **array**: *T[]*

▪ **callback**: *function*

▸ (`t`: T, `i`: number, `a`: T[]): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`t` | T |
`i` | number |
`a` | T[] |

**Returns:** *Promise‹R[]›*

___

###  serial

▸ **serial**‹**T**›(`p`: function[]): *Promise‹T[]›*

*Defined in [src/promise.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/promise.ts#L5)*

Execute given functions returning promises serially. Returns a promise that resolves when all finish with they results as array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`p` | function[] |

**Returns:** *Promise‹T[]›*
