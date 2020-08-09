[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["json"](../modules/_json_.md) › [JSONArray](_json_.jsonarray.md)

# Interface: JSONArray

## Hierarchy

* Array‹[JSONValue](../modules/_json_.md#jsonvalue)›

  ↳ **JSONArray**

## Indexable

* \[ **n**: *number*\]: [JSONValue](../modules/_json_.md#jsonvalue)

## Index

### Properties

* [Array](_json_.jsonarray.md#array)
* [length](_json_.jsonarray.md#length)

### Methods

* [__@iterator](_json_.jsonarray.md#__@iterator)
* [__@unscopables](_json_.jsonarray.md#__@unscopables)
* [concat](_json_.jsonarray.md#concat)
* [copyWithin](_json_.jsonarray.md#copywithin)
* [entries](_json_.jsonarray.md#entries)
* [every](_json_.jsonarray.md#every)
* [fill](_json_.jsonarray.md#fill)
* [filter](_json_.jsonarray.md#filter)
* [find](_json_.jsonarray.md#find)
* [findIndex](_json_.jsonarray.md#findindex)
* [flat](_json_.jsonarray.md#flat)
* [flatMap](_json_.jsonarray.md#flatmap)
* [forEach](_json_.jsonarray.md#foreach)
* [includes](_json_.jsonarray.md#includes)
* [indexOf](_json_.jsonarray.md#indexof)
* [join](_json_.jsonarray.md#join)
* [keys](_json_.jsonarray.md#keys)
* [lastIndexOf](_json_.jsonarray.md#lastindexof)
* [map](_json_.jsonarray.md#map)
* [pop](_json_.jsonarray.md#pop)
* [push](_json_.jsonarray.md#push)
* [reduce](_json_.jsonarray.md#reduce)
* [reduceRight](_json_.jsonarray.md#reduceright)
* [reverse](_json_.jsonarray.md#reverse)
* [shift](_json_.jsonarray.md#shift)
* [slice](_json_.jsonarray.md#slice)
* [some](_json_.jsonarray.md#some)
* [sort](_json_.jsonarray.md#sort)
* [splice](_json_.jsonarray.md#splice)
* [toLocaleString](_json_.jsonarray.md#tolocalestring)
* [toString](_json_.jsonarray.md#tostring)
* [unshift](_json_.jsonarray.md#unshift)
* [values](_json_.jsonarray.md#values)

## Properties

###  Array

• **Array**: *ArrayConstructor*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1368

___

###  length

• **length**: *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1209

Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.

## Methods

###  __@iterator

▸ **__@iterator**(): *IterableIterator‹[JSONValue](../modules/_json_.md#jsonvalue)›*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:52

Iterator

**Returns:** *IterableIterator‹[JSONValue](../modules/_json_.md#jsonvalue)›*

___

###  __@unscopables

▸ **__@unscopables**(): *object*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:94

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

* **copyWithin**: *boolean*

* **entries**: *boolean*

* **fill**: *boolean*

* **find**: *boolean*

* **findIndex**: *boolean*

* **keys**: *boolean*

* **values**: *boolean*

___

###  concat

▸ **concat**(...`items`: ConcatArray‹[JSONValue](../modules/_json_.md#jsonvalue)›[]): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1231

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | ConcatArray‹[JSONValue](../modules/_json_.md#jsonvalue)›[] | Additional items to add to the end of array1.  |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

▸ **concat**(...`items`: T | ConcatArray‹T›[]): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1236

Combines two or more arrays.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | T &#124; ConcatArray‹T›[] | Additional items to add to the end of array1.  |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

___

###  copyWithin

▸ **copyWithin**(`target`: number, `start`: number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:64

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`target` | number | If target is negative, it is treated as length+target where length is the length of the array. |
`start` | number | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
`end?` | undefined &#124; number | If not specified, length of the this object is used as its default value.  |

**Returns:** *this*

___

###  entries

▸ **entries**(): *IterableIterator‹[number, [JSONValue](../modules/_json_.md#jsonvalue)]›*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:57

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator‹[number, [JSONValue](../modules/_json_.md#jsonvalue)]›*

___

###  every

▸ **every**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1296

Determines whether all the members of an array satisfy the specified test.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  fill

▸ **fill**(`value`: [JSONValue](../modules/_json_.md#jsonvalue), `start?`: undefined | number, `end?`: undefined | number): *this*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:53

Returns the this object after filling the section identified by start and end with value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) | value to fill array section with |
`start?` | undefined &#124; number | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
`end?` | undefined &#124; number | index to stop filling the array at. If end is negative, it is treated as length+end.  |

**Returns:** *this*

___

###  filter

▸ **filter**<**S**>(`callbackfn`: function, `thisArg?`: any): *S[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1320

Returns the elements of an array that meet the condition specified in a callback function.

**Type parameters:**

▪ **S**: *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *S[]*

▸ **filter**(`callbackfn`: function, `thisArg?`: any): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1326

Returns the elements of an array that meet the condition specified in a callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

___

###  find

▸ **find**<**S**>(`predicate`: function, `thisArg?`: any): *S | undefined*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:31

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Type parameters:**

▪ **S**: *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

▸ (`this`: void, `value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `obj`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`this` | void |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`obj` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *S | undefined*

▸ **find**(`predicate`: function, `thisArg?`: any): *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:32

**Parameters:**

▪ **predicate**: *function*

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `obj`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`obj` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

___

###  findIndex

▸ **findIndex**(`predicate`: function, `thisArg?`: any): *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:43

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Parameters:**

▪ **predicate**: *function*

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `obj`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`obj` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

**Returns:** *number*

___

###  flat

▸ **flat**<**U**>(`this`: U[][][][][][][][], `depth`: 7): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:158

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][][] | - |
`depth` | 7 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][][], `depth`: 6): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:166

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][][] | - |
`depth` | 6 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][][], `depth`: 5): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:174

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][][] | - |
`depth` | 5 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][][], `depth`: 4): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:182

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][][] | - |
`depth` | 4 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][][], `depth`: 3): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:190

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][][] | - |
`depth` | 3 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][][], `depth`: 2): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:198

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][][] | - |
`depth` | 2 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[][], `depth?`: undefined | 1): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:206

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[][] | - |
`depth?` | undefined &#124; 1 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`this`: U[], `depth`: 0): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:214

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`this` | U[] | - |
`depth` | 0 | The maximum recursion depth  |

**Returns:** *U[]*

▸ **flat**<**U**>(`depth?`: undefined | number): *any[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:222

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth. If no depth is provided, flat method defaults to the depth of 1.

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`depth?` | undefined &#124; number | The maximum recursion depth  |

**Returns:** *any[]*

___

###  flatMap

▸ **flatMap**<**U**, **This**>(`callback`: function, `thisArg?`: This): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2019.array.d.ts:147

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

**Type parameters:**

▪ **U**

▪ **This**

**Parameters:**

▪ **callback**: *function*

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

▸ (`this`: This, `value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *U | ReadonlyArray‹U›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | This |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *This*

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1308

Performs the specified action for each element in an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *void*

___

###  includes

▸ **includes**(`searchElement`: [JSONValue](../modules/_json_.md#jsonvalue), `fromIndex?`: undefined | number): *boolean*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

Determines whether an array includes a certain element, returning true or false as appropriate.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [JSONValue](../modules/_json_.md#jsonvalue) | The element to search for. |
`fromIndex?` | undefined &#124; number | The position in this array at which to begin searching for searchElement.  |

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`searchElement`: [JSONValue](../modules/_json_.md#jsonvalue), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1284

Returns the index of the first occurrence of a value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [JSONValue](../modules/_json_.md#jsonvalue) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.  |

**Returns:** *number*

___

###  join

▸ **join**(`separator?`: undefined | string): *string*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1241

Adds all the elements of an array separated by the specified separator string.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`separator?` | undefined &#124; string | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.  |

**Returns:** *string*

___

###  keys

▸ **keys**(): *IterableIterator‹number›*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:62

Returns an iterable of keys in the array

**Returns:** *IterableIterator‹number›*

___

###  lastIndexOf

▸ **lastIndexOf**(`searchElement`: [JSONValue](../modules/_json_.md#jsonvalue), `fromIndex?`: undefined | number): *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1290

Returns the index of the last occurrence of a specified value in an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchElement` | [JSONValue](../modules/_json_.md#jsonvalue) | The value to locate in the array. |
`fromIndex?` | undefined &#124; number | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.  |

**Returns:** *number*

___

###  map

▸ **map**<**U**>(`callbackfn`: function, `thisArg?`: any): *U[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1314

Calls a defined callback function on each element of an array, and returns an array that contains the results.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *U[]*

___

###  pop

▸ **pop**(): *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1221

Removes the last element from an array and returns it.

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

___

###  push

▸ **push**(...`items`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1226

Appends new elements to an array, and returns the new length of the array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [JSONValue](../modules/_json_.md#jsonvalue)[] | New elements of the Array.  |

**Returns:** *number*

___

###  reduce

▸ **reduce**(`callbackfn`: function): *[JSONValue](../modules/_json_.md#jsonvalue)*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1332

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)*

▸ **reduce**(`callbackfn`: function, `initialValue`: [JSONValue](../modules/_json_.md#jsonvalue)): *[JSONValue](../modules/_json_.md#jsonvalue)*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1333

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪ **initialValue**: *[JSONValue](../modules/_json_.md#jsonvalue)*

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)*

▸ **reduce**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1339

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reduceRight

▸ **reduceRight**(`callbackfn`: function): *[JSONValue](../modules/_json_.md#jsonvalue)*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1345

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)*

▸ **reduceRight**(`callbackfn`: function, `initialValue`: [JSONValue](../modules/_json_.md#jsonvalue)): *[JSONValue](../modules/_json_.md#jsonvalue)*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1346

**Parameters:**

▪ **callbackfn**: *function*

▸ (`previousValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *[JSONValue](../modules/_json_.md#jsonvalue)*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪ **initialValue**: *[JSONValue](../modules/_json_.md#jsonvalue)*

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)*

▸ **reduceRight**<**U**>(`callbackfn`: function, `initialValue`: U): *U*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1352

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

**Type parameters:**

▪ **U**

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

▸ (`previousValue`: U, `currentValue`: [JSONValue](../modules/_json_.md#jsonvalue), `currentIndex`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *U*

**Parameters:**

Name | Type |
------ | ------ |
`previousValue` | U |
`currentValue` | [JSONValue](../modules/_json_.md#jsonvalue) |
`currentIndex` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪ **initialValue**: *U*

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

**Returns:** *U*

___

###  reverse

▸ **reverse**(): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1245

Reverses the elements in an Array.

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

___

###  shift

▸ **shift**(): *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1249

Removes the first element from an array and returns it.

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue) | undefined*

___

###  slice

▸ **slice**(`start?`: undefined | number, `end?`: undefined | number): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1255

Returns a section of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start?` | undefined &#124; number | The beginning of the specified portion of the array. |
`end?` | undefined &#124; number | The end of the specified portion of the array.  |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

___

###  some

▸ **some**(`callbackfn`: function, `thisArg?`: any): *boolean*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1302

Determines whether the specified callback function returns true for any element of an array.

**Parameters:**

▪ **callbackfn**: *function*

A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.

▸ (`value`: [JSONValue](../modules/_json_.md#jsonvalue), `index`: number, `array`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JSONValue](../modules/_json_.md#jsonvalue) |
`index` | number |
`array` | [JSONValue](../modules/_json_.md#jsonvalue)[] |

▪`Optional`  **thisArg**: *any*

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

**Returns:** *boolean*

___

###  sort

▸ **sort**(`compareFn?`: undefined | function): *this*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1260

Sorts an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`compareFn?` | undefined &#124; function | The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.  |

**Returns:** *this*

___

###  splice

▸ **splice**(`start`: number, `deleteCount?`: undefined | number): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1266

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount?` | undefined &#124; number | The number of elements to remove.  |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

▸ **splice**(`start`: number, `deleteCount`: number, ...`items`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *[JSONValue](../modules/_json_.md#jsonvalue)[]*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1273

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`start` | number | The zero-based location in the array from which to start removing elements. |
`deleteCount` | number | The number of elements to remove. |
`...items` | [JSONValue](../modules/_json_.md#jsonvalue)[] | Elements to insert into the array in place of the deleted elements.  |

**Returns:** *[JSONValue](../modules/_json_.md#jsonvalue)[]*

___

###  toLocaleString

▸ **toLocaleString**(): *string*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1217

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1213

Returns a string representation of an array.

**Returns:** *string*

___

###  unshift

▸ **unshift**(...`items`: [JSONValue](../modules/_json_.md#jsonvalue)[]): *number*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:1278

Inserts new elements at the start of an array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...items` | [JSONValue](../modules/_json_.md#jsonvalue)[] | Elements to insert at the start of the Array.  |

**Returns:** *number*

___

###  values

▸ **values**(): *IterableIterator‹[JSONValue](../modules/_json_.md#jsonvalue)›*

*Inherited from void*

Defined in /Users/wyeworks/git/misc-utils-of-mine/misc-utils-of-mine-generic/node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:67

Returns an iterable of values in the array

**Returns:** *IterableIterator‹[JSONValue](../modules/_json_.md#jsonvalue)›*
