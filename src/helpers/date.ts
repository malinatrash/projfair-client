import { DateTime } from 'luxon';

export function isValidDate(
  dateString: string,
  format = 'yyyy-MM-dd',
): boolean {
  return DateTime.fromFormat(dateString, format).isValid;
}

/**
 * Возвращает академический год на основе текущего месяца.
 * Если текущий месяц <= 3 (апрель), возвращает предыдущий год,
 * иначе возвращает текущий год.
 *
 * @param currentMonth - Текущий месяц в виде числа от 0 до 11
 * @returns Академический год в виде числа
 */
export function getAcademicYear(currentMonth: number): number {
  const currentYear = new Date(Date.now()).getFullYear();
  return currentMonth <= 3 ? currentYear - 1 : currentYear;
}
