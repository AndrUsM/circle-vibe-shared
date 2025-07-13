export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  totalItems: number;
  pageSize: number;
  totalPages: number;
}
