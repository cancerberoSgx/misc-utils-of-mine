[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["object"](_object_.md)

# Module: "object"

## Index

### Variables

* [objectMap](_object_.md#const-objectmap)

### Functions

* [arrayToObject](_object_.md#arraytoobject)
* [getObjectProperty](_object_.md#getobjectproperty)
* [getObjectPropertyPaths](_object_.md#getobjectpropertypaths)
* [objectFilter](_object_.md#objectfilter)
* [objectKeys](_object_.md#objectkeys)
* [objectMapValues](_object_.md#objectmapvalues)
* [objectToArray](_object_.md#objecttoarray)
* [setObjectProperty](_object_.md#setobjectproperty)

## Variables

### `Const` objectMap

• **objectMap**: *[objectMapValues](_object_.md#objectmapvalues)* = objectMapValues

*Defined in [src/object.ts:25](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L25)*

## Functions

###  arrayToObject

▸ **arrayToObject**‹**T**›(`a`: string[], `fn`: function): *object*

*Defined in [src/object.ts:47](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L47)*

Builds an object using keys in [[a]] and values returning from [[fn]] as long as they are not undefined.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **a**: *string[]*

▪ **fn**: *function*

▸ (`a`: string): *T | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string |

**Returns:** *object*

* \[ **s**: *string*\]: T | undefined

___

###  getObjectProperty

▸ **getObjectProperty**‹**T**›(`object`: any, `path`: string | (string | number)[], `defaultValue`: T | undefined): *T | undefined*

*Defined in [src/object.ts:59](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L59)*

Returns a nested property of given object and given path. For example path could be 'foo.bar' and it will
return `object['foo']['bar']`

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`object` | any | - |
`path` | string &#124; (string &#124; number)[] | - |
`defaultValue` | T &#124; undefined | undefined |

**Returns:** *T | undefined*

___

###  getObjectPropertyPaths

▸ **getObjectPropertyPaths**(`object`: any, `options`: object): *(string | number)[][]*

*Defined in [src/object.ts:117](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L117)*

**Parameters:**

▪ **object**: *any*

▪`Default value`  **options**: *object*= { ignoreArrayElements: true, leafsOnly: false }

Name | Type |
------ | ------ |
`ignoreArrayElements?` | undefined &#124; false &#124; true |
`leafsOnly?` | undefined &#124; false &#124; true |

**Returns:** *(string | number)[][]*

___

###  objectFilter

▸ **objectFilter**‹**O**›(`o`: O, `p`: function): *Partial‹O›*

*Defined in [src/object.ts:31](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L31)*

**Type parameters:**

▪ **O**: *object*

**Parameters:**

▪ **o**: *O*

▪ **p**: *function*

▸ (`k`: keyof O, `v`: O[keyof O]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`k` | keyof O |
`v` | O[keyof O] |

**Returns:** *Partial‹O›*

___

###  objectKeys

▸ **objectKeys**‹**Field**›(`o`: Field): *[ObjectStringKeyUnion](_type_.md#objectstringkeyunion)‹Field›[]*

*Defined in [src/object.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L7)*

Same as `Object.keys()` but with types.

**Type parameters:**

▪ **Field**: *[EmptyObject](_type_.md#emptyobject)*

**Parameters:**

Name | Type |
------ | ------ |
`o` | Field |

**Returns:** *[ObjectStringKeyUnion](_type_.md#objectstringkeyunion)‹Field›[]*

___

###  objectMapValues

▸ **objectMapValues**‹**O**, **T**›(`o`: O, `p`: function): *object*

*Defined in [src/object.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L14)*

Returns a new object with the same keys of given one, and values mapped with given function.

**Type parameters:**

▪ **O**: *object*

▪ **T**

**Parameters:**

▪ **o**: *O*

▪ **p**: *function*

▸ (`k`: keyof O, `v`: O[keyof O]): *T*

**Parameters:**

Name | Type |
------ | ------ |
`k` | keyof O |
`v` | O[keyof O] |

**Returns:** *object*

___

###  objectToArray

▸ **objectToArray**‹**O**›(`o`: O): *object[]*

*Defined in [src/object.ts:27](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L27)*

**Type parameters:**

▪ **O**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`o` | O |

**Returns:** *object[]*

___

###  setObjectProperty

▸ **setObjectProperty**(`object`: any, `path`: string | (string | number)[], `value`: any): *any*

*Defined in [src/object.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/object.ts#L86)*

sets a nested property on given path. For example path could be 'foo.bar' and it will set `object.foo.bar = value`.
If the path given as array contains numbers, then or those items arrays will be created instead of objects. For example:

`setObjectProperty({}, ['foo', 0, 1, 'bar'], 'hello)`

**Parameters:**

Name | Type |
------ | ------ |
`object` | any |
`path` | string &#124; (string &#124; number)[] |
`value` | any |

**Returns:** *any*
