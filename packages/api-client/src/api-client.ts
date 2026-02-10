import axios, { type AxiosInstance } from 'axios';

let apiClient: AxiosInstance;

export function initApiClient(baseURL: string) {
  apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
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
