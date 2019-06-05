[misc-utils-of-mine-generic](../README.md) > ["geometry"](../modules/_geometry_.md) > [Point](../classes/_geometry_.point.md)

# Class: Point

Simple Point class.

Any method that takes an x and y may also take a point.

## Hierarchy

**Point**

## Index

### Constructors

* [constructor](_geometry_.point.md#constructor)

### Properties

* [x](_geometry_.point.md#x)
* [y](_geometry_.point.md#y)

### Methods

* [add](_geometry_.point.md#add)
* [clone](_geometry_.point.md#clone)
* [equals](_geometry_.point.md#equals)
* [isZero](_geometry_.point.md#iszero)
* [map](_geometry_.point.md#map)
* [scale](_geometry_.point.md#scale)
* [set](_geometry_.point.md#set)
* [subtract](_geometry_.point.md#subtract)
* [toString](_geometry_.point.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Point**(x: *`number`*, y: *`number`*): [Point](_geometry_.point.md)

*Defined in [geometry.ts:12](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** [Point](_geometry_.point.md)

___

## Properties

<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [geometry.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L13)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [geometry.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L13)*

___

## Methods

<a id="add"></a>

###  add

▸ **add**(x: *`number`*, y: *`number`*): `this`

*Defined in [geometry.ts:40](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="clone"></a>

###  clone

▸ **clone**(): [Point](_geometry_.point.md)

*Defined in [geometry.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L16)*

**Returns:** [Point](_geometry_.point.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [geometry.ts:26](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L26)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `boolean`

___
<a id="iszero"></a>

###  isZero

▸ **isZero**(): `boolean`

*Defined in [geometry.ts:58](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L58)*

**Returns:** `boolean`

___
<a id="map"></a>

###  map

▸ **map**(f: *[NumberMapFn](../modules/_geometry_.md#numbermapfn)*): `this`

*Defined in [geometry.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L34)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | [NumberMapFn](../modules/_geometry_.md#numbermapfn) |

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(s: *`number`*): `this`

*Defined in [geometry.ts:52](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L52)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `number` |

**Returns:** `this`

___
<a id="set"></a>

###  set

▸ **set**(x: *`number`*, y: *`number`*): `this`

*Defined in [geometry.ts:20](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(x: *`number`*, y: *`number`*): `this`

*Defined in [geometry.ts:46](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L46)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [geometry.ts:30](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/18ba426/misc-utils-of-mine-generic/src/geometry.ts#L30)*

**Returns:** `string`

___

