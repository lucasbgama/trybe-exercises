const encdec = require('./encdec');

describe('Função encode e decode', () => {
  it('são funções', () => {
    expect(typeof encdec.encode).toBe('function');
    expect(typeof encdec.decode).toBe('function');
  });

  it('encode vogais', () => {
    expect(encdec.encode('a')).toBe('1');
    expect(encdec.encode('e')).toBe('2');
    expect(encdec.encode('i')).toBe('3');
    expect(encdec.encode('o')).toBe('4');
    expect(encdec.encode('u')).toBe('5');
  });

  it('decode 1,2,3,4,5', () => {
    expect(encdec.decode('1')).toBe('a');
    expect(encdec.decode('2')).toBe('e');
    expect(encdec.decode('3')).toBe('i');
    expect(encdec.decode('4')).toBe('o');
    expect(encdec.decode('5')).toBe('u');
  });

  const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const vogais = 'aeiou'.split('');

  it('testa se demais letras não são convertidas', () => {
    for (let i = 0; i < letras.length; i += 1) {
      if (!vogais.includes(letras[i])) {
        expect(encdec.encode(letras[i])).toBe(letras[i]);
      }
    }
  });

  const numeros = '0123456789'.split('');
  const nv = '12345'.split('');
  it('testa se demais numeros não são convertidos', () => {
    for (let i = 0; i < numeros.length; i += 1) {
      if (!nv.includes(numeros[i])) {
        expect(encdec.decode(numeros[i])).toBe(numeros[i]);
      }
    }
  });

  it('testa tamanho da string retornada', () => {
    expect(encdec.encode('ad21052nfs').length).toBe(10);
    expect(encdec.decode('ad21052nfs').length).toBe(10);
  })
});
