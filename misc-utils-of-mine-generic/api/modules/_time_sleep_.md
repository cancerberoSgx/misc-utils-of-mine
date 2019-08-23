**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/sleep"](_time_sleep_.md)

# External module: "time/sleep"

## Index

### Variables

* [wait](_time_sleep_.md#const-wait)

### Functions

* [sleep](_time_sleep_.md#sleep)
* [withTime](_time_sleep_.md#withtime)

## Variables

### `Const` wait

• **wait**: *[sleep](_time_sleep_.md#sleep)* =  sleep

Defined in time/sleep.ts:9

## Functions

###  sleep

▸ **sleep**(`ms`: number): *Promise‹void›*

Defined in time/sleep.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *Promise‹void›*

___

###  withTime

▸ **withTime**<**T**>(`label`: string, `fn`: function): *T*

Defined in time/sleep.ts:11

**Type parameters:**

▪ **T**

**Parameters:**

▪ **label**: *string*

▪ **fn**: *function*

▸ (): *T*

**Returns:** *T*