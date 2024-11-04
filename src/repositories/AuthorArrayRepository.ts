import logger from '../logger';

const authorsList = [
  { id: 1, firstName: 'John', lastName: 'Johnson', createdAt: '2024-09-14 13:13:00' },
  { id: 2, firstName: 'Martin', lastName: 'Fowler', createdAt: '2024-09-14 13:13:01' },
  { id: 3, firstName: 'Jason', lastName: 'Lengstorf', createdAt: '2024-09-14 13:13:02' },
  { id: 4, firstName: 'Linus', lastName: 'Torvalds', createdAt: '2024-09-14 13:13:03' },
  { id: 5, firstName: 'Robert', lastName: 'Martin', createdAt: '2024-09-14 13:13:04' },
  { id: 6, firstName: 'Bill', lastName: 'Gates', createdAt: '2024-09-14 13:13:05' },
  { id: 7, firstName: 'Felipe', lastName: 'Fortes', createdAt: '2024-09-14 13:13:06' },
  { id: 8, firstName: 'Niels', lastName: 'Bohr', createdAt: '2024-09-14 13:13:07' },
  { id: 9, firstName: 'Jamie', lastName: 'Zawinski', createdAt: '2024-09-14 13:13:08' },
  { id: 10, firstName: 'Sercan', lastName: 'Leylek', createdAt: '2024-09-14 13:13:09' },
  { id: 11, firstName: 'Cory', lastName: 'House', createdAt: '2024-09-14 13:13:10' },
  { id: 12, firstName: 'Patrick', lastName: 'McKenzie', createdAt: '2024-09-14 13:13:11' },
  { id: 13, firstName: 'Joe', lastName: 'Sondow', createdAt: '2024-09-14 13:13:12' },
  { id: 14, firstName: 'Ron', lastName: 'Jeffries', createdAt: '2024-09-14 13:13:13' },
  { id: 15, firstName: 'Stephen', lastName: 'Hawking', createdAt: '2024-09-14 13:13:14' },
  { id: 16, firstName: 'Kathryn', lastName: 'Barrett', createdAt: '2024-09-14 13:13:15' },
  { id: 17, firstName: 'Anonymous', lastName: '', createdAt: '2024-09-14 13:13:16' },
  { id: 18, firstName: 'Rich', lastName: 'Hickey', createdAt: '2024-09-14 13:13:17' },
  { id: 19, firstName: 'Christopher', lastName: 'Thompson', createdAt: '2024-09-14 13:13:18' },
  { id: 20, firstName: 'Fred', lastName: 'Brooks', createdAt: '2024-09-14 13:13:19' },
  { id: 21, firstName: 'Kent', lastName: 'Beck', createdAt: '2024-09-14 13:13:20' },
  { id: 22, firstName: 'Bram', lastName: 'Cohen', createdAt: '2024-09-14 13:13:21' },
  { id: 23, firstName: 'Nicoll', lastName: 'Hunt', createdAt: '2024-09-14 13:13:22' },
  { id: 24, firstName: 'Oscar', lastName: 'Godson', createdAt: '2024-09-14 13:13:23' },
  { id: 25, firstName: 'The Boy Scout Rule', lastName: '', createdAt: '2024-09-14 13:13:24' },
  { id: 26, firstName: 'Chris', lastName: 'Pine', createdAt: '2024-09-14 13:13:25' },
  { id: 27, firstName: 'Damian', lastName: 'Conway', createdAt: '2024-09-14 13:13:26' },
  { id: 28, firstName: 'Alan', lastName: 'Turing', createdAt: '2024-09-14 13:13:27' },
  { id: 29, firstName: 'Richard', lastName: 'Pattis', createdAt: '2024-09-14 13:13:28' },
  { id: 30, firstName: 'Jeff', lastName: 'Atwood', createdAt: '2024-09-14 13:13:29' },
  { id: 31, firstName: 'Mikko', lastName: 'Hypponen', createdAt: '2024-09-14 13:13:30' },
  { id: 32, firstName: 'Ryan', lastName: 'Singer', createdAt: '2024-09-14 13:13:31' },
]

export default class AuthorKnexRepository implements AuthorRepository {
  public async get(id: number): Promise<Author> {
    logger.debug(`${this.constructor.name}.get`, { id });

    const author = authorsList.find((author) => author.id === id);

    return author;
  }

  public async getMany(ids: number[]): Promise<Author[]> {
    logger.debug(`${this.constructor.name}.getMany`, { ids });

    const authors = authorsList.filter((author) => ids.includes(author.id));

    return authors;
  }

  public async find(params: AuthorRepository.FindParameters): Promise<Author[]> {
    logger.debug(`${this.constructor.name}.find`, { params });

    const { first, after, firstName, lastName, orderBy } = params;

    const authors = authorsList.filter((author) => {
      if (typeof firstName !== 'undefined' && firstName !== null && author.firstName.startsWith(firstName) === false) {
        return false;
      }

      if (typeof lastName !== 'undefined' && lastName !== null && author.lastName.startsWith(lastName) === false) {
        return false;
      }

      return true;
    });

    if (Array.isArray(orderBy) && orderBy.length > 0) {
      authors.sort((a, b) => {
        return orderBy.map((ob) => {
          if (a[ob.field] < b[ob.field]) {
            return ob.direction === 'asc' ? -1 : 1;
          } else if (a[ob.field] > b[ob.field]) {
            return ob.direction === 'asc' ? 1 : -1;
          }
        }).reduce((p, n) => p || n, 0);
      });
    }

    return authors.splice(after, first);
  }

  public async count(params: AuthorRepository.CountParameters): Promise<number> {
    logger.debug(`${this.constructor.name}.count`, { params });

    const { firstName, lastName } = params;

    const count = authorsList.filter((author) => {
      if (typeof firstName !== 'undefined' && author.firstName.startsWith(firstName) === false) {
        return false;
      }

      if (typeof lastName !== 'undefined' && author.lastName.startsWith(lastName) === false) {
        return false;
      }

      return true;
    }).length;

    return count;
  }

  public async create(params: AuthorRepository.CreateParameters): Promise<Author> {
    logger.debug(`${this.constructor.name}.create`, { params });

    const author = {
      id: authorsList.length + 1,
      firstName: params.firstName,
      lastName: params.lastName,
      createdAt: new Date().toISOString(),
    };

    authorsList.push(author);

    return author;
  }

  public async update(id: number, firstName: string, lastName: string): Promise<Author> {
    logger.debug(`${this.constructor.name}.update`, { id, firstName, lastName });
    
    const author = authorsList.find((author) => author.id === id);

    const authorIndex = authorsList.findIndex((author) => author.id === id);

    if (authorIndex === -1) {
      throw new Error('Author not found!');
    }

    authorsList[authorIndex] = {
      ...author,
      firstName,
      lastName,
    };

    return authorsList[authorIndex];
  }

  public async delete(id: number): Promise<Author> {
    logger.debug(`${this.constructor.name}.delete`, { id });

    const author = authorsList.find((author) => author.id === id);
    const authorIndex = authorsList.findIndex((author) => author.id === id);

    authorsList.splice(authorIndex, 1);

    return author;
  }
}
