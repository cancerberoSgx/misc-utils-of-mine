> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["exceptions"](_exceptions_.md) /

# External module: "exceptions"

## Index

### Functions

* [checkThrow](_exceptions_.md#checkthrow)
* [tryTo](_exceptions_.md#tryto)

## Functions

###  checkThrow

▸ **checkThrow**<**T**>(`r?`: [T](), `msg`: string): *`T`*

*Defined in [exceptions.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b63bcad/misc-utils-of-mine-generic/src/exceptions.ts#L1)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`r?` | [T]() | - |
`msg` | string | "Throwing on undefined value" |

**Returns:** *`T`*

___

###  tryTo

▸ **tryTo**<**R**, **D**>(`f`: function, `def?`: [D]()): *`R` | `D` | undefined*

*Defined in [exceptions.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/b63bcad/misc-utils-of-mine-generic/src/exceptions.ts#L8)*

**Type parameters:**

▪ **R**

▪ **D**

**Parameters:**

▪ **f**: *function*

▸ (...`args`: any[]): *`R`*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **def**: *[D]()*

**Returns:** *`R` | `D` | undefined*