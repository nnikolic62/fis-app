import { Radnik } from "../../shared/schemas/keRadnik";
import { getApiClient } from "@repo/api-client";
import { API_ENDPOINTS } from "../../shared/util/api/endpoints";
import { PaginationParams, PaginationResponse } from "@repo/types";

export const prijavaApi = {
    getRadnici: async (params: PaginationParams<Radnik>): Promise<PaginationResponse<Radnik>> => {
        const { data } = await getApiClient().get(API_ENDPOINTS.radnik.list, { params });
        return data;
      },
}