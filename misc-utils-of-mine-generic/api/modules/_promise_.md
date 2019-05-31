[misc-utils-of-mine-generic](../README.md) > ["promise"](../modules/_promise_.md)

# External module: "promise"

## Index

### Classes

* [Deferred](../classes/_promise_.deferred.md)

### Functions

* [serial](_promise_.md#serial)

---

## Functions

<a id="serial"></a>

###  serial

▸ **serial**<`T`>(p: *`function`[]*): `Promise`<`T`[]>

*Defined in [promise.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1466ef5/misc-utils-of-mine-generic/src/promise.ts#L4)*

Execute given functions returning promises serially. Returns a promise that resolves when all finish with they results as array.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| p | `function`[] |

**Returns:** `Promise`<`T`[]>

___

