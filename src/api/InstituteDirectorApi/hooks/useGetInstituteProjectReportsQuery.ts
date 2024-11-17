import { UseQueryOptions, useQuery } from 'vue-query';
import { instituteDirectorApi } from '../';
import { DEFAULT_QUERY_STALE_TIME } from '../../baseKy';
import InstituteDirectorApiType from '../InstituteDirectorApiType';

type TQueryFnData = Awaited<
  ReturnType<InstituteDirectorApiType['getInstituteProjectReports']>
>;

export type UseGetInstituteProjectReportsQueryOptions<T = TQueryFnData> =
  UseQueryOptions<
    TQueryFnData,
    unknown,
    T,
    typeof USE_GET_INSTITUTE_PROJECT_REPORTS_QUERY_KEY
  >;

export const USE_GET_INSTITUTE_PROJECT_REPORTS_QUERY_KEY =
  'USE_GET_INSTITUTE_PROJECT_REPORTS_QUERY_KEY';

export const useGetInstituteProjectReportsQuery = <T = TQueryFnData>(
  options?: UseGetInstituteProjectReportsQueryOptions<T>,
) =>
  useQuery(
    USE_GET_INSTITUTE_PROJECT_REPORTS_QUERY_KEY,
    () => instituteDirectorApi.getInstituteProjectReports(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
