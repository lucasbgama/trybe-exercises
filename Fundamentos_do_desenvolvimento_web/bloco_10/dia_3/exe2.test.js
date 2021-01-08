const random = require('./exe1.js');

test('Mockar implementação', () => {
  random.randomNumber = jest.fn().mockImplementationOnce((a,b) => a/b);
  expect(random.randomNumber(6,2)).toBe(3);
  expect(random.randomNumber(6,2)).toBe(undefined);
  expect(random.randomNumber).toHaveBeenCalledTimes(2);
});
