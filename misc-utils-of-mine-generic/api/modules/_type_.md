[misc-utils-of-mine-generic](../README.md) > ["type"](../modules/_type_.md)

# External module: "type"

## Index

### Type aliases

* [PropertyOptional](_type_.md#propertyoptional)
* [RemoveProperties](_type_.md#removeproperties)

### Variables

* [isArray](_type_.md#isarray)
* [toStr](_type_.md#tostr)

### Functions

* [getType](_type_.md#gettype)
* [isBoolean](_type_.md#isboolean)
* [isObject](_type_.md#isobject)
* [isString](_type_.md#isstring)
* [typeOf](_type_.md#typeof)

---

## Type aliases

<a id="propertyoptional"></a>

###  PropertyOptional

**Ƭ PropertyOptional**: *[RemoveProperties](_type_.md#removeproperties)<`O`, `K`> & `object`*

*Defined in [type.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L41)*

___
<a id="removeproperties"></a>

###  RemoveProperties

**Ƭ RemoveProperties**: *`Pick`<`O`, `Exclude`<`keyof O`, `K`>>*

*Defined in [type.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L39)*

___

## Variables

<a id="isarray"></a>

###  isArray

**● isArray**: *`isArray`* = 
  Array.isArray ||
  function(obj: any) {
    return toStr.call(obj) === '[object Array]'
  }

*Defined in [type.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L11)*

___
<a id="tostr"></a>

###  toStr

**● toStr**: *`toString`* =  Object.prototype.toString

*Defined in [type.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L1)*

___

## Functions

<a id="gettype"></a>

###  getType

▸ **getType**(type: *`any`*): `string`

*Defined in [type.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `any` |

**Returns:** `string`

___
<a id="isboolean"></a>

###  isBoolean

▸ **isBoolean**(obj: *`any`*): `boolean`

*Defined in [type.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `any` |

**Returns:** `boolean`

___
<a id="isobject"></a>

###  isObject

▸ **isObject**(obj: *`any`*): `boolean`

*Defined in [type.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `any` |

**Returns:** `boolean`

___
<a id="isstring"></a>

###  isString

▸ **isString**(a: *`any`*): `boolean`

*Defined in [type.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L17)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `any` |

**Returns:** `boolean`

___
<a id="typeof"></a>

###  typeOf

▸ **typeOf**(input: *`any`*): `string`

*Defined in [type.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/type.ts#L32)*

Get type of variable

*__see__*: [http://jsperf.com/typeofvar](http://jsperf.com/typeofvar)

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `string`
string

___

