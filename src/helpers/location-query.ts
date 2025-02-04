import { LocationQueryValue } from 'vue-router';
import { ProjectFiltersLocationQuery } from '@/models/LocationQuery';
import { ProjectFilters } from '@/models/Project';
import { ProjectDifficulty } from '@/models/ProjectDifficulty';
import { toString } from './string';

function locationQueryValueToNumber(
  queryValue: LocationQueryValue | LocationQueryValue[],
): number {
  if (queryValue === null) return NaN;
  return parseInt(toString(queryValue));
}

function locationQueryValueToArrayNumber(
  queryValue: LocationQueryValue | LocationQueryValue[],
): number[] {
  try {
    if (!queryValue) return [];
    if (!Array.isArray(queryValue)) queryValue = [queryValue];
    return queryValue.map(locationQueryValueToNumber);
  } catch (error) {
    return [];
  }
}

export function locationQueryToProjectFilters(
  query: ProjectFiltersLocationQuery,
): ProjectFilters {
  return {
    title: toString(query.title),
    page: locationQueryValueToNumber(query.page),
    state: locationQueryValueToArrayNumber(query.state),
    supervisors: locationQueryValueToArrayNumber(query.supervisors),
    skills: locationQueryValueToArrayNumber(query.skills),
    difficulty: locationQueryValueToArrayNumber(
      query.difficulty,
    ) as ProjectDifficulty[],
    specialties: locationQueryValueToArrayNumber(query.specialties),
    order: toString(query.order) as ProjectFilters['order'],
    sortBy: toString(query.sortBy) as ProjectFilters['sortBy'],
  };
}

export function projectFiltersToSearchParams(
  filters: ProjectFilters,
): Record<keyof ProjectFilters, string> {
  return {
    title: toString(filters.title),
    page: toString(filters.page),
    state: toString(filters.state),
    supervisors: toString(filters.supervisors),
    skills: toString(filters.skills),
    difficulty: toString(filters.difficulty),
    specialties: toString(filters.specialties),
    order: toString(filters.order),
    sortBy: toString(filters.sortBy),
  };
}
