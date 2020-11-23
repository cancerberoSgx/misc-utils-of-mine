[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["numberNormalization"](_numbernormalization_.md)

# Module: "numberNormalization"

## Index

### Interfaces

* [Normalizer](../interfaces/_numbernormalization_.normalizer.md)

### Variables

* [digitLength](_numbernormalization_.md#const-digitlength)

### Functions

* [ConvertBase](_numbernormalization_.md#convertbase)
* [bin2dec](_numbernormalization_.md#bin2dec)
* [bin2dec_](_numbernormalization_.md#bin2dec_)
* [dec2bin](_numbernormalization_.md#dec2bin)
* [dec2bin_](_numbernormalization_.md#dec2bin_)
* [string2array](_numbernormalization_.md#string2array)

### Object literals

* [binaryDigitNormalizer](_numbernormalization_.md#const-binarydigitnormalizer)
* [binaryStraightNormalizer](_numbernormalization_.md#const-binarystraightnormalizer)
* [decimalDigitNormalizer](_numbernormalization_.md#const-decimaldigitnormalizer)

## Variables

### `Const` digitLength

• **digitLength**: *number* = dec2bin(9).length

Defined in src/numberNormalization.ts:34

## Functions

###  ConvertBase

▸ **ConvertBase**(`num`: any): *object*

Defined in src/numberNormalization.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`num` | any |

**Returns:** *object*

* **from**(`baseFrom`: any): *object*

  * **to**(`baseTo`: number): *string*

___

###  bin2dec

▸ **bin2dec**(`number`: any[]): *number*

Defined in src/numberNormalization.ts:102

**Parameters:**

Name | Type |
------ | ------ |
`number` | any[] |

**Returns:** *number*

___

###  bin2dec_

▸ **bin2dec_**(`num`: any): *string*

Defined in src/numberNormalization.ts:76

**Parameters:**

Name | Type |
------ | ------ |
`num` | any |

**Returns:** *string*

___

###  dec2bin

▸ **dec2bin**(`number`: number, `arrayLength?`: undefined | number): *number[]*

Defined in src/numberNormalization.ts:89

**Parameters:**

Name | Type |
------ | ------ |
`number` | number |
`arrayLength?` | undefined &#124; number |

**Returns:** *number[]*

___

###  dec2bin_

▸ **dec2bin_**(`num`: any): *string*

Defined in src/numberNormalization.ts:79

**Parameters:**

Name | Type |
------ | ------ |
`num` | any |

**Returns:** *string*

___

###  string2array

▸ **string2array**(`s`: string): *number[]*

Defined in src/numberNormalization.ts:82

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *number[]*

## Object literals

### `Const` binaryDigitNormalizer

### ▪ **binaryDigitNormalizer**: *object*

Defined in src/numberNormalization.ts:35

###  decode

▸ **decode**(`input`: number[]): *number*

Defined in src/numberNormalization.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`input` | number[] |

**Returns:** *number*

###  encode

▸ **encode**(`a`: number, `inputSize?`: undefined | number): *number[]*

Defined in src/numberNormalization.ts:36

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`inputSize?` | undefined &#124; number |

**Returns:** *number[]*

___

### `Const` binaryStraightNormalizer

### ▪ **binaryStraightNormalizer**: *object*

Defined in src/numberNormalization.ts:20

###  decode

▸ **decode**(`a`: number[]): *number*

Defined in src/numberNormalization.ts:29

**Parameters:**

Name | Type |
------ | ------ |
`a` | number[] |

**Returns:** *number*

###  encode

▸ **encode**(`a`: number, `inputSize?`: undefined | number): *number[]*

Defined in src/numberNormalization.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`a` | number |
`inputSize?` | undefined &#124; number |

**Returns:** *number[]*

___

### `Const` decimalDigitNormalizer

### ▪ **decimalDigitNormalizer**: *object*

Defined in src/numberNormalization.ts:49

###  decode

▸ **decode**(`digits`: number[]): *number*

Defined in src/numberNormalization.ts:60

**Parameters:**

Name | Type |
------ | ------ |
`digits` | number[] |

**Returns:** *number*

###  encode

▸ **encode**(`n`: number, `length?`: undefined | number): *number[]*

Defined in src/numberNormalization.ts:50

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`length?` | undefined &#124; number |

**Returns:** *number[]*
