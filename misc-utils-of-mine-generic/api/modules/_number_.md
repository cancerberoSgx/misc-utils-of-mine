[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["number"](_number_.md)

# Module: "number"

## Index

### Variables

* [_unique](_number_.md#let-_unique)
* [clamp](_number_.md#const-clamp)
* [float](_number_.md#const-float)
* [floats](_number_.md#const-floats)
* [int](_number_.md#const-int)
* [ints](_number_.md#const-ints)

### Functions

* [between](_number_.md#between)
* [intBetween](_number_.md#intbetween)
* [isPrime](_number_.md#isprime)
* [randomFloatBetween](_number_.md#randomfloatbetween)
* [randomFloatsBetween](_number_.md#randomfloatsbetween)
* [randomIntBetween](_number_.md#randomintbetween)
* [randomIntsBetween](_number_.md#randomintsbetween)
* [randomItem](_number_.md#randomitem)
* [unique](_number_.md#unique)

## Variables

### `Let` _unique

• **_unique**: *number* = 0

Defined in src/number.ts:3

___

### `Const` clamp

• **clamp**: *[intBetween](_number_.md#intbetween)* = intBetween

Defined in src/number.ts:46

___

### `Const` float

• **float**: *[randomFloatBetween](_number_.md#randomfloatbetween)* = randomFloatBetween

Defined in src/number.ts:30

___

### `Const` floats

• **floats**: *[randomFloatsBetween](_number_.md#randomfloatsbetween)* = randomFloatsBetween

Defined in src/number.ts:28

___

### `Const` int

• **int**: *[randomIntBetween](_number_.md#randomintbetween)* = randomIntBetween

Defined in src/number.ts:19

___

### `Const` ints

• **ints**: *[randomIntsBetween](_number_.md#randomintsbetween)* = randomIntsBetween

Defined in src/number.ts:17

## Functions

###  between

▸ **between**(`n`: number, `min`: number, `max`: number): *number*

Defined in src/number.ts:35

Makes sure n is between min and max inclusive.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  intBetween

▸ **intBetween**(`n`: number, `min`: number, `max`: number): *number*

Defined in src/number.ts:42

Makes sure n is between min and max inclusive and is natural.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  isPrime

▸ **isPrime**(`num`: number): *boolean*

Defined in src/number.ts:52

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *boolean*

___

###  randomFloatBetween

▸ **randomFloatBetween**(`a`: number, `b`: number): *number*

Defined in src/number.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  randomFloatsBetween

▸ **randomFloatsBetween**(`l`: number, `min`: number, `max`: number): *number[]*

Defined in src/number.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`l` | number |
`min` | number |
`max` | number |

**Returns:** *number[]*

___

###  randomIntBetween

▸ **randomIntBetween**(`a`: number, `b`: number): *number*

Defined in src/number.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  randomIntsBetween

▸ **randomIntsBetween**(`l`: number, `min`: number, `max`: number): *number[]*

Defined in src/number.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`l` | number |
`min` | number |
`max` | number |

**Returns:** *number[]*

___

###  randomItem

▸ **randomItem**‹**T**›(`a`: T[]): *T*

Defined in src/number.ts:48

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`a` | T[] |

**Returns:** *T*

___

###  unique

▸ **unique**(`prefix`: string): *string*

Defined in src/number.ts:5

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`prefix` | string | "_" |

**Returns:** *string*
