const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce(
    (accumulator, currentValue) =>
      accumulator +
      currentValue
        .split('')
        .reduce(
          (accumulator, currentValue) =>
            accumulator + (currentValue === 'a' || currentValue === 'A'),
          0,
        ),
    0,
  );
}

assert.deepStrictEqual(containsA(), 20);
