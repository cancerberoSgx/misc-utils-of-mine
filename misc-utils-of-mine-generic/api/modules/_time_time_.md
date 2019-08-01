> **[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) / ["time/time"](_time_time_.md) /

# External module: "time/time"

## Index

### Variables

* [wait](_time_time_.md#const-wait)

### Functions

* [sleep](_time_time_.md#sleep)
* [withTime](_time_time_.md#withtime)

## Variables

### `Const` wait

• **wait**: *[sleep](_time_time_.md#sleep)* =  sleep

*Defined in [time/time.ts:8](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/time/time.ts#L8)*

## Functions

###  sleep

▸ **sleep**(`ms`: number): *`Promise<void>`*

*Defined in [time/time.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/time/time.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`ms` | number |

**Returns:** *`Promise<void>`*

___

###  withTime

▸ **withTime**<**T**>(`label`: string, `fn`: function): *`T`*

*Defined in [time/time.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/30c5b7f/misc-utils-of-mine-generic/src/time/time.ts#L9)*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **label**: *string*

▪ **fn**: *function*

▸ (): *`T`*

**Returns:** *`T`*