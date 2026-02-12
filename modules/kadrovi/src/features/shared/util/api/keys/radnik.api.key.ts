import type { PaginationParams } from '@repo/types';
import { Radnik } from '../../../schemas/keRadnik';

/**
 * Query key factory for zapisnik
 * Hierarchical structure for easy invalidation
 */
export const radnikKeys = {
  all: ['radnik'] as const,
  
  //liste
  lists: () => [...radnikKeys.all, 'list'] as const,
  //paginacija
  list: (params: PaginationParams<Radnik>) => [...radnikKeys.lists(), params] as const,
  
  details: () => [...radnikKeys.all, 'detail'] as const,
  detail: (id: number) => [...radnikKeys.details(), id] as const,
  
} as const;