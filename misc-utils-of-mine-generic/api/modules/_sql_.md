[misc-utils-of-mine-generic](../README.md) › [Globals](../globals.md) › ["sql"](_sql_.md)

# Module: "sql"

## Index

### Type aliases

* [MapSqlParams](_sql_.md#mapsqlparams)

### Functions

* [escapeSQLValue](_sql_.md#escapesqlvalue)
* [mapToArraySQLConvert](_sql_.md#maptoarraysqlconvert)
* [printSQLMapQuery](_sql_.md#printsqlmapquery)
* [printSQLQuery](_sql_.md#printsqlquery)

## Type aliases

###  MapSqlParams

Ƭ **MapSqlParams**: *object*

Defined in src/sql.ts:29

#### Type declaration:

* \[ **k**: *string*\]: any

## Functions

###  escapeSQLValue

▸ **escapeSQLValue**(`value`: any): *string*

Defined in src/sql.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string*

___

###  mapToArraySQLConvert

▸ **mapToArraySQLConvert**(`sql`: string, `params`: [MapSqlParams](_sql_.md#mapsqlparams)): *object*

Defined in src/sql.ts:43

utility to convert from map syntax like
{sql: 'select n from p where a=:id', params: {id: 123}}
to common query array syntax like
{sql: 'select n from p where a=?', params: [123]} which is what normally sql drivers support

**Parameters:**

Name | Type |
------ | ------ |
`sql` | string |
`params` | [MapSqlParams](_sql_.md#mapsqlparams) |

**Returns:** *object*

* **params**: *any[]*

* **sql**: *string*

___

###  printSQLMapQuery

▸ **printSQLMapQuery**(`sql`: string, `mapParams`: [MapSqlParams](_sql_.md#mapsqlparams)): *string*

Defined in src/sql.ts:33

**Parameters:**

Name | Type |
------ | ------ |
`sql` | string |
`mapParams` | [MapSqlParams](_sql_.md#mapsqlparams) |

**Returns:** *string*

___

###  printSQLQuery

▸ **printSQLQuery**(`sql`: string, `params`: any[]): *string*

Defined in src/sql.ts:9

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
