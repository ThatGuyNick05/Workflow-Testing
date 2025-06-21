export function findMax(numbers: number[]): number | null {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

export function deduplicate<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
