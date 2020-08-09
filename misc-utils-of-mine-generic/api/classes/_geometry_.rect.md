[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["geometry"](../modules/_geometry_.md) › [Rect](_geometry_.rect.md)

# Class: Rect

Rect is a simple data structure for representation of a rectangle supporting
many basic geometric operations.

NOTE: Since its operations are closed, rectangles may be empty and will report
non-positive widths and heights in that case.

## Hierarchy

* **Rect**

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

## Constructors

###  constructor

\+ **new Rect**(`left`: number, `top`: number, `right`: number, `bottom`: number): *[Rect](_geometry_.rect.md)*

*Defined in [src/geometry.ts:85](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`left` | number |
`top` | number |
`right` | number |
`bottom` | number |

**Returns:** *[Rect](_geometry_.rect.md)*

## Properties

###  bottom

• **bottom**: *number*

*Defined in [src/geometry.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L86)*

___

###  left

• **left**: *number*

*Defined in [src/geometry.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L86)*

___

###  right

• **right**: *number*

*Defined in [src/geometry.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L86)*

___

###  top

• **top**: *number*

*Defined in [src/geometry.ts:86](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L86)*

## Accessors

###  height

• **get height**(): *number*

*Defined in [src/geometry.ts:116](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L116)*

**Returns:** *number*

• **set height**(`v`: number): *void*

*Defined in [src/geometry.ts:120](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *void*

___

###  width

• **get width**(): *number*

*Defined in [src/geometry.ts:108](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L108)*

**Returns:** *number*

• **set width**(`v`: number): *void*

*Defined in [src/geometry.ts:112](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L112)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *void*

___

###  x

• **get x**(): *number*

*Defined in [src/geometry.ts:88](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L88)*

**Returns:** *number*

• **set x**(`v`: number): *void*

*Defined in [src/geometry.ts:92](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *void*

___

###  y

• **get y**(): *number*

*Defined in [src/geometry.ts:98](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L98)*

**Returns:** *number*

• **set y**(`v`: number): *void*

*Defined in [src/geometry.ts:102](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *void*

## Methods

###  blend

▸ **blend**(`rect`: [Rect](_geometry_.rect.md), `scalar`: number): *[Rect](_geometry_.rect.md)‹›*

*Defined in [src/geometry.ts:328](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L328)*

Blends two rectangles together.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rect` | [Rect](_geometry_.rect.md) | Rectangle to blend this one with |
`scalar` | number | Ratio from 0 (returns a clone of this rect) to 1 (clone of rect). |

**Returns:** *[Rect](_geometry_.rect.md)‹›*

New blended rectangle.

___

###  center

▸ **center**(): *[Point](_geometry_.point.md)‹›*

*Defined in [src/geometry.ts:156](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L156)*

**Returns:** *[Point](_geometry_.point.md)‹›*

___

###  clone

▸ **clone**(): *[Rect](_geometry_.rect.md)‹›*

*Defined in [src/geometry.ts:152](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L152)*

**Returns:** *[Rect](_geometry_.rect.md)‹›*

___

###  contains

▸ **contains**(`other`: [Rect](_geometry_.rect.md)): *boolean*

*Defined in [src/geometry.ts:190](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *boolean*

___

###  copyFrom

▸ **copyFrom**(`other`: [Rect](_geometry_.rect.md)): *this*

*Defined in [src/geometry.ts:163](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *this*

___

###  equals

▸ **equals**(`other?`: [Rect](_geometry_.rect.md)): *undefined | false | true*

*Defined in [src/geometry.ts:144](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`other?` | [Rect](_geometry_.rect.md) |

**Returns:** *undefined | false | true*

___

###  expandToContain

▸ **expandToContain**(`other`: [Rect](_geometry_.rect.md)): *this*

*Defined in [src/geometry.ts:229](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L229)*

Expand this rectangle to the union of both rectangles.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *this*

___

###  inflate

▸ **inflate**(`xscl`: number, `yscl`: number): *this*

*Defined in [src/geometry.ts:341](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L341)*

Grows or shrinks the rectangle while keeping the center point.
Accepts single multipler, or separate for both axes.

**Parameters:**

Name | Type |
------ | ------ |
`xscl` | number |
`yscl` | number |

**Returns:** *this*

___

###  inflateFixed

▸ **inflateFixed**(`fixed`: number): *this*

*Defined in [src/geometry.ts:356](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L356)*

Grows or shrinks the rectangle by fixed amount while keeping the center point.
Accepts single fixed amount

**Parameters:**

Name | Type |
------ | ------ |
`fixed` | number |

**Returns:** *this*

___

###  intersect

▸ **intersect**(`other`: [Rect](_geometry_.rect.md)): *[Rect](_geometry_.rect.md)‹›*

*Defined in [src/geometry.ts:196](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L196)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *[Rect](_geometry_.rect.md)‹›*

___

###  intersects

▸ **intersects**(`other`: [Rect](_geometry_.rect.md)): *boolean*

*Defined in [src/geometry.ts:200](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L200)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *boolean*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Defined in [src/geometry.ts:124](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L124)*

**Returns:** *boolean*

___

###  map

▸ **map**(`f`: [NumberMapFn](../modules/_geometry_.md#numbermapfn)): *this*

*Defined in [src/geometry.ts:263](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [NumberMapFn](../modules/_geometry_.md#numbermapfn) |

**Returns:** *this*

___

###  restrictTo

▸ **restrictTo**(`other`: [Rect](_geometry_.rect.md)): *this*

*Defined in [src/geometry.ts:214](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L214)*

Restrict area of this rectangle to the intersection of both rectangles.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *this*

___

###  round

▸ **round**(): *this*

*Defined in [src/geometry.ts:247](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L247)*

Expands to the smallest rectangle that contains original rectangle and is bounded
by lines with integer coefficients.

**Returns:** *this*

___

###  scale

▸ **scale**(`xscl`: number, `yscl`: number): *this*

*Defined in [src/geometry.ts:255](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`xscl` | number |
`yscl` | number |

**Returns:** *this*

___

###  setBounds

▸ **setBounds**(`l`: number, `t`: number, `r`: number, `b`: number): *this*

*Defined in [src/geometry.ts:136](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L136)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | number |
`t` | number |
`r` | number |
`b` | number |

**Returns:** *this*

___

###  setRect

▸ **setRect**(`x`: number, `y`: number, `w`: number, `h`: number): *this*

*Defined in [src/geometry.ts:128](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L128)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`w` | number |
`h` | number |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`other`: [Rect](_geometry_.rect.md)): *[Rect](_geometry_.rect.md)‹›[]*

*Defined in [src/geometry.ts:293](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L293)*

Subtract other area from this. Returns array of rects whose union is this-other.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *[Rect](_geometry_.rect.md)‹›[]*

___

###  toString

▸ **toString**(): *string*

*Defined in [src/geometry.ts:179](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L179)*

**Returns:** *string*

___

###  translate

▸ **translate**(`x`: number, `y`: number): *this*

*Defined in [src/geometry.ts:171](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *this*

___

###  translateInside

▸ **translateInside**(`other`: [Rect](_geometry_.rect.md)): *this*

*Defined in [src/geometry.ts:274](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L274)*

Ensure this rectangle is inside the other, if possible. Preserves w, h.

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *this*

___

###  union

▸ **union**(`other`: [Rect](_geometry_.rect.md)): *[Rect](_geometry_.rect.md)‹›*

*Defined in [src/geometry.ts:186](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/a1f5608/misc-utils-of-mine-generic/src/geometry.ts#L186)*

Return a new rect that is the union of that one and this one

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Rect](_geometry_.rect.md) |

**Returns:** *[Rect](_geometry_.rect.md)‹›*
