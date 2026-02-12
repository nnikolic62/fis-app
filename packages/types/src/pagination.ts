export type PaginationParams<T> = {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    filters?: T;
  }

export type PaginationResponse<T> = {
    data: T[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  }