import { Result } from './Result';

export type Response<T> = Partial<{
  data: Result<T>;
  error: string;
}>;
