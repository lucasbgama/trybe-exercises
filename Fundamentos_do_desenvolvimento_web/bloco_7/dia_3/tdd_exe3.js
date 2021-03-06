const assert = require("assert");

const addAllnumbers = (arr) => {
  let cont = 0;
  for (let i = 0; i < arr.length; i += 1) {
    cont += arr[i];
  }
  return cont;
};
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, "function");
assert.strictEqual(output, expected);
