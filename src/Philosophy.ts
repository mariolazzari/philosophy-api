import { Request, Response, Philosopher, Root, Idea } from '.';
import Result from './types/Result';

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

  public async getRoot() {
    const data = await this.fetchData<Root>({ url: '/' });
    const res: Response<Root> = {};

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

  public async getPhilosohpers(search: string = '', page: number = 1) {
    const data = await this.fetchData<Result<Philosopher[]>>({
      url: '/philosophers',
      search,
      page,
    });
    const res: Response<Philosopher[]> = {};

    if (typeof data === 'string') {
      res.error = data;
    } else {
      const philos: Philosopher[] = data.results
        ? data.results.map(this.mapPhilosopher)
        : [];

      res.data = {
        ...data,
        results: philos,
      };
    }

    return res;
  }

  public async getPhilosopher(id: number) {
    const data = await this.fetchData<Philosopher>({
      url: `/philosophers/${id}`,
    });
    const res: Response<Philosopher> = {};

    if (typeof data === 'string') {
      res.error = data;
    } else {
      const philo = this.mapPhilosopher(data);
      res.data = {
        count: 1,
        results: philo,
      };
    }

    return res;
  }

  public async getIdeas(search: string = '', page: number = 1) {
    const data = await this.fetchData<Result<Idea[]>>({
      url: '/ideas',
      search,
      page,
    });
    const res: Response<Idea[]> = {};

    if (typeof data === 'string') {
      res.error = data;
    } else {
      res.data = data;
    }

    return res;
  }

  public async getIdea(id: number) {
    const data = await this.fetchData<Idea>({
      url: `/ideas/${id}`,
    });
    const res: Response<Idea> = {};

    console.log(data);

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
}
