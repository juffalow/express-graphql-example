import database from '../database';
import logger from '../logger';

export default class QuoteKnexRepository implements QuoteRepository {

  public async get(id: number): Promise<Quote> {
    logger.debug(`${this.constructor.name}.get`, { id });

    return database.select()
      .from('quote')
      .where('id', id)
      .first();
  }

  public async find(params: QuoteRepository.FindParameters): Promise<Quote[]> {
    logger.debug(`${this.constructor.name}.find`, { params });

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
          queryBuilder.where('text', 'like', `%${query}%`);
        }
      })
      .limit(first);
  }

  public async count(params: QuoteRepository.CountParameters): Promise<number> {
    logger.debug(`${this.constructor.name}.count`, { params });
    
    const { authorId, query } = params;

    return database.count({ count: '*' })
      .from('quote')
      .modify((queryBuilder) => {
        if (typeof authorId !== 'undefined' && authorId !== null) {
          queryBuilder.where('authorId', authorId);
        }

        if (typeof query !== 'undefined' && query !== null) {
          queryBuilder.where('text', 'like', `%${query}%`);
        }
      })
      .first()
      .then(result => result.count);
  }
}
