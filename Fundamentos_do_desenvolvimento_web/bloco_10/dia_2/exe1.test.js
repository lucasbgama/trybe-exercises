const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Verifica função uppercase', () => {
  uppercase('abc', string => {
    expect(string).toBe('ABC');
  });
});
