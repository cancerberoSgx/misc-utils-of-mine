**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["type"](_type_.md)

# External module: "type"

## Index

### Type aliases

* [EmptyObject](_type_.md#emptyobject)
* [Falsy](_type_.md#falsy)
* [NotFalsy](_type_.md#notfalsy)
* [NotUndefined](_type_.md#notundefined)
* [ObjectStringKeyUnion](_type_.md#objectstringkeyunion)
* [PropertyOptional](_type_.md#propertyoptional)
* [RemoveProperties](_type_.md#removeproperties)
* [TODO](_type_.md#todo)
* [falsy](_type_.md#falsy)

### Variables

* [isArray](_type_.md#isarray)
* [toStr](_type_.md#tostr)

### Functions

* [getType](_type_.md#gettype)
* [isBoolean](_type_.md#isboolean)
* [isObject](_type_.md#isobject)
* [isString](_type_.md#isstring)
* [notFalsy](_type_.md#notfalsy)
* [notUndefined](_type_.md#notundefined)
* [typeOf](_type_.md#typeof)

## Type aliases

###  EmptyObject

Ƭ **EmptyObject**: *object*

*Defined in [type.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L54)*

#### Type declaration:

___

###  Falsy

Ƭ **Falsy**: *Falsy<T>*

*Defined in [type.ts:61](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L61)*

Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments.  Example `Falsy<number|boolean|null> ` will be `false|null`

___

###  NotFalsy

Ƭ **NotFalsy**: *Exclude‹T, [falsy](_type_.md#falsy)›*

*Defined in [type.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L65)*

Removes undefined from type.  Example `Falsy<number|boolean>` will be `number|true`

___

###  NotUndefined

Ƭ **NotUndefined**: *Exclude‹T, undefined›*

*Defined in [type.ts:47](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L47)*

Removes undefined from type

___

###  ObjectStringKeyUnion

Ƭ **ObjectStringKeyUnion**: *Extract‹keyof T, string›*

*Defined in [type.ts:74](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L74)*

c:ObjectStringKeyUnion<{a:1,b:'s'}> === 'a'|'b'

___

###  PropertyOptional

Ƭ **PropertyOptional**: *[RemoveProperties](_type_.md#removeproperties)‹O, K› & object*

*Defined in [type.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L41)*

___

###  RemoveProperties

Ƭ **RemoveProperties**: *Pick‹O, Exclude‹keyof O, K››*

*Defined in [type.ts:39](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L39)*

___

###  TODO

Ƭ **TODO**: *any*

*Defined in [type.ts:44](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L44)*

Useful TODO reminder when you are porting typings of a JavaScript library

___

###  falsy

Ƭ **falsy**: *undefined | null | false | "" | 0*

*Defined in [type.ts:56](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L56)*

## Variables

###  isArray

• **isArray**: *isArray* = 
  Array.isArray ||
  function(obj: any) {
    return toStr.call(obj) === '[object Array]'
  }

*Defined in [type.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L11)*

___

###  toStr

• **toStr**: *toString* =  Object.prototype.toString

*Defined in [type.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L1)*

## Functions

###  getType

▸ **getType**(`type`: any): *string*

*Defined in [type.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | any |

**Returns:** *string*

___

###  isBoolean

▸ **isBoolean**(`obj`: any): *boolean*

*Defined in [type.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`obj`: any): *boolean*

*Defined in [type.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *boolean*

___

###  isString

▸ **isString**(`a`: any): *boolean*

*Defined in [type.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *boolean*

___

###  notFalsy

▸ **notFalsy**<**T**>(`n`: T): *boolean*

*Defined in [type.ts:69](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L69)*

Useful for filtering out falsy values without casting.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *boolean*

___

###  notUndefined

▸ **notUndefined**<**T**>(`n`: T): *boolean*

*Defined in [type.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L50)*

Useful for filtering out undefined values without casting.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`n` | T |

**Returns:** *boolean*

___

###  typeOf

▸ **typeOf**(`input`: any): *string*

*Defined in [type.ts:32](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cde2372/misc-utils-of-mine-generic/src/type.ts#L32)*

Get type of variable

**`see`** http://jsperf.com/typeofvar

**Parameters:**

Name | Type |
------ | ------ |
`input` | any |

**Returns:** *string*

string