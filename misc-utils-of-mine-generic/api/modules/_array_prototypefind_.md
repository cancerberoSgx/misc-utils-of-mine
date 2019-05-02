[misc-utils-of-mine-generic](../README.md) > ["array/prototypeFind"](../modules/_array_prototypefind_.md)

# External module: "array/prototypeFind"

## Index

### Modules

* [__global](_array_prototypefind_.__global.md)

### Type aliases

* [FindPredicate](_array_prototypefind_.md#findpredicate)

### Functions

* [arrayPrototypeFind](_array_prototypefind_.md#arrayprototypefind)
* [installArrayPrototypeFind](_array_prototypefind_.md#installarrayprototypefind)

---

## Type aliases

<a id="findpredicate"></a>

###  FindPredicate

**Ƭ FindPredicate**: *`function`*

*Defined in [array/prototypeFind.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/f96cdd6/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L15)*

#### Type declaration
▸(this: *`E`*, value: *`T`*, index: *`number`*, obj: *`T`[]*): `boolean`

**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `E` |
| value | `T` |
| index | `number` |
| obj | `T`[] |

**Returns:** `boolean`

___

## Functions

<a id="arrayprototypefind"></a>

###  arrayPrototypeFind

▸ **arrayPrototypeFind**<`T`,`E`>(this: *`E`*, a: *`T`[]*, predicate: *[FindPredicate](_array_prototypefind_.md#findpredicate)<`T`, `undefined` \| `E`>*, thisArg?: *[E]()*): `T` \| `undefined`

*Defined in [array/prototypeFind.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/f96cdd6/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L1)*

**Type parameters:**

#### T 
#### E 
**Parameters:**

| Name | Type |
| ------ | ------ |
| this | `E` |
| a | `T`[] |
| predicate | [FindPredicate](_array_prototypefind_.md#findpredicate)<`T`, `undefined` \| `E`> |
| `Optional` thisArg | [E]() |

**Returns:** `T` \| `undefined`

___
<a id="installarrayprototypefind"></a>

###  installArrayPrototypeFind

▸ **installArrayPrototypeFind**(force?: *`boolean`*): `void`

*Defined in [array/prototypeFind.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/f96cdd6/misc-utils-of-mine-generic/src/array/prototypeFind.ts#L23)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` force | `boolean` | false |

**Returns:** `void`

___

