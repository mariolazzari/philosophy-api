# Philosophy API client
---

This TypeScript based package implements a REST API client to the wonderfull [Philosophy API](https://philosophyapi.pythonanywhere.com/) **free** project.

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

#### getBooks

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

#### getIdea

#### getPhilosophers

#### getPhilosopher

#### getRoot

#### getSchools

#### getSchool

