const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const getAnimal = name => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals[0]);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const getAnimalByAge = age => (
  new Promise((resolve,reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject('Nenhum animal com essa idade!');

  })
  })
);

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});


describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array de animais', () => {
      expect.assertions(1);
      return getAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
