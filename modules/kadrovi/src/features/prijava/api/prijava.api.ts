import { Radnik } from "../../shared/schemas/keRadnik";
import { getApiClient } from "@repo/api-client";
import { API_ENDPOINTS } from "../../shared/util/api/endpoints";
import { KeVera } from "../../shared/schemas/KeVera";
import { KeStaz } from "../../shared/schemas/KeStaz";
import { KeSprema } from "../../shared/schemas/KeSprema";
import { KeOpstina } from "../../shared/schemas/KeOpstina";
import { KeNacija } from "../../shared/schemas/KeNacija";
import { KeKategorija } from "../../shared/schemas/keKategorija";
import { createListApi } from "@repo/api-client/create-list-api";
import { createPaginatedListApi } from "@repo/api-client/create-list-api";
import { KeSlava } from "../../shared/schemas/KeSlava";

export const prijavaApi = {
  
  
  // ========== SIFARNICI ==========
  getRadnici: createPaginatedListApi<Radnik>(API_ENDPOINTS.radnik.list),

  getSifarniciVera: createListApi<KeVera>(API_ENDPOINTS.sifarnici.vera),
  getSifarniciStaz: createListApi<KeStaz>(API_ENDPOINTS.sifarnici.staz),
  getSifarniciSprema: createListApi<KeSprema>(API_ENDPOINTS.sifarnici.sprema),
  getSifarniciOpstina: createListApi<KeOpstina>(API_ENDPOINTS.sifarnici.opstina),
  getSifarniciNacija: createListApi<KeNacija>(API_ENDPOINTS.sifarnici.nacija),
  getSifarniciKategorija: createListApi<KeKategorija>(API_ENDPOINTS.sifarnici.kategorija),
  getSifarniciSlava: createListApi<KeSlava>(API_ENDPOINTS.sifarnici.slava),
} as const;

// export const prijavaApi = {
//   getRadnici: async (params: PaginationParams<Radnik>): Promise<PaginationResponse<Radnik>> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.radnik.list, { params });
//     return data;
//   },
//   getSifarniciVera: async (): Promise<KeVera[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.vera);
//     return data;
//   },
//   getSifarniciStaz: async (): Promise<KeStaz[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.staz);
//     return data;
//   },
//   getSifarniciSprema: async (): Promise<KeSprema[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.sprema);
//     return data;
//   },
//   getSifarniciOpstina: async (): Promise<KeOpstina[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.opstina);
//     return data;
//   },
//   getSifarniciNacija: async (): Promise<KeNacija[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.nacija);
//     return data;
//   },
//   getSifarniciKategorija: async (): Promise<KeKategorija[]> => {
//     const { data } = await getApiClient().get(API_ENDPOINTS.sifarnici.kategorija);
//     return data;
//   },
// }