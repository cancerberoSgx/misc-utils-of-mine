[misc-utils-of-mine-typescript](../README.md) > ["json"](../modules/_json_.md)

# External module: "json"

## Index

### Interfaces

* [JSONArray](../interfaces/_json_.jsonarray.md)

### Type aliases

* [JSONObject](_json_.md#jsonobject)
* [JSONPrimitive](_json_.md#jsonprimitive)
* [JSONValue](_json_.md#jsonvalue)

---

## Type aliases

<a id="jsonobject"></a>

###  JSONObject

**Ƭ JSONObject**: *`object`*

*Defined in [json.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/0f645ca/misc-utils-of-mine-typescript/src/json.ts#L4)*

#### Type declaration

[member: `string`]: [JSONValue](_json_.md#jsonvalue)

___
<a id="jsonprimitive"></a>

###  JSONPrimitive

**Ƭ JSONPrimitive**: *`string` \| `number` \| `boolean` \| `null`*

*Defined in [json.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/0f645ca/misc-utils-of-mine-typescript/src/json.ts#L1)*

___
<a id="jsonvalue"></a>

###  JSONValue

**Ƭ JSONValue**: *[JSONPrimitive](_json_.md#jsonprimitive) \| [JSONObject](_json_.md#jsonobject) \| [JSONArray](../interfaces/_json_.jsonarray.md)*

*Defined in [json.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/0f645ca/misc-utils-of-mine-typescript/src/json.ts#L3)*

makes sure an object is JSON compatible so we can safely serialize with JSON.stringify

___

