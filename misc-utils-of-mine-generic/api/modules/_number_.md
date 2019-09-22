**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["number"](_number_.md)

# External module: "number"

## Index

### Variables

* [_unique](_number_.md#let-_unique)
* [float](_number_.md#const-float)
* [floats](_number_.md#const-floats)
* [int](_number_.md#const-int)
* [ints](_number_.md#const-ints)

### Functions

* [between](_number_.md#between)
* [intBetween](_number_.md#intbetween)
* [randomFloatBetween](_number_.md#randomfloatbetween)
* [randomFloatsBetween](_number_.md#randomfloatsbetween)
* [randomIntBetween](_number_.md#randomintbetween)
* [randomIntsBetween](_number_.md#randomintsbetween)
* [unique](_number_.md#unique)

## Variables

### `Let` _unique

• **_unique**: *number* = 0

*Defined in [number.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L3)*

___

### `Const` float

• **float**: *[randomFloatBetween](_number_.md#randomfloatbetween)* =  randomFloatBetween

*Defined in [number.ts:30](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L30)*

___

### `Const` floats

• **floats**: *[randomFloatsBetween](_number_.md#randomfloatsbetween)* =  randomFloatsBetween

*Defined in [number.ts:28](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L28)*

___

### `Const` int

• **int**: *[randomIntBetween](_number_.md#randomintbetween)* =  randomIntBetween

*Defined in [number.ts:19](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L19)*

___

### `Const` ints

• **ints**: *[randomIntsBetween](_number_.md#randomintsbetween)* =  randomIntsBetween

*Defined in [number.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L17)*

## Functions

###  between

▸ **between**(`n`: number, `min`: number, `max`: number): *number*

*Defined in [number.ts:35](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L35)*

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

*Defined in [number.ts:42](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L42)*

Makes sure n is between min and max inclusive and is natural.

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  randomFloatBetween

▸ **randomFloatBetween**(`a`: number, `b`: number): *number*

*Defined in [number.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  randomFloatsBetween

▸ **randomFloatsBetween**(`l`: number, `min`: number, `max`: number): *number[]*

*Defined in [number.ts:25](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L25)*

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

*Defined in [number.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`b` | number |

**Returns:** *number*

___

###  randomIntsBetween

▸ **randomIntsBetween**(`l`: number, `min`: number, `max`: number): *number[]*

*Defined in [number.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`l` | number |
`min` | number |
`max` | number |

**Returns:** *number[]*

___

###  unique

▸ **unique**(`prefix`: string): *string*

*Defined in [number.ts:5](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b6947cf/misc-utils-of-mine-generic/src/number.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`prefix` | string | "_" |

**Returns:** *string*