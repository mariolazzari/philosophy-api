interface IRequest {
  url: string;
  search: string;
  page: number;
}

export type Request = Partial<IRequest>;

export default Request;
