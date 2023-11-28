export type Result<T> = Partial<{
  count: number;
  previous: string;
  next: string;
  results: T;
}>;

export default Result;
