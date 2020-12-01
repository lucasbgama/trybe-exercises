const assert = require("assert");

function secondThirdSmallest(array) {
  let results = [];
  array.sort(function (x, y) {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
}

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallest, "function");
assert.strictEqual(typeof secondThirdSmallest(parameter), "object");
assert.strictEqual(secondThirdSmallest(parameter).length, 2);
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
