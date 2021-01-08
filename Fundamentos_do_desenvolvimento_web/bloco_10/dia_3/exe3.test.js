const random = require('./exe1.js');

test('Mockar implementacao', () => {

  const randomNumber = jest.spyOn(random, 'randomNumber');
  randomNumber.mockImplementation((a,b,c) => a*b*c);
  expect(randomNumber(1,2,3)).toBe(6);
  expect(randomNumber).toHaveBeenCalled();

  random.randomNumber.mockReset();

  randomNumber.mockImplementation((a) => 2*a);
  expect(randomNumber(4)).toBe(8);
  expect(random.randomNumber).toHaveBeenCalledTimes(1);
})
