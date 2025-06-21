import { add } from '../src/index';

describe('index.ts', () => {
  test('adds positive numbers correctly', () => {
    expect(add(3, 7)).toBe(10);
  });

  test('adds negative numbers correctly', () => {
    expect(add(-5, -6)).toBe(-11);
  });
});
