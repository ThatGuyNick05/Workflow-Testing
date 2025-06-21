import { findMax, deduplicate } from '../src/arrayUtils';

describe('arrayUtils.ts', () => {
  test('finds max in array', () => {
    expect(findMax([1, 2, 3, 9, 5])).toBe(9);
    expect(findMax([])).toBeNull();
  });

  test('removes duplicate values from array', () => {
    expect(deduplicate([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });
});
