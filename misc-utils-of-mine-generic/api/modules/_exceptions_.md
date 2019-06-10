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

*Defined in [exceptions.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dca33e4/misc-utils-of-mine-generic/src/exceptions.ts#L3)*

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

▸ **tryTo**<`R`,`D`>(f: *`function`*, def?: *[D]()*): `R` \| `D` \| `undefined`

*Defined in [exceptions.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/dca33e4/misc-utils-of-mine-generic/src/exceptions.ts#L10)*

**Type parameters:**

#### R 
#### D 
**Parameters:**

| Name | Type |
| ------ | ------ |
| f | `function` |
| `Optional` def | [D]() |

**Returns:** `R` \| `D` \| `undefined`

___

