export type Response<T> = {
  count: number;
  previous: string;
  next: string;
  data: T;
  error: string;
};
