[misc-utils-of-mine-typescript](../README.md) > ["array"](../modules/_array_.md)

# External module: "array"

## Index

### Type aliases

* [ArrayIndexUnion](_array_.md#arrayindexunion)
* [ArrayItem](_array_.md#arrayitem)
* [ArrayItemKeyUnion](_array_.md#arrayitemkeyunion)
* [ArrayLength](_array_.md#arraylength)
* [ArrayLiteral](_array_.md#arrayliteral)
* [ArrayStringKeyIntersection](_array_.md#arraystringkeyintersection)
* [ArrayTail](_array_.md#arraytail)
* [ArrayUnshift](_array_.md#arrayunshift)
* [ArrayValueOfStringKey](_array_.md#arrayvalueofstringkey)
* [Tuple](_array_.md#tuple)
* [UnionOf](_array_.md#unionof)

---

## Type aliases

<a id="arrayindexunion"></a>

###  ArrayIndexUnion

**Ƭ ArrayIndexUnion**: *`ArrayIndexUnion<T, K>`*

*Defined in [array.ts:91](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L91)*

Returns the union of all indexes in array. For example, `ArrayIndexUnion<[{a: 1; b: 6; c: 4}, {b: 's'}, {c: true; b: 0}]>` will be `'0'\|'1'\|'2'`

___
<a id="arrayitem"></a>

###  ArrayItem

**Ƭ ArrayItem**: *`T[I]`*

*Defined in [array.ts:106](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L106)*

Returns the I-th item type. Example: `ArrayItem<[{a: 1 }, {b: 's' }, {c: true }, 2]>` will be `{c: true}`

___
<a id="arrayitemkeyunion"></a>

###  ArrayItemKeyUnion

**Ƭ ArrayItemKeyUnion**: *`keyof T[ArrayIndexUnion<T, Exclude<keyof T, number | "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | "indexOf" | ... 14 more ... | "values">>]`*

*Defined in [array.ts:100](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L100)*

Returns the union of common keys in array objects . `ArrayItemKeyUnion<[{a: 1; b: 6; c: 4}, {b: 's'; a: null; c: 1.2}, {c: true; b: 0}]>` will be `'b'\|'c'`

___
<a id="arraylength"></a>

###  ArrayLength

**Ƭ ArrayLength**: *`T["length"]`*

*Defined in [array.ts:11](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L11)*

Returns the length of an array or tuple

___
<a id="arrayliteral"></a>

###  ArrayLiteral

**Ƭ ArrayLiteral**: *`ArrayLiteral<T, L>`*

*Defined in [array.ts:31](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L31)*

Returns an fixed length array with item type TItem. L must be lower than 10. More strict than Tuple but this one is hard coded to limit of numbers. This will validate accessing out of range wile tuple wont. `interface I=... ArrayOfLength<I,2>` === \[I,I\]

___
<a id="arraystringkeyintersection"></a>

###  ArrayStringKeyIntersection

**Ƭ ArrayStringKeyIntersection**: *[ObjectStringKeyUnion](_object_.md#objectstringkeyunion)<[UnionOf](_array_.md#unionof)<`a`>>*

*Defined in [array.ts:85](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L85)*

Returns the union of common keys in array objects. For example: `ArrayStringKeyIntersection<[{a: 1; b: 6; c: 4}, {b: 's', c: 9}, {c: true; b: 0}]>` will be `'b'\|'c'`

___
<a id="arraytail"></a>

###  ArrayTail

**Ƭ ArrayTail**: *`ArrayTail<T>`*

*Defined in [array.ts:62](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L62)*

Returns all but the first item's type in a tuple/array

___
<a id="arrayunshift"></a>

###  ArrayUnshift

**Ƭ ArrayUnshift**: *`ArrayUnshift<List, Item>`*

*Defined in [array.ts:69](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L69)*

Returns the given tuple/array with the item type prepended to it

___
<a id="arrayvalueofstringkey"></a>

###  ArrayValueOfStringKey

**Ƭ ArrayValueOfStringKey**: *[ObjectStringKeyValue](_object_.md#objectstringkeyvalue)<[UnionOf](_array_.md#unionof)<`a`>, `k`>*

*Defined in [array.ts:79](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L79)*

Return the union of values of given key in all objects in array. For example: `NameOfStringKeyInArray<[{f: 1}, {f: 2}], 'f'>` will be `1\|2`

___
<a id="tuple"></a>

###  Tuple

**Ƭ Tuple**: *[`TItem`, `Array`] & `object`*

*Defined in [array.ts:20](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L20)*

Returns an fixed length array with item type TItem. Tuple will validate that a value assigned dont have more than L keys but when accessing it doesn't validate. ie: `let a1:Tuple<number, 2> = [1,2,3]` causes error but this is not: `declare let a1:Tuple<{ a: number }, 2> let b = a1[5]`.

If you want to validate this, go to ArrayLiteral, but will only work for limited L value

___
<a id="unionof"></a>

###  UnionOf

**Ƭ UnionOf**: *`T[number]`*

*Defined in [array.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1ccd4e0/misc-utils-of-mine-typescript/src/array.ts#L6)*

Creates a union from the types of an Array or tuple. For example, `UnionOf<[number, string]>` will be `number\|string`

___

