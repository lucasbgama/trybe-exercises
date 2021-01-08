const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('Repositorios na lista da api', async () => {
  const api = 'https://api.github.com/orgs/tryber/repos';
  const repos = await getRepos(api);
  expect(repos).toContain('sd-01-week4-5-project-todo-list');
  expect(repos).toContain('sd-01-week4-5-project-meme-generator');
});
