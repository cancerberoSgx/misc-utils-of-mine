[misc-utils-of-mine-generic](../README.md) > ["type"](../modules/_type_.md)

# External module: "type"

## Index

### Variables

* [isArray](_type_.md#isarray)
* [toStr](_type_.md#tostr)

### Functions

* [getTypeScript](_type_.md#gettypescript)
* [isBoolean](_type_.md#isboolean)
* [isObject](_type_.md#isobject)
* [typeOf](_type_.md#typeof)

---

## Variables

<a id="isarray"></a>

###  isArray

**● isArray**: *`isArray`* = 
  Array.isArray ||
  function(obj: any) {
    return toStr.call(obj) === '[object Array]'
  }

*Defined in [type.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L10)*

___
<a id="tostr"></a>

###  toStr

**● toStr**: *`toString`* =  Object.prototype.toString

*Defined in [type.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L1)*

___

## Functions

<a id="gettypescript"></a>

###  getTypeScript

▸ **getTypeScript**(type: *`any`*): `string`

*Defined in [type.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L3)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `any` |

**Returns:** `string`

___
<a id="isboolean"></a>

###  isBoolean

▸ **isBoolean**(obj: *`any`*): `boolean`

*Defined in [type.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `any` |

**Returns:** `boolean`

___
<a id="isobject"></a>

###  isObject

▸ **isObject**(obj: *`any`*): `boolean`

*Defined in [type.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `any` |

**Returns:** `boolean`

___
<a id="typeof"></a>

###  typeOf

▸ **typeOf**(input: *`any`*): `string`

*Defined in [type.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a3179d1/misc-utils-of-mine-generic/src/type.ts#L27)*

Get type of variable

*__see__*: [http://jsperf.com/typeofvar](http://jsperf.com/typeofvar)

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `string`
string

___

