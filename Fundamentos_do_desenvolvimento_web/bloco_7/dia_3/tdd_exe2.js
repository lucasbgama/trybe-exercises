const assert = require("assert");

const wordLengths = (arr) => {
  let arrWordLengths = [];
  for (let i = 0; i < arr.length; i += 1) {
    arrWordLengths.push(arr[i].length);
  }
  return arrWordLengths;
};

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
