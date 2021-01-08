const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('função myRemoveWithoutCopy', () => {
  it('Remove elemento', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).toEqual([1,2,4])
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).not.toEqual([1,2,3,4])
  });

  it('Array passado sofre alteracao', () => {
    const arr = [1,2,3,4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).toEqual([1,2,4]);
  });

  it('Elemento passado não está no array', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 5)).toEqual([1,2,3,4]);
  });
});
