[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/encryptLetters"](_string_encryptletters_.md)

# Module: "string/encryptLetters"

## Index

### Interfaces

* [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md)

### Functions

* [decryptLetters](_string_encryptletters_.md#decryptletters)
* [encryptLetters](_string_encryptletters_.md#encryptletters)
* [preconditions](_string_encryptletters_.md#preconditions)

## Functions

###  decryptLetters

▸ **decryptLetters**(`config`: [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md)): *string*

Defined in src/string/encryptLetters.ts:37

returns config.input decrypted digit by digit with given password and universe.
input and password must be contained in universe and have same length.
each number in the password is used to encrypt the corresponding input digit

**Parameters:**

Name | Type |
------ | ------ |
`config` | [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md) |

**Returns:** *string*

___

###  encryptLetters

▸ **encryptLetters**(`config`: [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md)): *string*

Defined in src/string/encryptLetters.ts:14

returns config.input encrypted digit by digit with given password and universe.
input and password must be contained in universe and have same length.
each number in the password is used to encrypt the corresponding input digit

**Parameters:**

Name | Type |
------ | ------ |
`config` | [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md) |

**Returns:** *string*

___

###  preconditions

▸ **preconditions**(`config`: [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md), `inputChar`: string, `inputIndex`: number): *object*

Defined in src/string/encryptLetters.ts:56

**Parameters:**

Name | Type |
------ | ------ |
`config` | [EncryptLettersConfig](../interfaces/_string_encryptletters_.encryptlettersconfig.md) |
`inputChar` | string |
`inputIndex` | number |

**Returns:** *object*

* **delta**: *number*

* **universeIndex**: *number*
