[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["exceptions"](_exceptions_.md)

# Module: "exceptions"

## Index

### Functions

* [checkThrow](_exceptions_.md#checkthrow)
* [checkTruthy](_exceptions_.md#checktruthy)
* [tryTo](_exceptions_.md#tryto)

## Functions

###  checkThrow

▸ **checkThrow**‹**T**›(`r?`: T, `msg`: string): *T*

*Defined in [src/exceptions.ts:3](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cb3d17a/misc-utils-of-mine-generic/src/exceptions.ts#L3)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`r?` | T | - |
`msg` | string | "Throwing on undefined value" |

**Returns:** *T*

___

###  checkTruthy

▸ **checkTruthy**‹**T**›(`r?`: T, `msg`: string): *r is NotFalsy‹T›*

*Defined in [src/exceptions.ts:10](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cb3d17a/misc-utils-of-mine-generic/src/exceptions.ts#L10)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`r?` | T | - |
`msg` | string | "Throwing on undefined value" |

**Returns:** *r is NotFalsy‹T›*

___

###  tryTo

▸ **tryTo**‹**R**, **D**›(`f`: function, `def?`: D): *R | D | undefined*

*Defined in [src/exceptions.ts:21](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/cb3d17a/misc-utils-of-mine-generic/src/exceptions.ts#L21)*

**Type parameters:**

▪ **R**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (...`args`: any[]): *R*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **def**: *D*

**Returns:** *R | D | undefined*
