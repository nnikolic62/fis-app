import { getApiClient } from "./api-client";
import { PaginationParams } from "@repo/types";
import { PaginationResponse } from "@repo/types";

export function createListApi<T>(endpoint: string) {
  return async(params: Partial<T>): Promise<T[]> => {
    const { data } = await getApiClient().post(endpoint, { params });
    return data;
  }
}

export function createPaginatedListApi<T>(endpoint: string) {
  return async (params: PaginationParams<T>): Promise<PaginationResponse<T>> => {
    const { data } = await getApiClient().get(endpoint, { params });
    return data;
  }
}