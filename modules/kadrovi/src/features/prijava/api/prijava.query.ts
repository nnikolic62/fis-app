import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { prijavaApi } from './prijava.api';
import type { PaginationParams } from '@repo/types';
import { Radnik } from '../../shared/schemas/keRadnik';
import { sifarniciKeys } from '../../shared/util/api/keys/sifarnici.api.key';
import { KeVera } from '../../shared/schemas/KeVera';
import { KeNacija } from '../../shared/schemas/KeNacija';
import { KeOpstina } from '../../shared/schemas/KeOpstina';
import { KeSlava } from '../../shared/schemas/KeSlava';
import { KeKategorija } from '../../shared/schemas/keKategorija';

const DEFAULT_PARAMS: PaginationParams<Radnik> = {
  page: 1,
  pageSize: 10,
};


export function useGetVere(
  params: Partial<KeVera>,
  options?: Omit<UseQueryOptions<KeVera[], Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: sifarniciKeys.vera,
    queryFn: () => prijavaApi.getSifarniciVera(params),
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
}

export function useGetNacije(
  params: Partial<KeNacija>,
  options?: Omit<UseQueryOptions<KeNacija[], Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: sifarniciKeys.nacija,
    queryFn: () => prijavaApi.getSifarniciNacija(params),
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
}

export function useGetOpstine(
  params: Partial<KeOpstina>,
  options?: Omit<UseQueryOptions<KeOpstina[], Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: sifarniciKeys.opstina,
    queryFn: () => prijavaApi.getSifarniciOpstina(params),
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
}

export function useGetSlave(
  params: Partial<KeSlava>,
  options?: Omit<UseQueryOptions<KeSlava[], Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: sifarniciKeys.slava,
    queryFn: () => prijavaApi.getSifarniciSlava(params),
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
}

export function useGetKategorije(
  params: Partial<KeKategorija>,
  options?: Omit<UseQueryOptions<KeKategorija[], Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: sifarniciKeys.kategorija,
    queryFn: () => prijavaApi.getSifarniciKategorija(params),
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
  });
}
// export function useGetStaz(
//   params: Partial<KeStaz>,
//   options?: Omit<UseQueryOptions<KeStaz[], Error>, 'queryKey' | 'queryFn'>
// ) {
//   return useQuery({
//     queryKey: sifarniciKeys.staz,
//     queryFn: () => prijavaApi.getSifarniciStaz(params),
//     staleTime: Infinity,
// export function useGetRadnici(params: PaginationParams<Radnik>) {
//   const queryParams = { ...DEFAULT_PARAMS, ...params };
//   return useQuery({
//     queryKey: radnikKeys.list(queryParams),
//     queryFn: () => prijavaApi.getRadnici(queryParams),
//   });
// }