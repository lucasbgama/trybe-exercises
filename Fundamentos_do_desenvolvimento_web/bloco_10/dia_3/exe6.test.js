const fetchDog = require('./exe6.js');

test('Mockar requisicao', async () => {
  fetchDog.fetchDogPictures = jest.fn();
  fetchDog.fetchDogPictures.mockResolvedValue('request success');
  expect(fetchDog.fetchDogPictures()).resolves.toBe('request success');
  expect(fetchDog.fetchDogPictures).toHaveBeenCalledTimes(1);

  fetchDog.fetchDogPictures.mockRejectedValue('request failed');
  expect(fetchDog.fetchDogPictures()).rejects.toBe('request failed');
  expect(fetchDog.fetchDogPictures).toHaveBeenCalledTimes(2);

})
