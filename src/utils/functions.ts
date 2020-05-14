/**
 * Format date object to YYYY-MM-dd H:i:s.
 * @param date
 * @returns string
 */
export function formatDate(date: Date): string {
  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
}
