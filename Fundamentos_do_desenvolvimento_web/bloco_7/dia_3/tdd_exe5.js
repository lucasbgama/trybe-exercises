const assert = require("assert");
const greetPeople = (people) => {
  let greeting = "Hello ";
  let greetings = [];
  for (const person in people) {
    greetings.push(`${greeting}${people[person]}`);
  }
  return greetings;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];
assert.strictEqual(typeof greetPeople(parameter), "object");
assert.deepStrictEqual(greetPeople(parameter), result);
