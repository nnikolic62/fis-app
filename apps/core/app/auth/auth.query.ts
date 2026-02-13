import { useMutation, type UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import type { AuthResponse, LoginDto } from "./auth.schema";

export function useLogin(
    options?: UseMutationOptions<AuthResponse, Error, LoginDto>
  ) {
  
    return useMutation({
      mutationFn: (credentials: LoginDto) => authApi.login(credentials),  
      ...options,
    });
  }