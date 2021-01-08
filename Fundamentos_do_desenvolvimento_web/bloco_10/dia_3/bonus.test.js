const bonus = require('./bonus.js');

describe('Função fetchJoke mockada', () => {
  it('Mockar o resultado', async () => {
    const resolve = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
    const fetch = jest.fn().mockResolvedValue(resolve);
    bonus.fetchJoke = jest.fn().mockImplementation(() => {
      const API_URL = 'https://icanhazdadjoke.com/';

      return fetch(API_URL, { headers: { Accept: 'application/json' } })
        .then((data) => data.joke);
    });
    bonus.fetchJoke();

    expect(bonus.fetchJoke).toHaveBeenCalledTimes(1);
    await expect(bonus.fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
    expect(bonus.fetchJoke).toHaveBeenCalledTimes(2);
  });
});
