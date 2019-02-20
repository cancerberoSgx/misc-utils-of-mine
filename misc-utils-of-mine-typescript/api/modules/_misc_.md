[misc-utils-of-mine-typescript](../README.md) > ["misc"](../modules/_misc_.md)

# External module: "misc"

## Index

### Type aliases

* [Falsy](_misc_.md#falsy)
* [NotFalsy](_misc_.md#notfalsy)
* [NotUndefined](_misc_.md#notundefined)
* [TODO](_misc_.md#todo)
* [UnionToIntersection](_misc_.md#uniontointersection)
* [falsy](_misc_.md#falsy-1)

### Functions

* [notFalsy](_misc_.md#notfalsy-1)
* [notUndefined](_misc_.md#notundefined-1)

---

## Type aliases

<a id="falsy"></a>

###  Falsy

**Ƭ Falsy**: *`Falsy<T>`*

*Defined in [misc.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L15)*

Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments. Example `Falsy<number\|boolean\|null>` will be `false\|null`

___
<a id="notfalsy"></a>

###  NotFalsy

**Ƭ NotFalsy**: *`Exclude`<`T`, [falsy](_misc_.md#falsy-1)>*

*Defined in [misc.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L19)*

Removes undefined from type. Example `Falsy<number\|boolean>` will be `number\|true`

___
<a id="notundefined"></a>

###  NotUndefined

**Ƭ NotUndefined**: *`Exclude`<`T`, `undefined`>*

*Defined in [misc.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L8)*

Removes undefined from type

___
<a id="todo"></a>

###  TODO

**Ƭ TODO**: *`any`*

*Defined in [misc.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L5)*

Useful TODO reminder when you are porting typings of a JavaScript library

___
<a id="uniontointersection"></a>

###  UnionToIntersection

**Ƭ UnionToIntersection**: *`UnionToIntersection<U>`*

*Defined in [misc.ts:2](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L2)*

UnionToIntersection<1\|2\|3> will be 1 & 2 & 3

___
<a id="falsy-1"></a>

###  falsy

**Ƭ falsy**: *`undefined` \| `null` \| `false` \| `""` \| `0`*

*Defined in [misc.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L10)*

___

## Functions

<a id="notfalsy-1"></a>

###  notFalsy

▸ **notFalsy**<`T`>(n: *`T`*): `boolean`

*Defined in [misc.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L28)*

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

*Defined in [misc.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/misc.ts#L23)*

Useful for filtering out undefined values without casting.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `T` |

**Returns:** `boolean`

___

