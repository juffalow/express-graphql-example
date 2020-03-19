import IAuthorRepository, { IFindParameters, ICountParameters } from './IAuthorRepository';
import database from '../database';

export default class AuthorRepository implements IAuthorRepository {

  async get(id: number): Promise<any> {
    return database.select()
      .from('author')
      .where('id', id)
      .first();
  }

  async find(params: IFindParameters): Promise<any> {
    const { first, after, firstName, lastName, orderBy } = params;

    return database.select()
      .from('author')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof firstName !== 'undefined' && firstName !== null) {
          queryBuilder.where('name', 'like', `%${firstName}%`);
        }

        if (typeof lastName !== 'undefined' && lastName !== null) {
          queryBuilder.where('last_name', 'like', `%${lastName}%`);
        }

        if (Array.isArray(orderBy)) {
          orderBy.forEach(ob => queryBuilder.orderBy(ob.field, ob.direction));
        }
      })
      .limit(first);
  }

  async count(params: ICountParameters): Promise<any> {
    const { firstName, lastName } = params;

    return database.count({ count: '*' })
      .from('author')
      .modify((queryBuilder) => {
        if (typeof firstName !== 'undefined' && firstName !== null) {
          queryBuilder.where('firstName', 'like', `%${firstName}%`);
        }

        if (typeof lastName !== 'undefined' && lastName !== null) {
          queryBuilder.where('lastName', 'like', `%${lastName}%`);
        }
      })
      .first()
      .then(result => result.count);
  }

  async create(firstName: string, lastName: string): Promise<any> {
    return database.insert({
      firstName,
      lastName,
    })
    .returning('id')
    .into('author')
    .then(ids => {
      return this.get(ids[0]);
    });
  }

  async update(id: number, firstName: string, lastName: string): Promise<any> {
    return database.table('author')
      .where('id', id)
      .modify((queryBuilder) => {
        if (typeof firstName !== 'undefined' && firstName !== null) {
          queryBuilder.update('firstName', firstName);
        }

        if (typeof lastName !== 'undefined' && lastName !== null) {
          queryBuilder.update('lastName', lastName);
        }
      })
      .then(updatedRows => {
        if (updatedRows.length === 0) {
          throw new Error('Author not found!');
        }
        return updatedRows;
      }).then(() => {
        return this.get(id);
      });
  }
}
