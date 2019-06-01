[misc-utils-of-mine-generic](../README.md) > ["object"](../modules/_object_.md)

# External module: "object"

## Index

### Variables

* [objectMap](_object_.md#objectmap)

### Functions

* [arrayToObject](_object_.md#arraytoobject)
* [getObjectProperty](_object_.md#getobjectproperty)
* [getObjectPropertyPaths](_object_.md#getobjectpropertypaths)
* [objectFilter](_object_.md#objectfilter)
* [objectKeys](_object_.md#objectkeys)
* [objectMapValues](_object_.md#objectmapvalues)
* [setObjectProperty](_object_.md#setobjectproperty)

---

## Variables

<a id="objectmap"></a>

### `<Const>` objectMap

**● objectMap**: *[objectMapValues](_object_.md#objectmapvalues)* =  objectMapValues

*Defined in [object.ts:24](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L24)*

___

## Functions

<a id="arraytoobject"></a>

###  arrayToObject

▸ **arrayToObject**<`T`>(a: *`string`[]*, fn: *`function`*): `object`

*Defined in [object.ts:42](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L42)*

Builds an object using keys in \[\[a\]\] and values returning from \[\[fn\]\] as long as they are not undefined.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `string`[] |
| fn | `function` |

**Returns:** `object`

___
<a id="getobjectproperty"></a>

###  getObjectProperty

▸ **getObjectProperty**<`T`>(object: *`any`*, path: *`string` \| (`string` \| `number`)[]*, defaultValue?: *`T` \| `undefined`*): `T` \| `undefined`

*Defined in [object.ts:54](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L54)*

Returns a nested property of given object and given path. For example path could be 'foo.bar' and it will return `object['foo']['bar']`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| object | `any` | - |
| path | `string` \| (`string` \| `number`)[] | - |
| `Default value` defaultValue | `T` \| `undefined` |  undefined |

**Returns:** `T` \| `undefined`

___
<a id="getobjectpropertypaths"></a>

###  getObjectPropertyPaths

▸ **getObjectPropertyPaths**(object: *`any`*, options?: *`object`*): (`string` \| `number`)[][]

*Defined in [object.ts:112](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L112)*

**Parameters:**

**object: `any`**

**`Default value` options: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` ignoreArrayElements | `undefined` \| `false` \| `true` |
| `Optional` leafsOnly | `undefined` \| `false` \| `true` |

**Returns:** (`string` \| `number`)[][]

___
<a id="objectfilter"></a>

###  objectFilter

▸ **objectFilter**<`O`>(o: *`O`*, p: *`function`*): `Partial`<`O`>

*Defined in [object.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L26)*

**Type parameters:**

#### O :  `object`
**Parameters:**

| Name | Type |
| ------ | ------ |
| o | `O` |
| p | `function` |

**Returns:** `Partial`<`O`>

___
<a id="objectkeys"></a>

###  objectKeys

▸ **objectKeys**<`Field`>(o: *`Field`*): `ObjectStringKeyUnion`<`Field`>[]

*Defined in [object.ts:7](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L7)*

Same as `Object.keys()` but with types.

**Type parameters:**

#### Field :  `EmptyObject`
**Parameters:**

| Name | Type |
| ------ | ------ |
| o | `Field` |

**Returns:** `ObjectStringKeyUnion`<`Field`>[]

___
<a id="objectmapvalues"></a>

###  objectMapValues

▸ **objectMapValues**<`O`,`T`>(o: *`O`*, p: *`function`*): `object`

*Defined in [object.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L14)*

Returns a new object with the same keys of given one, and values mapped with given function.

**Type parameters:**

#### O :  `object`
#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| o | `O` |
| p | `function` |

**Returns:** `object`

___
<a id="setobjectproperty"></a>

###  setObjectProperty

▸ **setObjectProperty**(object: *`any`*, path: *`string` \| (`string` \| `number`)[]*, value: *`any`*): `any`

*Defined in [object.ts:81](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a7a1c9f/misc-utils-of-mine-generic/src/object.ts#L81)*

sets a nested property on given path. For example path could be 'foo.bar' and it will set `object.foo.bar = value`. If the path given as array contains numbers, then or those items arrays will be created instead of objects. For example:

`setObjectProperty({}, ['foo', 0, 1, 'bar'], 'hello)`

**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `any` |
| path | `string` \| (`string` \| `number`)[] |
| value | `any` |

**Returns:** `any`

___

