export type Philosopher = {
  id: number;
  name: string;
  photo: string;
  born_date: string;
  born: Date;
  death_date: string;
  dead: Date;
  nationality: string;
  era: string;
  school: string[];
  schools: string[];
  ideas: string[];
  books: string[];
};

export default Philosopher;
