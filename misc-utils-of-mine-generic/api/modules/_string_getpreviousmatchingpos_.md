**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["string/getPreviousMatchingPos"](_string_getpreviousmatchingpos_.md)

# External module: "string/getPreviousMatchingPos"

## Index

### Functions

* [getPosition](_string_getpreviousmatchingpos_.md#getposition)
* [getPreviousMatchingPos](_string_getpreviousmatchingpos_.md#getpreviousmatchingpos)

## Functions

###  getPosition

▸ **getPosition**(`string`: string, `subString`: string, `n`: number): *number*

*Defined in [string/getPreviousMatchingPos.ts:24](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2aecb20/misc-utils-of-mine-generic/src/string/getPreviousMatchingPos.ts#L24)*

Gets index of n-th match of given substring on given string.

**Parameters:**

Name | Type |
------ | ------ |
`string` | string |
`subString` | string |
`n` | number |

**Returns:** *number*

___

###  getPreviousMatchingPos

▸ **getPreviousMatchingPos**(`text`: string, `pos`: number, `predicate`: string | function): *number*

*Defined in [string/getPreviousMatchingPos.ts:4](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2aecb20/misc-utils-of-mine-generic/src/string/getPreviousMatchingPos.ts#L4)*

Get index of the previous match of given predicate or substring, before given pos, on given text. For the next matching position you can use `String.prototype.findIndexOf` function.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`pos` | number |
`predicate` | string \| function |

**Returns:** *number*