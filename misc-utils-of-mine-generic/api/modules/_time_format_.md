**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/format"](_time_format_.md)

# External module: "time/format"

## Index

### Functions

* [formatDate](_time_format_.md#formatdate)
* [formatDateTime](_time_format_.md#formatdatetime)
* [timeHash](_time_format_.md#timehash)

## Functions

###  formatDate

▸ **formatDate**(`date`: Date, `format`: "YYYY-MM-DD" | "MM/DD/YYYY"): *string*

Defined in time/format.ts:1

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DD" \| "MM/DD/YYYY" |

**Returns:** *string*

___

###  formatDateTime

▸ **formatDateTime**(`date`: Date, `format`: "YYYY-MM-DDTHH:MMZ"): *string*

Defined in time/format.ts:22

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DDTHH:MMZ" |

**Returns:** *string*

___

###  timeHash

▸ **timeHash**(): *string*

Defined in time/format.ts:35

shirks Date.now number to 7 digits so is better for filenames. respect date order and  milliseconds

**Returns:** *string*