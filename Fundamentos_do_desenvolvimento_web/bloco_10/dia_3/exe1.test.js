const random = require('./exe1.js');

test('Mock random number', () => {
  random.randomNumber = jest.fn().mockReturnValue(10);
  expect(random.randomNumber()).toBe(10);
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
})
