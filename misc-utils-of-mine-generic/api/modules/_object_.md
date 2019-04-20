[misc-utils-of-mine-generic](../README.md) > ["object"](../modules/_object_.md)

# External module: "object"

## Index

### Variables

* [objectMap](_object_.md#objectmap)

### Functions

* [arrayToObject](_object_.md#arraytoobject)
* [getObjectProperty](_object_.md#getobjectproperty)
* [objectFilter](_object_.md#objectfilter)
* [objectKeys](_object_.md#objectkeys)
* [objectMapValues](_object_.md#objectmapvalues)
* [setObjectProperty](_object_.md#setobjectproperty)

---

## Variables

<a id="objectmap"></a>

### `<Const>` objectMap

**● objectMap**: *[objectMapValues](_object_.md#objectmapvalues)* =  objectMapValues

*Defined in [object.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L19)*

___

## Functions

<a id="arraytoobject"></a>

###  arrayToObject

▸ **arrayToObject**<`T`>(a: *`string`[]*, fn: *`function`*): `object`

*Defined in [object.ts:37](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L37)*

build an object using keys in \[\[a\]\] and values returning from \[\[fn\]\] as long as they are not undefined

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

▸ **getObjectProperty**<`T`>(object: *`any`*, path: *`string` \| `string`[]*, defaultValue?: *`T` \| `undefined`*): `T` \| `undefined`

*Defined in [object.ts:51](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L51)*

Returns a nested property of given object and given path. For example path could be 'foo.bar' and it will return `object['foo']['bar']`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| object | `any` | - |
| path | `string` \| `string`[] | - |
| `Default value` defaultValue | `T` \| `undefined` |  undefined |

**Returns:** `T` \| `undefined`

___
<a id="objectfilter"></a>

###  objectFilter

▸ **objectFilter**<`O`>(o: *`O`*, p: *`function`*): `Partial`<`O`>

*Defined in [object.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L21)*

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

*Defined in [object.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L3)*

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

*Defined in [object.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L9)*

Returns a new object with the same keys of given one, and values mapped with given function

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

▸ **setObjectProperty**<`T`>(object: *`any`*, path: *`string` \| `string`[]*, value: *`T`*): `void`

*Defined in [object.ts:75](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/e02b274/misc-utils-of-mine-generic/src/object.ts#L75)*

sets a nested property on given path. For example path could be 'foo.bar' and it will set `object.foo.bar = value`

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| object | `any` |
| path | `string` \| `string`[] |
| value | `T` |

**Returns:** `void`

___

