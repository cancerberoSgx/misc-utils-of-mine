[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["array/prototypeFind"](_array_prototypefind_.md)

# Module: "array/prototypeFind"

## Index

### Type aliases

* [FindPredicate](_array_prototypefind_.md#findpredicate)

### Functions

* [arrayPrototypeFind](_array_prototypefind_.md#arrayprototypefind)
* [installArrayPrototypeFind](_array_prototypefind_.md#installarrayprototypefind)

## Type aliases

###  FindPredicate

Ƭ **FindPredicate**: *function*

*Defined in [src/array/prototypeFind.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4b5e32c/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L15)*

#### Type declaration:

▸ (`this`: E, `value`: T, `index`: number, `obj`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`this` | E |
`value` | T |
`index` | number |
`obj` | T[] |

## Functions

###  arrayPrototypeFind

▸ **arrayPrototypeFind**‹**T**, **E**›(`this`: E, `a`: T[], `predicate`: [FindPredicate](_array_prototypefind_.md#findpredicate)‹T, typeof thisArg›, `thisArg?`: E): *T | undefined*

*Defined in [src/array/prototypeFind.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4b5e32c/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L1)*

**Type parameters:**

▪ **T**

▪ **E**

**Parameters:**

Name | Type |
------ | ------ |
`this` | E |
`a` | T[] |
`predicate` | [FindPredicate](_array_prototypefind_.md#findpredicate)‹T, typeof thisArg› |
`thisArg?` | E |

**Returns:** *T | undefined*

___

###  installArrayPrototypeFind

▸ **installArrayPrototypeFind**(`force`: boolean): *void*

*Defined in [src/array/prototypeFind.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4b5e32c/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L17)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`force` | boolean | false |

**Returns:** *void*
