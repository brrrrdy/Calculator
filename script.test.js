const calculator = require('./calculator');

describe('add', () => {
    test('adds 0 and 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
});