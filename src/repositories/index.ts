import AuthorKnexRepository from './AuthorKnexRepository';
import AuthorArrayRepository from './AuthorArrayRepository';
import QuoteKnexRepository from './QuoteKnexRepository';
import QuoteArrayRepository from './QuoteArrayRepository';
import config from '../config';

const container = {
  get Author(): AuthorRepository {
    if (typeof this._author === 'undefined') {
      if (typeof config.database.connection.host === 'string') {
        this._author = new AuthorKnexRepository();
      } else {
        this._author = new AuthorArrayRepository();
      }
    }

    return this._author;
  },

  get Quote(): QuoteRepository {
    if (typeof this._quote === 'undefined') {
      if (typeof config.database.connection.host === 'string') {
        this._quote = new QuoteKnexRepository();
      } else {
        this._quote = new QuoteArrayRepository();
      }
    }

    return this._quote;
  },
};

export default container;
