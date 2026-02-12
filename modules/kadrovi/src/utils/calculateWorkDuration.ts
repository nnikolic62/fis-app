/**
 * Calculates work duration (years, months, and days) between two dates
 * @param startDate - Start date of employment
 * @param endDate - End date of employment (optional, defaults to current date)
 * @returns Formatted string with years, months, and days (e.g., "3g 5m 12d")
 */
export function calculateWorkDuration(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date();
  const start = new Date(startDate);
  
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();
  
  if (days < 0) {
    months--;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return `${years}g ${months}m ${days}d`;
}
