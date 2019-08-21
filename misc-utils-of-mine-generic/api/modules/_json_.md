**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["json"](_json_.md)

# External module: "json"

## Index

### Interfaces

* [JSONArray](../interfaces/_json_.jsonarray.md)

### Type aliases

* [JSONObject](_json_.md#jsonobject)
* [JSONPrimitive](_json_.md#jsonprimitive)
* [JSONValue](_json_.md#jsonvalue)

### Functions

* [cloneJSON](_json_.md#clonejson)
* [isJSONObject](_json_.md#isjsonobject)
* [parseJSON](_json_.md#parsejson)
* [stringifyJSON](_json_.md#stringifyjson)
* [visitJson](_json_.md#visitjson)

## Type aliases

###  JSONObject

Ƭ **JSONObject**: *object*

*Defined in [json.ts:42](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L42)*

#### Type declaration:

* \[ **member**: *string*\]: [JSONValue](_json_.md#jsonvalue)

___

###  JSONPrimitive

Ƭ **JSONPrimitive**: *string | number | boolean | null*

*Defined in [json.ts:37](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L37)*

___

###  JSONValue

Ƭ **JSONValue**: *[JSONPrimitive](_json_.md#jsonprimitive) | [JSONObject](_json_.md#jsonobject) | [JSONArray](../interfaces/_json_.jsonarray.md)*

*Defined in [json.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L40)*

makes sure an object is JSON compatible so we can safely serialize with JSON.stringify

## Functions

###  cloneJSON

▸ **cloneJSON**<**T**>(`a`: T): *T*

*Defined in [json.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

**Returns:** *T*

___

###  isJSONObject

▸ **isJSONObject**(`o`: any): *boolean*

*Defined in [json.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | any |

**Returns:** *boolean*

___

###  parseJSON

▸ **parseJSON**<**K**>(`s`: string, `defaultValue`: K | undefined): *K | undefined*

*Defined in [json.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L5)*

try to parse given json string. return undefined in case there is an error.

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`defaultValue` | K \| undefined |  undefined |

**Returns:** *K | undefined*

___

###  stringifyJSON

▸ **stringifyJSON**<**K**>(`s`: K, `defaultValue`: string | undefined): *string | undefined*

*Defined in [json.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L13)*

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | K | - |
`defaultValue` | string \| undefined |  undefined |

**Returns:** *string | undefined*

___

###  visitJson

▸ **visitJson**(`o`: [JSONValue](_json_.md#jsonvalue), `v`: function, `_name?`: string | number): *boolean*

*Defined in [json.ts:25](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/04abc74/misc-utils-of-mine-generic/src/json.ts#L25)*

**Parameters:**

▪ **o**: *[JSONValue](_json_.md#jsonvalue)*

▪ **v**: *function*

▸ (`o`: [JSONValue](_json_.md#jsonvalue), `nameOrIndex?`: string | number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [JSONValue](_json_.md#jsonvalue) |
`nameOrIndex?` | string \| number |

▪`Optional`  **_name**: *string | number*

**Returns:** *boolean*