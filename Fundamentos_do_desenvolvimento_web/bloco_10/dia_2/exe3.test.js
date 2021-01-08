const users = {
4: { name: 'Mark' },
5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

test('Usuario existente deve ser encontrado', async () => {
  const user = await getUserName(4);
  expect(user).toBe('Mark');
});

test('Usuario inexistente - erro', async () => {
  try {
    const user = await getUserName(7);
  } catch(error) {
    expect(error).toEqual({error: 'User with 7 not found.'});
  }
})
