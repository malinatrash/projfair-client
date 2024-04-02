import { Department } from './Department';
import { Institute } from './Institute';
import { Tag } from './Tag';

export const enum SpecialtyCourse {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5,
}

export const enum SpecialtyPriority {
  High = 1,
  Low = 2,
}

export const SpecialtyName: Record<SpecialtyCourse, string> = {
  [SpecialtyCourse.First]: '1 курс',
  [SpecialtyCourse.Second]: '2 курс',
  [SpecialtyCourse.Third]: '3 курс',
  [SpecialtyCourse.Fourth]: '4 курс',
  [SpecialtyCourse.Fifth]: '5 курс',
};

export interface Specialty<T = number> extends Tag<T> {
  institute: Institute | null;
  department: Department | null;
}

export interface SelectedSpecialty<T = number> extends Tag<T> {
  specialty_id: number;
  course: SpecialtyCourse;
  priority?: number;
}

export interface SpecialtyGroup {
  id: number;
  course: SpecialtyCourse;
  priority: SpecialtyPriority;
  speciality: Specialty;
}
