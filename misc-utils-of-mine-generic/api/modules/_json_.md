[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["json"](_json_.md)

# Module: "json"

## Index

### Interfaces

* [JSONArray](../interfaces/_json_.jsonarray.md)

### Type aliases

* [JSONObject](_json_.md#jsonobject)
* [JSONPrimitive](_json_.md#jsonprimitive)
* [JSONValue](_json_.md#jsonvalue)

### Functions

* [cloneJSON](_json_.md#clonejson)
* [findJson](_json_.md#findjson)
* [isJSONObject](_json_.md#isjsonobject)
* [parseJSON](_json_.md#parsejson)
* [stringifyJSON](_json_.md#stringifyjson)
* [visitJson](_json_.md#visitjson)

## Type aliases

###  JSONObject

Ƭ **JSONObject**: *object*

*Defined in [src/json.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L54)*

#### Type declaration:

* \[ **member**: *string*\]: [JSONValue](_json_.md#jsonvalue)

___

###  JSONPrimitive

Ƭ **JSONPrimitive**: *string | number | boolean | null*

*Defined in [src/json.ts:49](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L49)*

___

###  JSONValue

Ƭ **JSONValue**: *[JSONPrimitive](_json_.md#jsonprimitive) | [JSONObject](_json_.md#jsonobject) | [JSONArray](../interfaces/_json_.jsonarray.md)*

*Defined in [src/json.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L52)*

makes sure an object is JSON compatible so we can safely serialize with JSON.stringify

## Functions

###  cloneJSON

▸ **cloneJSON**‹**T**›(`a`: T): *T*

*Defined in [src/json.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L21)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |

**Returns:** *T*

___

###  findJson

▸ **findJson**(`o`: [JSONValue](_json_.md#jsonvalue), `p`: function, `_name?`: string | number): *object | undefined*

*Defined in [src/json.ts:37](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L37)*

**Parameters:**

▪ **o**: *[JSONValue](_json_.md#jsonvalue)*

▪ **p**: *function*

▸ (`o`: [JSONValue](_json_.md#jsonvalue), `nameOrIndex?`: string | number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [JSONValue](_json_.md#jsonvalue) |
`nameOrIndex?` | string &#124; number |

▪`Optional`  **_name**: *string | number*

**Returns:** *object | undefined*

___

###  isJSONObject

▸ **isJSONObject**(`o`: any): *o is JSONObject*

*Defined in [src/json.ts:62](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | any |

**Returns:** *o is JSONObject*

___

###  parseJSON

▸ **parseJSON**‹**K**›(`s`: string, `defaultValue`: K | undefined): *K | undefined*

*Defined in [src/json.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L5)*

try to parse given json string. return undefined in case there is an error.

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | - |
`defaultValue` | K &#124; undefined | undefined |

**Returns:** *K | undefined*

___

###  stringifyJSON

▸ **stringifyJSON**‹**K**›(`s`: K, `defaultValue`: string | undefined): *string | undefined*

*Defined in [src/json.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L13)*

**Type parameters:**

▪ **K**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | K | - |
`defaultValue` | string &#124; undefined | undefined |

**Returns:** *string | undefined*

___

###  visitJson

▸ **visitJson**(`o`: [JSONValue](_json_.md#jsonvalue), `v`: function, `_name?`: string | number): *boolean*

*Defined in [src/json.ts:25](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/json.ts#L25)*

**Parameters:**

▪ **o**: *[JSONValue](_json_.md#jsonvalue)*

▪ **v**: *function*

▸ (`o`: [JSONValue](_json_.md#jsonvalue), `nameOrIndex?`: string | number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`o` | [JSONValue](_json_.md#jsonvalue) |
`nameOrIndex?` | string &#124; number |

▪`Optional`  **_name**: *string | number*

**Returns:** *boolean*
