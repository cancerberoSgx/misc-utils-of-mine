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

*Defined in [waitFor.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/waitFor.ts#L23)*

Returns a promise that is resolved when given predicate function returns truthy or timeout (see options). The function is called in given option's [interval](../interfaces/_waitfor_.waitforpredicateoptions.md#interval) times.

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

*Defined in [waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/waitFor.ts#L17)*

<a id="defaultoptions.interval"></a>

####  interval

**● interval**: *`number`* = 200

*Defined in [waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/waitFor.ts#L17)*

___
<a id="defaultoptions.timeout"></a>

####  timeout

**● timeout**: *`number`* = 3000

*Defined in [waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/85b0b78/misc-utils-of-mine-generic/src/waitFor.ts#L17)*

___

___

