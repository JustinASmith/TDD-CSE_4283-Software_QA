const {
  getRandomInt
} = require('./app');

test('getRandomInt returns a random integer between 0 and 10', () => {
  const randomInt = getRandomInt(10);
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThanOrEqual(10);
});

test('getRandomInt returns a random integer between 0 and 100', () => {
  const randomInt = getRandomInt(100);
  expect(randomInt).toBeGreaterThanOrEqual(0);
  expect(randomInt).toBeLessThanOrEqual(100);
});