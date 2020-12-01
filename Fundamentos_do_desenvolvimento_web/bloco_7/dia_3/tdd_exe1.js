const assert = require("assert");

const addOne = (arr) => {
  let arrAddOne = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrAddOne.push(arr[i] + 1);
  }
  return arrAddOne;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, "function");
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
