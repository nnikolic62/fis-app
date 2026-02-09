import { useQuery } from '@tanstack/react-query';
import { prijavaApi } from './prijava.api';
import type { PaginationParams } from '@repo/types';
import { Radnik } from '../schemas/radnikSchema';
import { radnikKeys } from '../../shared/util/api/keys/radnik.api.key';

export function useGetRadnici(params: PaginationParams<Radnik>) {
  return useQuery({
    queryKey: radnikKeys.list(params),
    queryFn: () => prijavaApi.getRadnici(params),
  });
}