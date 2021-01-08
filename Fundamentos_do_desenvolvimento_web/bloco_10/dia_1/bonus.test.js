const bonus = require('./bonus.js');

describe('testa a função searchEmployee', () => {
  it('Testa se a função está definida', () => {
    expect(bonus.searchEmployee).toBeDefined();
    expect(typeof bonus.searchEmployee).toBe('function');
  });

  it('Verifica se busca informacoes corretamente', () => {
    expect(bonus.searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(bonus.searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(bonus.searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
  });

  it('Teste quando não encontra ID', () => {
    expect(() => bonus.searchEmployee('aaa', 'firstName')).toThrow();
    expect(() => bonus.searchEmployee('aaa', 'firstName')).toThrowError( new Error('ID não identificada') );
  });

  it('Teste quando não existe a informação', () => {
    expect(() => bonus.searchEmployee('8579-6', 'fullName')).toThrow();
    expect(() => bonus.searchEmployee('8579-6', 'fullName')).toThrowError( new Error('Informação indisponível') );
  })
});
