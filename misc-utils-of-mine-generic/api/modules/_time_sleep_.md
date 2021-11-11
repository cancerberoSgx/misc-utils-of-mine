[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["time/sleep"](_time_sleep_.md)

# Module: "time/sleep"

## Index

### Variables

* [wait](_time_sleep_.md#const-wait)

### Functions

* [blockFor](_time_sleep_.md#blockfor)
* [sleep](_time_sleep_.md#sleep)
* [withTime](_time_sleep_.md#withtime)

## Variables

### `Const` wait

• **wait**: *[sleep](_time_sleep_.md#sleep)* = sleep

Defined in src/time/sleep.ts:9

## Functions

###  blockFor

▸ **blockFor**(`ms`: number): *void*

Defined in src/time/sleep.ts:19

blocks the thread for given ms. For testing purposes.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`ms` | number | 1000 |

**Returns:** *void*

___

###  sleep

▸ **sleep**(`ms`: number): *Promise‹void›*

Defined in src/time/sleep.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹void›*

___

###  withTime

▸ **withTime**‹**T**›(`label`: string, `fn`: function): *T*

Defined in src/time/sleep.ts:11

**Type parameters:**

▪ **T**

**Parameters:**

▪ **label**: *string*

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*
