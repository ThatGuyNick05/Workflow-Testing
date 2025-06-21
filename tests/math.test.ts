import { multiply, isEven } from '../src/math';

describe('math.ts', () => {
  test('multiplies numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test('detects even numbers', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(5)).toBe(false);
  });
});
