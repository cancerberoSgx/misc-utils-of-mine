import { printSQLQuery } from '../langs'

describe('langs', () => {
  it('printSQLQuery', () => {
    const sql = 'select id from users where userId=? and name=? and interest in (?)'
    const params = [12, 'seba', [0, 9, 8]]
    const result = printSQLQuery(sql, params)
    expect(result).toBe('select id from users where userId=12 and name="seba" and interest in (0,9,8)')
  })
})
