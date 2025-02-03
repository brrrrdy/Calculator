const script = require('./script');

// addition

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

// subtract

describe('subtract', () => {
    test('subtracts numbers', () => {
      expect(script.subtract(10, 4)).toBe(6);
    });
  
    test('subtracts negative numbers', () => {
      expect(script.subtract(-10, -4)).toBe(-6);
    });
  
    test('subtracts numbers of mixed parity', () => {
      expect(script.subtract(-8, 7)).toBe(-15);
    });
  });

// sum
  
  describe('sum', () => {
    test('computes the sum of an empty array', () => {
      expect(script.sum([])).toBe(0);
    });
  
    test('computes the sum of an array of one number', () => {
      expect(script.sum([7])).toBe(7);
    });
  
    test('computes the sum of an array of two numbers', () => {
      expect(script.sum([7, 11])).toBe(18);
    });
  
    test('computes the sum of an array of many numbers', () => {
      expect(script.sum([1, 3, 5, 7, 9])).toBe(25);
    });
  });
  
// multiply

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(script.multiply([2, 4])).toBe(8);
    });
  
    test('multiplies several numbers', () => {
      expect(script.multiply([2, 4, 6, 8, 10, 12, 14])).toBe(645120);
    });
  });

// divide

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(script.divide([10, 2])).toBe(5);
    });

  describe('divide several numbers', () => {
    expect(script.divide([20, 3, 4])).toBe(1.6666667);
    });
  });
   
// power
  
  describe('power', () => {
    test('raises one number to the power of another number', () => {
      expect(script.power(4, 3)).toBe(64); // 4 to third power is 64
    });
  
    test('raises one number to the power of a large number', () => {
      expect(script.power(3, 10)).toBe(59049); // 3 to tenth power is 59049
    });
  });

// factorial
  
  describe('factorial', () => {
    test('computes the factorial of 0', () => {
      expect(script.factorial(0)).toBe(1); // 0! = 1
    });
  
    test('computes the factorial of 1', () => {
      expect(script.factorial(1)).toBe(1);
    });
  
    test('computes the factorial of 2', () => {
      expect(script.factorial(2)).toBe(2);
    });
  
    test('computes the factorial of 5', () => {
      expect(script.factorial(5)).toBe(120);
    });
  
    test('computes the factorial of 10', () => {
      expect(script.factorial(10)).toBe(3628800);
    });
  });