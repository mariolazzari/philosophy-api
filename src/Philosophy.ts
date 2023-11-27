import { Request, Response, Philosopher, Root } from '.';

export class Philosophy {
  private baseUrl = 'https://philosophyapi.pythonanywhere.com/api';

  // compute endpoit
  private getUrl = ({ url, search, page }: Request): string => {
    let endPoint = `${this.baseUrl}${url}`;

    switch (true) {
      case !!search && !!page:
        endPoint += `?search=${search}&page=${page}`;
        break;

      case !!search && page === undefined:
        endPoint += `?search=${search}`;
        break;

      case search === undefined && !!page:
        endPoint += `?page=${page}`;
        break;
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
    let response: Response<T> = {};

    try {
      const url: string = this.getUrl(req);
      const res = await fetch(url);
      response = await res.json();
    } catch (ex) {
      response.error =
        ex instanceof Error ? ex.message : 'Internal server error';
    } finally {
      return response;
    }
  }

  public async getRoot() {
    const res = await this.fetchData<Root>({ url: '/' });

    return {
      error: res.error,
      results: res,
    };
  }

  public async getPhilosohpers(search: string = '', page: number = 1) {
    const res = await this.fetchData<Philosopher[]>({
      url: '/philosophers',
      search,
      page,
    });

    const philosophers = res.results
      ? res.results.map(this.mapPhilosopher)
      : [];

    return {
      ...res,
      results: philosophers,
    };
  }
}
