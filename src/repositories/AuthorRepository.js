import Author from '../models/Author';
import database from '../database';

export default class AuthorRepository {
  async get(id) {
    return database.select()
      .from('author')
      .where('id', id)
      .first()
      .then(author => new Author(author.id, author.firstName, author.lastName));
  }

  async find(first, after, firstName, lastName) {
    return database.select()
      .from('author')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.where('id', '>', after);
        }

        if (typeof firstName !== 'undefined' && firstName !== null) {
          queryBuilder.where('name', 'like', `%${firstName}%`);
        }

        if (typeof lastName !== 'undefined' && lastName !== null) {
          queryBuilder.where('last_name', 'like', `%${lastName}%`);
        }
      })
      .limit(first)
      .then(authors => authors.map(author => new Author(author.id, author.firstName, author.lastName)));
  }

  async count(firstName, lastName) {
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

  async create(firstName, lastName) {
    return database.insert({
      firstName: firstName,
      lastName: lastName,
    })
    .returning('id')
    .into('author')
    .then(id => {
      return new Author(id, firstName, lastName);
    });
  }
}
