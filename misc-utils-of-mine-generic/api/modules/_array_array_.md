[misc-utils-of-mine-generic](../README.md) > ["array/array"](../modules/_array_array_.md)

# External module: "array/array"

## Index

### Functions

* [array](_array_array_.md#array)
* [asArray](_array_array_.md#asarray)
* [dedup](_array_array_.md#dedup)
* [enumKeys](_array_array_.md#enumkeys)
* [enumNoValueKeys](_array_array_.md#enumnovaluekeys)
* [enumValueFromString](_array_array_.md#enumvaluefromstring)
* [seq](_array_array_.md#seq)
* [unionEquals](_array_array_.md#unionequals)

---

## Functions

<a id="array"></a>

###  array

▸ **array**<`T`>(n: *`number`*, sample?: *[T]()*): `T`[]

*Defined in [array/array.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L1)*

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

*Defined in [array/array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L11)*

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

*Defined in [array/array.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L8)*

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

*Defined in [array/array.ts:31](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L31)*

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

*Defined in [array/array.ts:43](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L43)*

List given enum keys as array. Differently to [enumKeys](_array_array_.md#enumkeys), is should be used only on enums that doesn't have assigned values or other wise on those which values are identical to the keys or not strings. If not, they will be returned also!

**Parameters:**

| Name | Type |
| ------ | ------ |
| anEnum | `any` |

**Returns:** `string`[]

___
<a id="enumvaluefromstring"></a>

###  enumValueFromString

▸ **enumValueFromString**<`T`>(key: *`string`*, anEnum: *`any`*): `T` \| `undefined`

*Defined in [array/array.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L52)*

return the Enum type from given string enum key obtained with key [enumNoValueKeys](_array_array_.md#enumnovaluekeys)

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| anEnum | `any` |

**Returns:** `T` \| `undefined`

___
<a id="seq"></a>

###  seq

▸ **seq**(start?: *`number`*, step?: *`number`*, max?: *`number`*): `number`[]

*Defined in [array/array.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L21)*

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

*Defined in [array/array.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/array/array.ts#L14)*

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

