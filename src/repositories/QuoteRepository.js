import Quote from '../models/Quote';
import database from '../database';

export default class QuoteRepository {
  /**
   * 
   * @param {number} id 
   * @returns {Promise}
   */
  async get(id) {
    return database.select()
      .from('quote')
      .where('id', id)
      .first()
      .then(quote => new Quote(quote.id, quote.authorId, quote.quote));
  }

  /**
   * 
   * @param {number} first 
   * @param {number} after 
   * @param {number} authorId 
   * @param {string} query 
   * @returns {Promise}
   */
  async find(first, after, authorId, query) {
    return database.select()
      .from('quote')
      .modify((queryBuilder) => {
        if (typeof after !== 'undefined' && after !== null) {
          queryBuilder.offset(after);
        }

        if (typeof authorId !== 'undefined' && authorId !== null) {
          queryBuilder.where('authorId', authorId);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('quote', 'like', `%${query}%`);
        }
      })
      .limit(first)
      .then(quotes => quotes.map(quote => new Quote(quote.id, quote.authorId, quote.quote)));
  }

  /**
   * 
   * @param {number} authorId 
   * @param {string} query 
   */
  async count(authorId, query) {
    return database.count({ count: '*' })
      .from('quote')
      .modify((queryBuilder) => {
        if (typeof authorId !== 'undefined' && authorId !== null) {
          queryBuilder.where('authorId', authorId);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('quote', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }
}
