import Author from '../models/Author';
import database from '../database';

export default class AuthorRepository {
  /**
   * 
   * @param {number} id 
   * @returns {Promise}
   */
  async get(id) {
    return database.select()
      .from('author')
      .where('id', id)
      .first()
      .then(author => new Author(author.id, author.firstName, author.lastName));
  }

  /**
   * 
   * @param {number} first 
   * @param {number} after 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {Promise}
   */
  async find(first, after, firstName, lastName, orderBy) {
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
      .limit(first)
      .then(authors => authors.map(author => new Author(author.id, author.firstName, author.lastName)));
  }

  /**
   * 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {Promise}
   */
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

  /**
   * 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {Promise}
   */
  async create(firstName, lastName) {
    return database.insert({
      firstName: firstName,
      lastName: lastName,
    })
    .returning('id')
    .into('author')
    .then(ids => {
      return new Author(ids[0], firstName, lastName);
    });
  }

  /**
   * 
   * @param {number} id 
   * @param {string} firstName 
   * @param {string} lastName 
   * @returns {Promise}
   */
  async update(id, firstName, lastName) {
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
