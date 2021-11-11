[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["type"](_type_.md)

# Module: "type"

## Index

### Type aliases

* [EmptyObject](_type_.md#emptyobject)
* [Falsy](_type_.md#falsy)
* [Fn](_type_.md#fn)
* [Map](_type_.md#map)
* [NotFalsy](_type_.md#notfalsy)
* [NotUndefined](_type_.md#notundefined)
* [ObjectStringKeyUnion](_type_.md#objectstringkeyunion)
* [PropertyOptional](_type_.md#propertyoptional)
* [RemoveProperties](_type_.md#removeproperties)
* [TODO](_type_.md#todo)
* [UnionToIntersection](_type_.md#uniontointersection)
* [falsy](_type_.md#falsy)

### Variables

* [isArray](_type_.md#const-isarray)
* [toStr](_type_.md#tostr)

### Functions

* [getType](_type_.md#gettype)
* [isBoolean](_type_.md#isboolean)
* [isObject](_type_.md#isobject)
* [isString](_type_.md#isstring)
* [typeOf](_type_.md#typeof)

## Type aliases

###  EmptyObject

Ƭ **EmptyObject**: *object*

Defined in src/type.ts:47

#### Type declaration:

___

###  Falsy

Ƭ **Falsy**:

Defined in src/type.ts:56

Without arguments it returns the union of all falsy values. With arguments it returns given type excluding falsy arguments.  Example `Falsy<number|boolean|null> ` will be `false|null`

___

###  Fn

Ƭ **Fn**: *function*

Defined in src/type.ts:66

#### Type declaration:

▸ (...`args`: args): *returnValue*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | args |

___

###  Map

Ƭ **Map**: *object*

Defined in src/type.ts:49

#### Type declaration:

___

###  NotFalsy

Ƭ **NotFalsy**: *Exclude‹T, [falsy](_type_.md#falsy)›*

Defined in src/type.ts:60

Removes undefined from type.  Example `Falsy<number|boolean>` will be `number|true`

___

###  NotUndefined

Ƭ **NotUndefined**: *Exclude‹T, undefined›*

Defined in src/type.ts:44

Removes undefined from type

___

###  ObjectStringKeyUnion

Ƭ **ObjectStringKeyUnion**: *Extract‹keyof T, string›*

Defined in src/type.ts:64

c:ObjectStringKeyUnion<{a:1,b:'s'}> === 'a'|'b'

___

###  PropertyOptional

Ƭ **PropertyOptional**: *[RemoveProperties](_type_.md#removeproperties)‹O, K› & object*

Defined in src/type.ts:38

___

###  RemoveProperties

Ƭ **RemoveProperties**: *Pick‹O, Exclude‹keyof O, K››*

Defined in src/type.ts:36

___

###  TODO

Ƭ **TODO**: *any*

Defined in src/type.ts:41

Useful TODO reminder when you are porting typings of a JavaScript library

___

###  UnionToIntersection

Ƭ **UnionToIntersection**: *U extends any ? function : never extends function ? I : never*

Defined in src/type.ts:69

UnionToIntersection<1|2|3>  will be 1 & 2 & 3

___

###  falsy

Ƭ **falsy**: *undefined | null | false | "" | 0*

Defined in src/type.ts:51

## Variables

### `Const` isArray

• **isArray**: *isArray* = Array.isArray ||
  function(obj: any) {
    return toStr.call(obj) === '[object Array]'
  }

Defined in src/type.ts:11

___

###  toStr

• **toStr**: *toString* = Object.prototype.toString

Defined in src/type.ts:1

## Functions

###  getType

▸ **getType**(`type`: any): *string*

Defined in src/type.ts:3

**Parameters:**

Name | Type |
------ | ------ |
`type` | any |

**Returns:** *string*

___

###  isBoolean

▸ **isBoolean**(`obj`: any): *boolean*

Defined in src/type.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`obj`: any): *boolean*

Defined in src/type.ts:7

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *boolean*

___

###  isString

▸ **isString**(`a`: any): *a is string*

Defined in src/type.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`a` | any |

**Returns:** *a is string*

___

###  typeOf

▸ **typeOf**(`input`: any): *string*

Defined in src/type.ts:29

Get type of variable

**`see`** http://jsperf.com/typeofvar

**Parameters:**

Name | Type |
------ | ------ |
`input` | any |

**Returns:** *string*
