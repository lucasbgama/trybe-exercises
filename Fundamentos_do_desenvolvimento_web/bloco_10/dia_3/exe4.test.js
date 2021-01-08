const funcs = require('./exe4.js');
jest.mock('./exe4.js');

test('Mockar implementacoes', () => {
  funcs.upperCase.mockImplementation((str) => str.toLowerCase());
  expect(funcs.upperCase('AbCd')).toBe('abcd');
  
  funcs.fstLetter.mockImplementation((str) => str.slice(-1));
  expect(funcs.fstLetter('AbCd')).toBe('d');

  funcs.concat.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
  expect(funcs.concat('ab', 'cd', 'ef')).toBe('abcdef');
});
