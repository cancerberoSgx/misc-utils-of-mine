> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["promise"](_promise_.md) /

# External module: "promise"

## Index

### Classes

* [Deferred](../classes/_promise_.deferred.md)

### Functions

* [serial](_promise_.md#serial)

## Functions

###  serial

▸ **serial**<**T**>(`p`: function[]): *`Promise<T[]>`*

*Defined in [promise.ts:6](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/promise.ts#L6)*

Execute given functions returning promises serially. Returns a promise that resolves when all finish with they results as array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`p` | function[] |

**Returns:** *`Promise<T[]>`*