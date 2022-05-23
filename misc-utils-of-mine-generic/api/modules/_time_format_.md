[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["time/format"](_time_format_.md)

# Module: "time/format"

## Index

### Functions

* [formatDate](_time_format_.md#formatdate)
* [formatDateTime](_time_format_.md#formatdatetime)
* [formatDateTimeForSql](_time_format_.md#formatdatetimeforsql)
* [timeHash](_time_format_.md#timehash)

## Functions

###  formatDate

▸ **formatDate**(`date`: Date, `format`: "YYYY-MM-DD" | "MM/DD/YYYY"): *string*

*Defined in [src/time/format.ts:1](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/time/format.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DD" &#124; "MM/DD/YYYY" |

**Returns:** *string*

___

###  formatDateTime

▸ **formatDateTime**(`date`: Date, `format`: "YYYY-MM-DDTHH:MMZ"): *string*

*Defined in [src/time/format.ts:22](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/time/format.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`format` | "YYYY-MM-DDTHH:MMZ" |

**Returns:** *string*

___

###  formatDateTimeForSql

▸ **formatDateTimeForSql**(`date`: Date): *any*

*Defined in [src/time/format.ts:33](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/time/format.ts#L33)*

formats date to YYYY-MM-DD HH:mm:ss, compatible with sql dates

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *any*

___

###  timeHash

▸ **timeHash**(`digits`: number): *string*

*Defined in [src/time/format.ts:47](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/4bfc82a/misc-utils-of-mine-generic/src/time/format.ts#L47)*

shirks Date.now number to N digits so is better for filenames. respect date order and  milliseconds

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`digits` | number | 36 |

**Returns:** *string*
