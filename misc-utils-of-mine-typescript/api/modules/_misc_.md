[misc-utils-of-mine-typescript](../README.md) > ["misc"](../modules/_misc_.md)

# External module: "misc"

## Index

### Type aliases

* [Falsy](_misc_.md#falsy)
* [NotFalsy](_misc_.md#notfalsy)
* [NotUndefined](_misc_.md#notundefined)
* [TODO](_misc_.md#todo)
* [UnionToIntersection](_misc_.md#uniontointersection)

### Functions

* [notFalsy](_misc_.md#notfalsy-1)
* [notUndefined](_misc_.md#notundefined-1)

---

## Type aliases

<a id="falsy"></a>

###  Falsy

**Ƭ Falsy**: *`undefined` \| `null` \| `false` \| `""`*

*Defined in [misc.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L10)*

___
<a id="notfalsy"></a>

###  NotFalsy

**Ƭ NotFalsy**: *`Exclude`<`T`, [Falsy](_misc_.md#falsy)>*

*Defined in [misc.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L13)*

Removes undefined from type

___
<a id="notundefined"></a>

###  NotUndefined

**Ƭ NotUndefined**: *`Exclude`<`T`, `undefined`>*

*Defined in [misc.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L8)*

Removes undefined from type

___
<a id="todo"></a>

###  TODO

**Ƭ TODO**: *`any`*

*Defined in [misc.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L5)*

Useful TODO reminder when you are porting typings of a JavaScript library

___
<a id="uniontointersection"></a>

###  UnionToIntersection

**Ƭ UnionToIntersection**: *`UnionToIntersection<U>`*

*Defined in [misc.ts:2](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L2)*

UnionToIntersection<1\|2\|3> will be 1 & 2 & 3

___

## Functions

<a id="notfalsy-1"></a>

###  notFalsy

▸ **notFalsy**<`T`>(n: *`T`*): `boolean`

*Defined in [misc.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L21)*

Useful for filtering out falsy values without casting.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `T` |

**Returns:** `boolean`

___
<a id="notundefined-1"></a>

###  notUndefined

▸ **notUndefined**<`T`>(n: *`T`*): `boolean`

*Defined in [misc.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/misc.ts#L16)*

Useful for filtering out undefined values without casting.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `T` |

**Returns:** `boolean`

___

