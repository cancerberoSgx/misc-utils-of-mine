**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/hash"](_string_hash_.md)

# External module: "string/hash"

## Index

### Variables

* [hash](_string_hash_.md#let-hash)

### Functions

* [hashCode](_string_hash_.md#hashcode)
* [stringToObject](_string_hash_.md#stringtoobject)

## Variables

### `Let` hash

• **hash**: *any*

Defined in string/hash.ts:1

## Functions

###  hashCode

▸ **hashCode**(`s`: string): *number*

Defined in string/hash.ts:2

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *number*

___

###  stringToObject

▸ **stringToObject**(`s`: string, `propSep`: string, `nameValueSep`: string): *any*

Defined in string/hash.ts:12

Transform a string like `foo: 2, bar: hello world` to an object like `{foo: '2', bar: 'hello world'}`

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`s` | string | "" |
`propSep` | string | "," |
`nameValueSep` | string | ":" |

**Returns:** *any*