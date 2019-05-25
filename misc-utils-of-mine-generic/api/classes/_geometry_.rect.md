[misc-utils-of-mine-generic](../README.md) > ["geometry"](../modules/_geometry_.md) > [Rect](../classes/_geometry_.rect.md)

# Class: Rect

Rect is a simple data structure for representation of a rectangle supporting many basic geometric operations.

NOTE: Since its operations are closed, rectangles may be empty and will report non-positive widths and heights in that case.

## Hierarchy

**Rect**

## Index

### Constructors

* [constructor](_geometry_.rect.md#constructor)

### Properties

* [bottom](_geometry_.rect.md#bottom)
* [left](_geometry_.rect.md#left)
* [right](_geometry_.rect.md#right)
* [top](_geometry_.rect.md#top)

### Accessors

* [height](_geometry_.rect.md#height)
* [width](_geometry_.rect.md#width)
* [x](_geometry_.rect.md#x)
* [y](_geometry_.rect.md#y)

### Methods

* [blend](_geometry_.rect.md#blend)
* [center](_geometry_.rect.md#center)
* [clone](_geometry_.rect.md#clone)
* [contains](_geometry_.rect.md#contains)
* [copyFrom](_geometry_.rect.md#copyfrom)
* [equals](_geometry_.rect.md#equals)
* [expandToContain](_geometry_.rect.md#expandtocontain)
* [inflate](_geometry_.rect.md#inflate)
* [inflateFixed](_geometry_.rect.md#inflatefixed)
* [intersect](_geometry_.rect.md#intersect)
* [intersects](_geometry_.rect.md#intersects)
* [isEmpty](_geometry_.rect.md#isempty)
* [map](_geometry_.rect.md#map)
* [restrictTo](_geometry_.rect.md#restrictto)
* [round](_geometry_.rect.md#round)
* [scale](_geometry_.rect.md#scale)
* [setBounds](_geometry_.rect.md#setbounds)
* [setRect](_geometry_.rect.md#setrect)
* [subtract](_geometry_.rect.md#subtract)
* [toString](_geometry_.rect.md#tostring)
* [translate](_geometry_.rect.md#translate)
* [translateInside](_geometry_.rect.md#translateinside)
* [union](_geometry_.rect.md#union)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Rect**(left: *`number`*, top: *`number`*, right: *`number`*, bottom: *`number`*): [Rect](_geometry_.rect.md)

*Defined in [geometry.ts:70](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| left | `number` |
| top | `number` |
| right | `number` |
| bottom | `number` |

**Returns:** [Rect](_geometry_.rect.md)

___

## Properties

<a id="bottom"></a>

###  bottom

**● bottom**: *`number`*

*Defined in [geometry.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L71)*

___
<a id="left"></a>

###  left

**● left**: *`number`*

*Defined in [geometry.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L71)*

___
<a id="right"></a>

###  right

**● right**: *`number`*

*Defined in [geometry.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L71)*

___
<a id="top"></a>

###  top

**● top**: *`number`*

*Defined in [geometry.ts:71](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L71)*

___

## Accessors

<a id="height"></a>

###  height

**get height**(): `number`

**set height**(v: *`number`*): `void`

*Defined in [geometry.ts:101](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L101)*

**Returns:** `number`

*Defined in [geometry.ts:105](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="width"></a>

###  width

**get width**(): `number`

**set width**(v: *`number`*): `void`

*Defined in [geometry.ts:93](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L93)*

**Returns:** `number`

*Defined in [geometry.ts:97](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L97)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="x"></a>

###  x

**get x**(): `number`

**set x**(v: *`number`*): `void`

*Defined in [geometry.ts:73](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L73)*

**Returns:** `number`

*Defined in [geometry.ts:77](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L77)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___
<a id="y"></a>

###  y

**get y**(): `number`

**set y**(v: *`number`*): `void`

*Defined in [geometry.ts:83](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L83)*

**Returns:** `number`

*Defined in [geometry.ts:87](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L87)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | `number` |

**Returns:** `void`

___

## Methods

<a id="blend"></a>

###  blend

▸ **blend**(rect: *[Rect](_geometry_.rect.md)*, scalar: *`number`*): [Rect](_geometry_.rect.md)

*Defined in [geometry.ts:313](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L313)*

Blends two rectangles together.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| rect | [Rect](_geometry_.rect.md) |  Rectangle to blend this one with |
| scalar | `number` |  Ratio from 0 (returns a clone of this rect) to 1 (clone of rect). |

**Returns:** [Rect](_geometry_.rect.md)
New blended rectangle.

___
<a id="center"></a>

###  center

▸ **center**(): [Point](_geometry_.point.md)

*Defined in [geometry.ts:141](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L141)*

**Returns:** [Point](_geometry_.point.md)

___
<a id="clone"></a>

###  clone

▸ **clone**(): [Rect](_geometry_.rect.md)

*Defined in [geometry.ts:137](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L137)*

**Returns:** [Rect](_geometry_.rect.md)

___
<a id="contains"></a>

###  contains

▸ **contains**(other: *[Rect](_geometry_.rect.md)*): `boolean`

*Defined in [geometry.ts:175](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L175)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `boolean`

___
<a id="copyfrom"></a>

###  copyFrom

▸ **copyFrom**(other: *[Rect](_geometry_.rect.md)*): `this`

*Defined in [geometry.ts:148](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L148)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `this`

___
<a id="equals"></a>

###  equals

▸ **equals**(other?: *[Rect](_geometry_.rect.md)*): `undefined` \| `false` \| `true`

*Defined in [geometry.ts:129](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L129)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` other | [Rect](_geometry_.rect.md) |

**Returns:** `undefined` \| `false` \| `true`

___
<a id="expandtocontain"></a>

###  expandToContain

▸ **expandToContain**(other: *[Rect](_geometry_.rect.md)*): `this`

*Defined in [geometry.ts:214](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L214)*

Expand this rectangle to the union of both rectangles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `this`

___
<a id="inflate"></a>

###  inflate

▸ **inflate**(xscl: *`number`*, yscl: *`number`*): `this`

*Defined in [geometry.ts:326](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L326)*

Grows or shrinks the rectangle while keeping the center point. Accepts single multipler, or separate for both axes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| xscl | `number` |
| yscl | `number` |

**Returns:** `this`

___
<a id="inflatefixed"></a>

###  inflateFixed

▸ **inflateFixed**(fixed: *`number`*): `this`

*Defined in [geometry.ts:341](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L341)*

Grows or shrinks the rectangle by fixed amount while keeping the center point. Accepts single fixed amount

**Parameters:**

| Name | Type |
| ------ | ------ |
| fixed | `number` |

**Returns:** `this`

___
<a id="intersect"></a>

###  intersect

▸ **intersect**(other: *[Rect](_geometry_.rect.md)*): [Rect](_geometry_.rect.md)

*Defined in [geometry.ts:181](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L181)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** [Rect](_geometry_.rect.md)

___
<a id="intersects"></a>

###  intersects

▸ **intersects**(other: *[Rect](_geometry_.rect.md)*): `boolean`

*Defined in [geometry.ts:185](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L185)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `boolean`

___
<a id="isempty"></a>

###  isEmpty

▸ **isEmpty**(): `boolean`

*Defined in [geometry.ts:109](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L109)*

**Returns:** `boolean`

___
<a id="map"></a>

###  map

▸ **map**(f: *[NumberMapFn](../modules/_geometry_.md#numbermapfn)*): `this`

*Defined in [geometry.ts:248](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L248)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| f | [NumberMapFn](../modules/_geometry_.md#numbermapfn) |

**Returns:** `this`

___
<a id="restrictto"></a>

###  restrictTo

▸ **restrictTo**(other: *[Rect](_geometry_.rect.md)*): `this`

*Defined in [geometry.ts:199](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L199)*

Restrict area of this rectangle to the intersection of both rectangles.

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `this`

___
<a id="round"></a>

###  round

▸ **round**(): `this`

*Defined in [geometry.ts:232](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L232)*

Expands to the smallest rectangle that contains original rectangle and is bounded by lines with integer coefficients.

**Returns:** `this`

___
<a id="scale"></a>

###  scale

▸ **scale**(xscl: *`number`*, yscl: *`number`*): `this`

*Defined in [geometry.ts:240](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L240)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| xscl | `number` |
| yscl | `number` |

**Returns:** `this`

___
<a id="setbounds"></a>

###  setBounds

▸ **setBounds**(l: *`number`*, t: *`number`*, r: *`number`*, b: *`number`*): `this`

*Defined in [geometry.ts:121](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L121)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| l | `number` |
| t | `number` |
| r | `number` |
| b | `number` |

**Returns:** `this`

___
<a id="setrect"></a>

###  setRect

▸ **setRect**(x: *`number`*, y: *`number`*, w: *`number`*, h: *`number`*): `this`

*Defined in [geometry.ts:113](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L113)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |
| w | `number` |
| h | `number` |

**Returns:** `this`

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(other: *[Rect](_geometry_.rect.md)*): [Rect](_geometry_.rect.md)[]

*Defined in [geometry.ts:278](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L278)*

Subtract other area from this. Returns array of rects whose union is this-other.

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** [Rect](_geometry_.rect.md)[]

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [geometry.ts:164](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L164)*

**Returns:** `string`

___
<a id="translate"></a>

###  translate

▸ **translate**(x: *`number`*, y: *`number`*): `this`

*Defined in [geometry.ts:156](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L156)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `this`

___
<a id="translateinside"></a>

###  translateInside

▸ **translateInside**(other: *[Rect](_geometry_.rect.md)*): `this`

*Defined in [geometry.ts:259](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L259)*

Ensure this rectangle is inside the other, if possible. Preserves w, h.

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** `this`

___
<a id="union"></a>

###  union

▸ **union**(other: *[Rect](_geometry_.rect.md)*): [Rect](_geometry_.rect.md)

*Defined in [geometry.ts:171](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/1dd402e/misc-utils-of-mine-generic/src/geometry.ts#L171)*

Return a new rect that is the union of that one and this one

**Parameters:**

| Name | Type |
| ------ | ------ |
| other | [Rect](_geometry_.rect.md) |

**Returns:** [Rect](_geometry_.rect.md)

___

