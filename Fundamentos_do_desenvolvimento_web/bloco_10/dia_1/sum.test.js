const sum = (a, b) => {
  if(typeof(a+b) !== 'number') {
    throw new Error('parameters must be numbers')
  }
  return a + b;
}

test('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0,0)).toBe(0);
  expect(() => sum(4,'5')).toThrow();
  expect(() => sum(4,'5')).toThrowError(new Error('parameters must be numbers'));
});
