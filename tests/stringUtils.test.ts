import { reverseString, capitalizeFirst } from '../src/stringUtils';

describe('stringUtils.ts', () => {
  test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('capitalizes first letter', () => {
    expect(capitalizeFirst('world')).toBe('World');
    expect(capitalizeFirst('')).toBe('');
  });
});
