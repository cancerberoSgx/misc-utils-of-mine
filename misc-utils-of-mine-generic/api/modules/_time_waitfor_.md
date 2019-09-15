**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/waitFor"](_time_waitfor_.md)

# External module: "time/waitFor"

## Index

### Interfaces

* [WaitForPredicateOptions](../interfaces/_time_waitfor_.waitforpredicateoptions.md)

### Functions

* [waitForPredicate](_time_waitfor_.md#waitforpredicate)

### Object literals

* [defaultOptions](_time_waitfor_.md#const-defaultoptions)

## Functions

###  waitForPredicate

▸ **waitForPredicate**<**T**>(`p`: function, `options`: [WaitForPredicateOptions](../interfaces/_time_waitfor_.waitforpredicateoptions.md) | string): *Promise‹T›*

*Defined in [time/waitFor.ts:23](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/time/waitFor.ts#L23)*

Returns a promise that is resolved when given predicate function returns truthy or
timeout (see options). The function is called in given option's [interval](../interfaces/_time_waitfor_.waitforpredicateoptions.md#optional-interval) times.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **p**: *function*

▸ (...`args`: any[]): *T | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **options**: *[WaitForPredicateOptions](../interfaces/_time_waitfor_.waitforpredicateoptions.md) | string*=  { interval: 200, timeout: 3000 }

**Returns:** *Promise‹T›*

## Object literals

### `Const` defaultOptions

### ▪ **defaultOptions**: *object*

*Defined in [time/waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/time/waitFor.ts#L17)*

###  interval

• **interval**: *number* = 200

*Defined in [time/waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/time/waitFor.ts#L17)*

###  timeout

• **timeout**: *number* = 3000

*Defined in [time/waitFor.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/60bba9c/misc-utils-of-mine-generic/src/time/waitFor.ts#L17)*