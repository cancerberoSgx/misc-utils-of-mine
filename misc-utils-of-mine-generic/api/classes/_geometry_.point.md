[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["geometry"](../modules/_geometry_.md) › [Point](_geometry_.point.md)

# Class: Point

Simple Point class.

Any method that takes an x and y may also take a point.

## Hierarchy

* **Point**

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

## Constructors

###  constructor

\+ **new Point**(`x`: number, `y`: number): *[Point](_geometry_.point.md)*

Defined in src/geometry.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Point](_geometry_.point.md)*

## Properties

###  x

• **x**: *number*

Defined in src/geometry.ts:28

___

###  y

• **y**: *number*

Defined in src/geometry.ts:28

## Methods

###  add

▸ **add**(`x`: number, `y`: number): *this*

Defined in src/geometry.ts:55

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *this*

___

###  clone

▸ **clone**(): *[Point](_geometry_.point.md)‹›*

Defined in src/geometry.ts:31

**Returns:** *[Point](_geometry_.point.md)‹›*

___

###  equals

▸ **equals**(`x`: number, `y`: number): *boolean*

Defined in src/geometry.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *boolean*

___

###  isZero

▸ **isZero**(): *boolean*

Defined in src/geometry.ts:73

**Returns:** *boolean*

___

###  map

▸ **map**(`f`: [NumberMapFn](../modules/_geometry_.md#numbermapfn)): *this*

Defined in src/geometry.ts:49

**Parameters:**

Name | Type |
------ | ------ |
`f` | [NumberMapFn](../modules/_geometry_.md#numbermapfn) |

**Returns:** *this*

___

###  scale

▸ **scale**(`s`: number): *this*

Defined in src/geometry.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`s` | number |

**Returns:** *this*

___

###  set

▸ **set**(`x`: number, `y`: number): *this*

Defined in src/geometry.ts:35

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *this*

___

###  subtract

▸ **subtract**(`x`: number, `y`: number): *this*

Defined in src/geometry.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

Defined in src/geometry.ts:45

**Returns:** *string*
