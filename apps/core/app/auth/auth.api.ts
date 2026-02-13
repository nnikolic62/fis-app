import axios from "axios";
import type { AuthResponse, LoginDto } from "./auth.schema";
import { API_ENDPOINTS } from "./endpoints";

const gatewayClient = axios.create({
    baseURL: import.meta.env.VITE_API_GATEWAY,
    headers: { "Content-Type": "application/json" },
});

export const authApi = {
    login: async (credentials: LoginDto): Promise<AuthResponse> => {
        const { data } = await gatewayClient.post(API_ENDPOINTS.login, credentials);
        return data;
    }
}