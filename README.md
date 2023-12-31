# Philosophy API client
---

This TypeScript based package implements a REST API client to the wonderfull [Philosophy API](https://philosophyapi.pythonanywhere.com/) **free** project.


- [Philosophy API client](#philosophy-api-client)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Philosophy class](#philosophy-class)
    - [Constructor](#constructor)
    - [Methods](#methods)
      - [getBooks](#getbooks)
      - [getBook](#getbook)
      - [getIdeas](#getideas)
      - [getIdea](#getidea)
      - [getPhilosophers](#getphilosophers)
      - [getPhilosopher](#getphilosopher)
      - [getRoot](#getroot)
      - [getSchools](#getschools)
      - [getSchool](#getschool)
  - [Types](#types)
    - [Book](#book)
    - [Idea](#idea)
    - [Philosopher](#philosopher)
    - [Request](#request)
    - [Response](#response)
    - [Result](#result)
    - [Root](#root)
    - [School](#school)
  - [Authors](#authors)
  - [Links](#links)


**Prerequisites**

This package requires [NodeJS](https://nodejs.org) (version 18 or later) and a node package manager (Npm, Yarn, Pnpm or Bun). 

To make sure you have them available on your machine, try running the following command.

```sh
$ npm -v && node -v
v10.1.0
v18.18.0
```
---

## Installation

**BEFORE YOU INSTALL**: please read the prerequisites.

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/mariolazzari/rijks.git
$ cd rijks
```

To install and set up the library, run:

```sh
npm install @mariolazzari/rijks
```
___

## Usage

**Import package**
```js
import { Philosophy } from "@mariolazzari/philosophy-api"
```

**Watch mode**
```sh
npm test
```

**Unit testing**
```sh
npm test
```

**Bulding new version**
```sh
npm build
```

This task will create a distribution version of the project inside your local *dist/* folder

---

## Philosophy class

Philosophy **class** handles all the requests and the responses to the [Philosophy API](https://philosophyapi.pythonanywhere.com) project.

### Constructor

In order to initialize Philosophy **client**:

```js
const client = new Philosophy()
```

No parameters are required by this contrsuctor.


### Methods

Philosophy client includes the following *public* methods:

#### getBooks

*Description*

This asynchronous **method** handles `GET /api/books` REST API.

*Prototype*

```ts
async getBooks(search: string, page: number): Promise<Result<Book[]>>
```

*Sample code*

```ts
const params: Request = {search: "title"}
const books: Response<Books[]> = await client.getBooks(params)
```

#### getBook

*Description*

This asynchronous **method** handles `GET /api/books/:id` REST API.

*Prototype*

```ts
async getBooks(id: number): Promise<Result<Book>>
```

*Sample code*

```ts
const id:number = 123;
const book: Response<Book> = await client.getBooks(id)
```


#### getIdeas

*Description*

This asynchronous **method** handles `GET /api/ideas` REST API.

*Prototype*

```ts
async getBooks(search: string, page: number): Promise<Result<Idea[]>>
```

*Sample code*

```ts
const params: Request = {search: "god"}
const ideas: Response<Idea[]> = await client.getBooks(params)
```

#### getIdea

*Description*

This asynchronous **method** handles `GET /api/ideas/:id` REST API.

*Prototype*

```ts
async getBooks(id: number): Promise<Result<Idea>>
```

*Sample code*

```ts
const id:number = 123;
const idea: Response<Idea> = await client.getBooks(id)
```

#### getPhilosophers

*Description*

This asynchronous **method** handles `GET /api/philosophers` REST API.

*Prototype*

```ts
async getBooks(search: string, page: number): Promise<Result<Philosopher[]>>
```

*Sample code*

```ts
const params: Request = {search: "Kant"}
const philos: Response<Philosopher[]> = await client.getPhilosophers(params)
```

#### getPhilosopher

*Description*

This asynchronous **method** handles `GET /api/philosophers/:id` REST API.

*Prototype*

```ts
async getPhilosopher(id: number): Promise<Result<Philosopher>>
```

*Sample code*

```ts
const id:number = 123;
const philo: Response<Philosopher> = await client.getPhilosopher(id)
```

#### getRoot

*Description*

This asynchronous **method** handles `GET /api/` REST API.

*Prototype*

```ts
async getRoot(): Promise<Result<Root>>
```

*Sample code*

```ts
const root: Response<Root> = await client.getRoot()
```


#### getSchools

*Description*

This asynchronous **method** handles `GET /api/schools` REST API.

*Prototype*

```ts
async getSchools(search: string, page: number): Promise<Result<School[]>>
```

*Sample code*

```ts
const params: Request = {search: "Idealism"}
const schools: Response<School[]> = await client.getSchools(params)
```

#### getSchool

*Description*

This asynchronous **method** handles `GET /api/schools/:id` REST API.

*Prototype*

```ts
async getSchool(id: number): Promise<Result<School>>
```

*Sample code*

```ts
const id:number = 123;
const school: Response<School> = await client.getSchool(id)
```

---

## Types

In order to implement all features, the following common *types* have been implemended:


### Book

```ts
type Book = {
  id: number;
  title: string;
  cover: string;
  abstract: string;
  country: string;
  language: string;
  published: string;
  date: Date;
  author: string;
};
```

### Idea

```ts
type Idea = {
  id: number;
  author: string;
  quote: string;
};
```

### Philosopher

```ts
type Philosopher = {
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
```

### Request

```ts
type Request = Partial<{
  url: string;
  search: string;
  page: number;
}>;
```

### Response

```ts
type Response<T> = Partial<{
  data: Result<T>;
  error: string;
}>;
```

### Result

```ts
type Result<T> = {
  count: number;
  previous: string;
  next: string;
  results: T;
};
```

### Root

```ts
type Root = {
  philosophers: string;
  ideas: string;
  books: string;
  schools: string;
};
```

### School

```ts
type School = {
  id: number;
  name: string;
  philosophers: string[];
};
```

---

## Authors

* **Mario Lazzari** - *Initial work*

## Links

* Demo [app](https://www.mariolazzari.it/hobbies/phy/phyApi)
* My personal [site](https://mariolazzari.it)
* My [github](https://github.com/mariolazzari) profile
* Philosophy API [documentation](https://philosophyapi.pythonanywhere.com)
