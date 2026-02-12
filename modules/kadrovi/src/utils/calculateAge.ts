/**
 * Calculates age in years and months from a date string in dd.mm.yyyy format
 * @param dateString - Date string in dd.mm.yyyy format
 * @returns Object with years and months, or null if invalid
 */
export function calculateAge(dateString: string): { years: number; months: number } | null {
  if (!dateString) {
    return null;
  }

  // Parse date in dd.mm.yyyy format
  const parts = dateString.split(".");
  if (parts.length !== 3) {
    return null;
  }

  const day = parseInt(parts[0] ?? "", 10);
  const month = parseInt(parts[1] ?? "", 10) - 1; // Months are 0-indexed
  const year = parseInt(parts[2] ?? "", 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  } else if (months === 0 && today.getDate() < birthDate.getDate()) {
    years--;
    months = 11;
  } else if (today.getDate() < birthDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months = 11;
    }
  }

  return { years, months };
}
