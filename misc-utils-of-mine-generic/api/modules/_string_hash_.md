[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["string/hash"](_string_hash_.md)

# Module: "string/hash"

## Index

### Functions

* [hashCode](_string_hash_.md#hashcode)

## Functions

###  hashCode

▸ **hashCode**(`s`: string): *number*

*Defined in [src/string/hash.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/c4ab38d/misc-utils-of-mine-generic/src/string/hash.ts#L16)*

Returns a hash code for a string.
(Compatible to Java's String.hashCode())

The hash code for a string object is computed as
    `s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]`
using number arithmetic, where s[i] is the i th character
of the given string, n is the length of the string,
and ^ indicates exponentiation.
(The hash value of the empty string is zero.)

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`s` | string | a string |

**Returns:** *number*

a hash code value for the given string.
