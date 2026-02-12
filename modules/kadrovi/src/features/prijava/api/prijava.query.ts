import { useQuery } from '@tanstack/react-query';
import { prijavaApi } from './prijava.api';
import type { PaginationParams } from '@repo/types';
import { Radnik } from '../../shared/schemas/keRadnik';
import { radnikKeys } from '../../shared/util/api/keys/radnik.api.key';

const DEFAULT_PARAMS: PaginationParams<Radnik> = {
  page: 1,
  pageSize: 10,
};

export function useGetRadnici(params: PaginationParams<Radnik>) {
  const queryParams = { ...DEFAULT_PARAMS, ...params };
  return useQuery({
    queryKey: radnikKeys.list(queryParams),
    queryFn: () => prijavaApi.getRadnici(queryParams),
  });
}