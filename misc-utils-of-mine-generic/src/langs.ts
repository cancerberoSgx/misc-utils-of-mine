// misc utilities when working with particular programming languages

import { formatDateTimeForSql, quote } from '.';

/** when executing sql queries on we often invoke 
 * `await query('select foo from bar where userId=?', [userId])` 
 * Use this function when you have lots of parameters to generate an executable query ready to debug 
 * (joins/escapes params into the sql string). Supports strings, numbers lists and dates */
export function printSQLQuery(sql: string, params: any[]) {
  let counter = 0
  return sql
    .replace(/(\?)/g, (txt, key) => {
      return escapeSqlValue(params[counter++])
    });
}

export function escapeSqlValue(value: any): string {
  if (typeof value === 'string') {
    return `${quote(value, '"')}`
  } else if (value instanceof Date) {
    return formatDateTimeForSql(value)
  } else if (Array.isArray(value)) {
    return value.map(escapeSqlValue).join(',')
  } else {
    return `${value}`
  }
}
