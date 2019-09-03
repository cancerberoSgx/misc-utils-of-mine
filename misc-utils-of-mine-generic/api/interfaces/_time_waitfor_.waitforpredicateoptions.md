**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/waitFor"](../modules/_time_waitfor_.md) › [WaitForPredicateOptions](_time_waitfor_.waitforpredicateoptions.md)

# Interface: WaitForPredicateOptions

## Hierarchy

* **WaitForPredicateOptions**

## Index

### Properties

* [interval](_time_waitfor_.waitforpredicateoptions.md#optional-interval)
* [timeout](_time_waitfor_.waitforpredicateoptions.md#optional-timeout)
* [timeoutError](_time_waitfor_.waitforpredicateoptions.md#optional-timeouterror)

## Properties

### `Optional` interval

• **interval**? : *undefined | number*

*Defined in [time/waitFor.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2aecb20/misc-utils-of-mine-generic/src/time/waitFor.ts#L9)*

Predicate function call interval.

___

### `Optional` timeout

• **timeout**? : *undefined | number*

*Defined in [time/waitFor.ts:13](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2aecb20/misc-utils-of-mine-generic/src/time/waitFor.ts#L13)*

Timeout. If more time than this passes from [waitForPredicate](../modules/_time_waitfor_.md#waitforpredicate) call, it will throw an error.

___

### `Optional` timeoutError

• **timeoutError**? : *undefined | string*

*Defined in [time/waitFor.ts:14](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/2aecb20/misc-utils-of-mine-generic/src/time/waitFor.ts#L14)*