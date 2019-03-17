import '..'
test('jest matcher should work', () => {
  expect(1).toMatchType('number')
  expect(1).not.toMatchType('string')
})
