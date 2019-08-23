**[misc-utils-of-mine-generic](../README.md)**

[Globals](../globals.md) › ["time/formatDate"](_time_formatdate_.md)

# External module: "time/formatDate"

## Index

### Functions

* [formatDate](_time_formatdate_.md#formatdate)
* [formatDateTime](_time_formatdate_.md#formatdatetime)
* [timeHash](_time_formatdate_.md#timehash)

## Functions

###  formatDate

▸ **formatDate**(`date`: Date, `format`: "YYYY-MM-DD" | "MM/DD/YYYY"): *string*

*Defined in [time/formatDate.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/29f2b37/misc-utils-of-mine-generic/src/time/formatDate.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DD" \| "MM/DD/YYYY" |

**Returns:** *string*

___

###  formatDateTime

▸ **formatDateTime**(`date`: Date, `format`: "YYYY-MM-DDTHH:MMZ"): *string*

*Defined in [time/formatDate.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/29f2b37/misc-utils-of-mine-generic/src/time/formatDate.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DDTHH:MMZ" |

**Returns:** *string*

___

###  timeHash

▸ **timeHash**(): *string*

*Defined in [time/formatDate.ts:34](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/29f2b37/misc-utils-of-mine-generic/src/time/formatDate.ts#L34)*

shirks Date.now number to 7 digits so is better for filenames. respect date order and  milliseconds

**Returns:** *string*