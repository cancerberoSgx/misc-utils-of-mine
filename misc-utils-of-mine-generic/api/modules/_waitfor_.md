[misc-utils-of-mine-generic](../README.md) > ["waitFor"](../modules/_waitfor_.md)

# External module: "waitFor"

## Index

### Interfaces

* [WaitForPredicateOptions](../interfaces/_waitfor_.waitforpredicateoptions.md)

### Functions

* [waitForPredicate](_waitfor_.md#waitforpredicate)

### Object literals

* [defaultOptions](_waitfor_.md#defaultoptions)

---

## Functions

<a id="waitforpredicate"></a>

###  waitForPredicate

▸ **waitForPredicate**<`T`>(p: *`function`*, options?: *[WaitForPredicateOptions](../interfaces/_waitfor_.waitforpredicateoptions.md) \| `string`*): `Promise`<`T`>

*Defined in waitFor.ts:12*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| p | `function` | - |
| `Default value` options | [WaitForPredicateOptions](../interfaces/_waitfor_.waitforpredicateoptions.md) \| `string` |  { interval: 200, timeout: 3000 } |

**Returns:** `Promise`<`T`>

___

## Object literals

<a id="defaultoptions"></a>

### `<Const>` defaultOptions

**defaultOptions**: *`object`*

*Defined in waitFor.ts:11*

<a id="defaultoptions.interval"></a>

####  interval

**● interval**: *`number`* = 200

*Defined in waitFor.ts:11*

___
<a id="defaultoptions.timeout"></a>

####  timeout

**● timeout**: *`number`* = 3000

*Defined in waitFor.ts:11*

___

___

