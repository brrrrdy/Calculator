const script = require('./script');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(script.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(script.add(2, 2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(script.add(2, 6)).toBe(8);
  });
});

