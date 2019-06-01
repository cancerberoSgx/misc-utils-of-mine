[misc-utils-of-mine-generic](../README.md) > ["exceptions"](../modules/_exceptions_.md)

# External module: "exceptions"

## Index

### Functions

* [checkThrow](_exceptions_.md#checkthrow)
* [tryTo](_exceptions_.md#tryto)

---

## Functions

<a id="checkthrow"></a>

###  checkThrow

▸ **checkThrow**<`T`>(r?: *[T]()*, msg?: *`string`*): `T`

*Defined in [exceptions.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/94cb991/misc-utils-of-mine-generic/src/exceptions.ts#L1)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Optional` r | [T]() | - |
| `Default value` msg | `string` | &quot;Throwing on undefined value&quot; |

**Returns:** `T`

___
<a id="tryto"></a>

###  tryTo

▸ **tryTo**<`F`>(f: *`F`*): `ReturnType`<`F`> \| `undefined`

*Defined in [exceptions.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/94cb991/misc-utils-of-mine-generic/src/exceptions.ts#L8)*

**Type parameters:**

#### F :  `function`
**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `F` |

**Returns:** `ReturnType`<`F`> \| `undefined`

___

