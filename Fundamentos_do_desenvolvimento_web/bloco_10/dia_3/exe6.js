const fetch = require("node-fetch");

const fetchDogPictures = () => {
  const api = 'https://dog.ceo/api/breeds/image/random';
  try {
    fetch(api).then(resp => resp.json().then(data => console.log(data)));
  } catch(error) {
    throw new Error('Não foi possível fazer a requisição.')
  }
}

module.exports = { fetchDogPictures };
