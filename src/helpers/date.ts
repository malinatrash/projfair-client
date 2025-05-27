import { DateTime } from 'luxon';

export function isValidDate(
  dateString: string,
  format = 'yyyy-MM-dd',
): boolean {
  return DateTime.fromFormat(dateString, format).isValid;
}

interface AcademicYear {
  academicYear: () => number;
  isSpring: () => boolean;
  isAutumn: () => boolean;
  disabledAutumnRadioButton: () => boolean;
}

/**
 * Возвращает академический год на основе текущего месяца.
 * Если текущий месяц <= 3 (апрель), возвращает предыдущий год,
 * иначе возвращает текущий год.
 *
 * @param currentMonth - Текущий месяц в виде числа от 0 до 11
 * @returns Академический год в виде числа
 */
export function getAcademicYear(currentMonth: number): AcademicYear {
  const currentYear = new Date(Date.now()).getFullYear();
  return {
    academicYear: () => (currentMonth >= 4 ? currentYear : currentYear - 1), // возвращает академический год
    isSpring: () => currentMonth >= 0 && currentMonth <= 4, // возвращает true, если сейчас весна
    isAutumn: () => currentMonth >= 8 && currentMonth <= 11, // возвращает true, если сейчас осень
    disabledAutumnRadioButton: () => currentMonth <= 3 || currentMonth >= 10, // возвращает true, если сейчас осень
  };
}
