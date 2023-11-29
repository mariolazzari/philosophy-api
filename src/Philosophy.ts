import { Result, Request, Response, Philosopher, Root, Idea, Book } from '.';

export class Philosophy {
  private baseUrl = 'https://philosophyapi.pythonanywhere.com/api';

  // compute endpoit
  private getUrl = ({ url, search, page }: Request): string => {
    let endPoint = `${this.baseUrl}${url}`;

    if (search && page) {
      endPoint += `?search=${search}&page=${page}`;
    } else if (search && !page) {
      endPoint += `?search=${search}`;
    } else if (!search && page) {
      endPoint += `?page=${page}`;
    }

    return endPoint;
  };

  // Philosopher entity refactor
  private mapPhilosopher = (p: Philosopher): Philosopher => ({
    ...p,
    born: new Date(p.born_date),
    dead: new Date(p.death_date),
    schools: p.school,
  });

  // generic fetch
  private async fetchData<T>(req: Request) {
    try {
      const url: string = this.getUrl(req);
      const res = await fetch(url);
      if (!res.ok) {
        return res.statusText;
      }
      const data: T = await res.json();

      return data;
    } catch (ex) {
      if (ex instanceof Error) {
        return ex.message;
      }
      return 'Internal server error';
    }
  }

  // handle single entity response
  private getEntityResponse<T>(data: T | string) {
    const res: Response<T> = {};

    if (typeof data === 'string') {
      res.error = data;
    } else {
      res.data = {
        count: 1,
        results: data,
      };
    }

    return res;
  }

  // handle full  response
  private getResponse<T>(data: string | Result<T>) {
    const res: Response<T> = {};

    if (typeof data === 'string') {
      res.error = data;
    } else {
      res.data = data;
    }

    return res;
  }

  public async getRoot() {
    const data = await this.fetchData<Root>({ url: '/' });
    const res = this.getEntityResponse<Root>(data);

    return res;
  }

  // philosopher
  public async getPhilosohpers(search: string = '', page: number = 1) {
    const data = await this.fetchData<Result<Philosopher[]>>({
      url: '/philosophers',
      search,
      page,
    });
    const res = this.getResponse<Philosopher[]>(data);

    // refact philosophers collection with dates
    if (res.data && res.data.results) {
      const philos: Philosopher[] = res.data.results
        ? res.data.results.map(this.mapPhilosopher)
        : [];

      res.data.results = philos;
    }

    return res;
  }

  public async getPhilosopher(id: number) {
    const data = await this.fetchData<Philosopher>({
      url: `/philosophers/${id}`,
    });

    return this.getEntityResponse<Philosopher>(data);
  }

  // ideas
  public async getIdeas(search: string = '', page: number = 1) {
    const data = await this.fetchData<Result<Idea[]>>({
      url: '/ideas',
      search,
      page,
    });

    return this.getResponse<Idea[]>(data);
  }

  public async getIdea(id: number) {
    const data = await this.fetchData<Idea>({
      url: `/ideas/${id}`,
    });

    return this.getEntityResponse<Idea>(data);
  }

  // books
  public async getBooks(search: string = '', page: number = 1) {
    const data = await this.fetchData<Result<Book[]>>({
      url: '/books',
      search,
      page,
    });

    return this.getResponse<Book[]>(data);
  }

  public async getBook(id: number) {
    const data = await this.fetchData<Book>({
      url: `/books/${id}`,
    });

    return this.getEntityResponse<Book>(data);
  }

  // schools
}
