[misc-utils-of-mine-generic](../README.md) > ["array/array"](../modules/_array_array_.md)

# External module: "array/array"

## Index

### Functions

* [array](_array_array_.md#array)
* [asArray](_array_array_.md#asarray)
* [dedup](_array_array_.md#dedup)
* [seq](_array_array_.md#seq)
* [unionEquals](_array_array_.md#unionequals)

---

## Functions

<a id="array"></a>

###  array

▸ **array**<`T`>(n: *`number`*, sample?: *[T]()*): `T`[]

*Defined in [array/array.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/217bd9b/misc-utils-of-mine-generic/src/array/array.ts#L1)*

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

*Defined in [array/array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/217bd9b/misc-utils-of-mine-generic/src/array/array.ts#L11)*

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

*Defined in [array/array.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/217bd9b/misc-utils-of-mine-generic/src/array/array.ts#L8)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `T`[] |
| p | `function` |

**Returns:** `T`[]

___
<a id="seq"></a>

###  seq

▸ **seq**(start?: *`number`*, step?: *`number`*, max?: *`number`*): `number`[]

*Defined in [array/array.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/217bd9b/misc-utils-of-mine-generic/src/array/array.ts#L21)*

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

*Defined in [array/array.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/217bd9b/misc-utils-of-mine-generic/src/array/array.ts#L14)*

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

