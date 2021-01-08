const myRemove = require('./myremove.js');

describe('função myremove', () => {
  it('checa resultados', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
    expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
  })

  it('checa se array passado sofre alteracoes', () => {
    const arr = [1,2,3,4];
    myRemove(arr, 3);
    expect(arr).toEqual([1,2,3,4]);
  })

  it('resultado quando elemento passado nao esta no array', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
  })
})
