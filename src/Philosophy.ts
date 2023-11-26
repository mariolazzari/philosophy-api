import { Request, Response, Philosopher, Root } from '.';

export class Philosophy {
  private baseUrl = 'https://philosophyapi.pythonanywhere.com/api';

  private async fetchData(reqquest: Request) {
    const response: Response = {
      
    };

    try {
    } catch (ex) {
    } finally {
    }
  }

  public async getInfo() {
    const res = await fetch(this.baseUrl);
    const data = ((await res.json()) as unknown) as Root;

    return data;
  }

  public async getPhilosohpers() {
    const res = await fetch(this.baseUrl + '/philosophers');
    const data = ((await res.json()) as unknown) as Philosopher[];
    console.log(data);

    return data;
  }
}
