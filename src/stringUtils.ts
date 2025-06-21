export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function capitalizeFirst(str: string): string {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}
