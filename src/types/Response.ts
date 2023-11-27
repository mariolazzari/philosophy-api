interface IResponse<T> {
  count: number;
  previous: string;
  next: string;
  results: T;
  error: string;
}

export type Response<T> = Partial<IResponse<T>>;

export default Response;
