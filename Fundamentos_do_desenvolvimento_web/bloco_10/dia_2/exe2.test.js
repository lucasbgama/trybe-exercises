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

test('Usuario existente deve ser encontrado', () => {
  return getUserName(4).then(user => expect(user).toBe('Mark'));
});

test('Usuario inexistente - erro', () => {
  return getUserName(7).catch(err => expect(err).toEqual({ error: 'User with 7 not found.' }));
})
