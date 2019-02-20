[misc-utils-of-mine-typescript](../README.md) > ["object"](../modules/_object_.md)

# External module: "object"

## Index

### Type aliases

* [EmptyObject](_object_.md#emptyobject)
* [IntersectionOfFunctionsToTuple](_object_.md#intersectionoffunctionstotuple)
* [KeysToTuple](_object_.md#keystotuple)
* [ObjectKeyLength](_object_.md#objectkeylength)
* [ObjectKeyValue](_object_.md#objectkeyvalue)
* [ObjectNumberKeyUnion](_object_.md#objectnumberkeyunion)
* [ObjectNumberKeyValue](_object_.md#objectnumberkeyvalue)
* [ObjectStringKeyUnion](_object_.md#objectstringkeyunion)
* [ObjectStringKeyValue](_object_.md#objectstringkeyvalue)
* [ObjectStringKeyValueUnion](_object_.md#objectstringkeyvalueunion)
* [ObjectStringValueIntersection](_object_.md#objectstringvalueintersection)

---

## Type aliases

<a id="emptyobject"></a>

###  EmptyObject

**Ƭ EmptyObject**: *`object`*

*Defined in [object.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L3)*

#### Type declaration

___
<a id="intersectionoffunctionstotuple"></a>

###  IntersectionOfFunctionsToTuple

**Ƭ IntersectionOfFunctionsToTuple**: *`IntersectionOfFunctionsToTuple<F>`*

*Defined in [object.ts:65](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L65)*

___
<a id="keystotuple"></a>

###  KeysToTuple

**Ƭ KeysToTuple**: *[IntersectionOfFunctionsToTuple](_object_.md#intersectionoffunctionstotuple)<[ObjectStringValueIntersection](_object_.md#objectstringvalueintersection)<`object`>>*

*Defined in [object.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L54)*

KeysToTuple<{a:1,b:5,9:2}> === \['a','b',9\]

___
<a id="objectkeylength"></a>

###  ObjectKeyLength

**Ƭ ObjectKeyLength**: *`IntersectionOfFunctionsToTuple<ObjectStringValueIntersection<{ [K in keyof T]: (v: K) => void; }>>["length"]`*

*Defined in [object.ts:50](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L50)*

counts given object keys : CountKeys<{a:5,g:0,b:'s'}> === 3

___
<a id="objectkeyvalue"></a>

###  ObjectKeyValue

**Ƭ ObjectKeyValue**: *`T[K]`*

*Defined in [object.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L6)*

ObjectKeyValue<{a:1,b:'s',2:9},2>===9 ObjectKeyValue<{a:1,b:'s',2:'b'},'s'>.

___
<a id="objectnumberkeyunion"></a>

###  ObjectNumberKeyUnion

**Ƭ ObjectNumberKeyUnion**: *`Extract`<`keyof T`, `number`>*

*Defined in [object.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L21)*

ObjectNumberKeyUnion<{1:'g',7:false}> === 1\|7

___
<a id="objectnumberkeyvalue"></a>

###  ObjectNumberKeyValue

**Ƭ ObjectNumberKeyValue**: *`T[K]`*

*Defined in [object.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L13)*

ValueOfNumberKey<{a:1,b:'s',2:9},2>===9

___
<a id="objectstringkeyunion"></a>

###  ObjectStringKeyUnion

**Ƭ ObjectStringKeyUnion**: *`Extract`<`keyof T`, `string`>*

*Defined in [object.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L17)*

c:ObjectStringKeyUnion<{a:1,b:'s'}> === 'a'\|'b'

___
<a id="objectstringkeyvalue"></a>

###  ObjectStringKeyValue

**Ƭ ObjectStringKeyValue**: *`T[K]`*

*Defined in [object.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L9)*

ObjectStringKey<{a:1,b:'s',2:9},'b'> === 9 ObjectStringKey<{a:1,b:'s',2:9},2> fails

___
<a id="objectstringkeyvalueunion"></a>

###  ObjectStringKeyValueUnion

**Ƭ ObjectStringKeyValueUnion**: *[ObjectStringKeyValue](_object_.md#objectstringkeyvalue)<`K`, [ObjectStringKeyUnion](_object_.md#objectstringkeyunion)<`K`>>*

*Defined in [object.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L28)*

ObjectStringKeyValueUnion<{a:1,b:'s'}>===1\|'s'

___
<a id="objectstringvalueintersection"></a>

###  ObjectStringValueIntersection

**Ƭ ObjectStringValueIntersection**: *`ObjectStringValueIntersection<T>`*

*Defined in [object.ts:41](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/bc56d86/misc-utils-of-mine-typescript/src/object.ts#L41)*

takes an object, and returns its values in an intersection. ObjectStringValueIntersection<{a:2,b:'0'}> === 'a'&2

___

