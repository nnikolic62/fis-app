import axios, { type AxiosInstance } from 'axios';

let apiClient: AxiosInstance;

let getToken: (() => string | null) | null = null;

export function setTokenProvider(fn: () => string | null) {
  getToken = fn;
}

export function initApiClient(baseURL: string) {
  apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.request.use(
    (config) => {
      const token = getToken?.();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        window.dispatchEvent(new Event('auth:expired'));
      }
      return Promise.reject(error);
    }
  );

  return apiClient;
}

export function getApiClient(): AxiosInstance {
  if (!apiClient) {
    throw new Error('API client not initialized. Call initApiClient(baseURL) first.');
  }
  return apiClient;
}

export { apiClient };
