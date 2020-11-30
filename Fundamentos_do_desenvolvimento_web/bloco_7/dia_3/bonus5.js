const assert = require('assert');
const verify = (password) => {
  if (!password) return false;
  if (password.length <= 8) return false;
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  for (index = 0; index < password.length; index += 1) {
    if (password[index] >= '0' && password[index] <= '9') {
      numbers += 1;
    } else if (
      password[index].toUpperCase() === password[index] &&
      password[index].toLowerCase() !== password[index]
    ) {
      uppercase += 1;
    } else if (
      password[index].toUpperCase() !== password[index].toLowerCase()
    ) {
      lowercase += 1;
    }
  }
  if (uppercase * lowercase * numbers === 0) return false;
  return true;
};

let passtest;
let expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'ADdsad12';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'abcdefghi';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'ABCDEFGHI';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = '123456789';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'ABCD12345';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'abcd#%_89';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'ABCD#%_89';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'abcd12345';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'abcdEFGHI';
expected = false;
assert.strictEqual(verify(passtest), expected);
passtest = 'ABCDefgh2';
expected = true;
assert.strictEqual(verify(passtest), expected);
