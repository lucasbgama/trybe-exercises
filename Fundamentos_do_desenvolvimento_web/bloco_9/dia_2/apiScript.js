const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => appendJoke(data.joke));
};

window.onload = () => fetchJoke();

//Exercicios 2-5
const promise = new Promise((resolve, reject) => {
  const randomNumbers = Array(10)
    .fill(0)
    .map((number) => 1 + Math.floor(Math.random() * 51));
  const randomSquare = randomNumbers.map((number) => Math.pow(number, 2));
  const squareSum = randomSquare.reduce((acc, curr) => acc + curr);
  const succeed = squareSum < 8000;

  if (!succeed) {
    return reject(`É mais de oito mil! Essa promise deve estar quebrada!`);
  }
  resolve(squareSum);
})
  .then((sum) => [2, 3, 5, 10].map((div) => sum / div))
  .then((arr) => arr.reduce((acc, curr) => acc + curr))
  .then((sum) => console.log(sum))
  .catch((err) => console.log(err));

//Com async e await

function sumSquareRandom() {
  const randomNumbers = Array(10)
    .fill(0)
    .map((number) => 1 + Math.floor(Math.random() * 51));
  const randomSquare = randomNumbers.map((number) => Math.pow(number, 2));
  const squareSum = randomSquare.reduce((acc, curr) => acc + curr);
  const succeed = squareSum < 8000;
  if (succeed) {
    return squareSum;
  } else {
    throw new Error(`É mais de oito mil! Essa promise deve estar quebrada!`);
  }
}

async function log() {
  try {
    const resp = await sumSquareRandom();
    const sumArr = [2, 3, 5, 10].map((div) => resp / div);
    const sum = sumArr.reduce((acc, curr) => acc + curr);
    console.log(sum);
  } catch (e) {
    console.log(e.message);
  }
}
log();
