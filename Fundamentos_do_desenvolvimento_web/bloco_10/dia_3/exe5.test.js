const funcs = require('./exe4.js');

test('Mockar e restaurar funcão', () => {
  const upperCase = jest.spyOn(funcs, 'upperCase');
  upperCase.mockImplementation(str => str.toLowerCase());

  expect(funcs.upperCase('AbCd')).toBe('abcd');
  expect(upperCase).toHaveBeenCalled();
  upperCase.mockRestore();

  expect(funcs.upperCase('AbCd')).toBe('ABCD');
  expect(upperCase).toHaveBeenCalledTimes(0);
})
