[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["time/nextTime"](_time_nexttime_.md)

# Module: "time/nextTime"

## Index

### Interfaces

* [NextTimeConfig](../interfaces/_time_nexttime_.nexttimeconfig.md)

### Functions

* [nextTime](_time_nexttime_.md#nexttime)

## Functions

###  nextTime

▸ **nextTime**(`config`: [NextTimeConfig](../interfaces/_time_nexttime_.nexttimeconfig.md)): *Date*

*Defined in [src/time/nextTime.ts:16](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4ff3641/misc-utils-of-mine-generic/src/time/nextTime.ts#L16)*

It partitions the time line in `config.step` milliseconds and get's the next time interval start time from given date.
Useful to schedule tasks or expire stuff, like, "give me the next weekly day"

**Parameters:**

Name | Type |
------ | ------ |
`config` | [NextTimeConfig](../interfaces/_time_nexttime_.nexttimeconfig.md) |

**Returns:** *Date*
