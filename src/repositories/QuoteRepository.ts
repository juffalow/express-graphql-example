import IQuoteRepository, { IFindParameters, ICountParameters } from './IQuoteRepository';
import database from '../database';

export default class QuoteRepository implements IQuoteRepository {

  async get(id: number): Promise<any> {
    return database.select()
      .from('quote')
      .where('id', id)
      .first();
  }

  async find(params: IFindParameters): Promise<any> {
    const { first, after, authorId, query } = params;

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
      .limit(first);
  }

  async count(params: ICountParameters): Promise<any> {
    const { authorId, query } = params;

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
