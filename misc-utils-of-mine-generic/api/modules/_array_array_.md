[misc-utils-of-mine-generic](../README.md) > ["array/array"](../modules/_array_array_.md)

# External module: "array/array"

## Index

### Functions

* [array](_array_array_.md#array)
* [asArray](_array_array_.md#asarray)
* [dedup](_array_array_.md#dedup)
* [enumKeys](_array_array_.md#enumkeys)
* [enumNoValueKeys](_array_array_.md#enumnovaluekeys)
* [notSame](_array_array_.md#notsame)
* [notSameNotFalsy](_array_array_.md#notsamenotfalsy)
* [seq](_array_array_.md#seq)
* [unionEquals](_array_array_.md#unionequals)

---

## Functions

<a id="array"></a>

###  array

▸ **array**<`T`>(n: *`number`*, sample?: *[T]()*): `T`[]

*Defined in [array/array.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L3)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |
| `Optional` sample | [T]() |

**Returns:** `T`[]

___
<a id="asarray"></a>

###  asArray

▸ **asArray**<`T`>(selectors: *`T` \| `T`[]*): `T`[]

*Defined in [array/array.ts:15](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L15)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| selectors | `T` \| `T`[] |

**Returns:** `T`[]

___
<a id="dedup"></a>

###  dedup

▸ **dedup**<`T`>(a: *`T`[]*, p: *`function`*): `T`[]

*Defined in [array/array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L11)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T`[] |
| p | `function` |

**Returns:** `T`[]

___
<a id="enumkeys"></a>

###  enumKeys

▸ **enumKeys**(anEnum: *`any`*): `string`[]

*Defined in [array/array.ts:37](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L37)*

List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'}, if not values could be also returned . For enums without declared values, use enumNoValueKeys

**Parameters:**

| Name | Type |
| ------ | ------ |
| anEnum | `any` |

**Returns:** `string`[]

___
<a id="enumnovaluekeys"></a>

###  enumNoValueKeys

▸ **enumNoValueKeys**(anEnum: *`any`*): `string`[]

*Defined in [array/array.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L50)*

List given enum keys as array. Differently to [enumKeys](_array_array_.md#enumkeys), is should be used only on enums that doesn't have assigned values or other wise on those which values are identical to the keys or not strings. If not, they will be returned also!

**Parameters:**

| Name | Type |
| ------ | ------ |
| anEnum | `any` |

**Returns:** `string`[]

___
<a id="notsame"></a>

###  notSame

▸ **notSame**<`T`>(t: *`T`*, i: *`number`*, a: *`T`[]*): `boolean`

*Defined in [array/array.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L65)*

use it to remove duplicates in .filter expressions like `array.filter(notSame)`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `T` |
| i | `number` |
| a | `T`[] |

**Returns:** `boolean`

___
<a id="notsamenotfalsy"></a>

###  notSameNotFalsy

▸ **notSameNotFalsy**<`T`>(t: *`T`*, i: *`number`*, a: *`T`[]*): `boolean`

*Defined in [array/array.ts:69](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L69)*

use it remove duplicates and falsy values in filter() expressions like `array.filter(notSameNotFalsy)`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| t | `T` |
| i | `number` |
| a | `T`[] |

**Returns:** `boolean`

___
<a id="seq"></a>

###  seq

▸ **seq**(start?: *`number`*, step?: *`number`*, max?: *`number`*): `number`[]

*Defined in [array/array.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L26)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` start | `number` | 0 |
| `Default value` step | `number` | 1 |
| `Default value` max | `number` | 0 |

**Returns:** `number`[]

___
<a id="unionequals"></a>

###  unionEquals

▸ **unionEquals**<`T`>(left: *`T`[]*, right: *`T`[]*, equals: *`function`*): `T`[]

*Defined in [array/array.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/6b96879/misc-utils-of-mine-generic/src/array/array.ts#L19)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `T`[] |
| right | `T`[] |
| equals | `function` |

**Returns:** `T`[]

___

