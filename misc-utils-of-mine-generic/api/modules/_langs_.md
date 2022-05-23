[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["langs"](_langs_.md)

# Module: "langs"

## Index

### Functions

* [escapeSqlValue](_langs_.md#escapesqlvalue)
* [printSQLQuery](_langs_.md#printsqlquery)

## Functions

###  escapeSqlValue

▸ **escapeSqlValue**(`value`: any): *string*

*Defined in [src/langs.ts:17](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/langs.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string*

___

###  printSQLQuery

▸ **printSQLQuery**(`sql`: string, `params`: any[]): *string*

*Defined in [src/langs.ts:9](https://github.com/cancerberoSgx/misc-utils-of-mine/blob/5e76898/misc-utils-of-mine-generic/src/langs.ts#L9)*

when executing sql queries on we often invoke
`await query('select foo from bar where userId=?', [userId])`
Use this function when you have lots of parameters to generate an executable query ready to debug
(joins/escapes params into the sql string). Supports strings, numbers lists and dates

**Parameters:**

Name | Type |
------ | ------ |
`sql` | string |
`params` | any[] |

**Returns:** *string*
