const fizzBuzz = require('./fizzBuzz.js');

describe('função fizzBuzz', () => {
  it('funciona quando é divisivel por 3 e 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('funciona quando é divisivel por 3 mas não por 5', () => {
    expect(fizzBuzz(3)).toBe('fizz');
  });

  it('funciona quando é divisivel por 5 mas não por 3', () => {
    expect(fizzBuzz(5)).toBe('buzz');
  });

  it('funciona quando não é divisivel por 3 nem por 5', () => {
    expect(fizzBuzz(7)).toBe(7);
  });

  it('funciona quando o parâmetro passado não é um número', () => {
    expect(fizzBuzz('abc')).toBe(false);
  });
})
