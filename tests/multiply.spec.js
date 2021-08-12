const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  // Our tests will be added here.
  test('should multiply two positive integers correctly', () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });

  test('should multiply negative and positive numbers correctly', () => {
    const result = multiply(-2, 3);
    expect(result).toBe(-6);
  });

  test('should return 0 when multiplying by 0', () => {
    const result = multiply(0, 3);
    expect(result).toBe(0);
  });
});
