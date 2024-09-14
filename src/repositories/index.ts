import Author from './AuthorKnexRepository';
import Quote from './QuoteKnexRepository';

const container = {
  get Author(): AuthorRepository {
    if (typeof this._author === 'undefined') {
      this._author = new Author();
    }

    return this._author;
  },

  get Quote(): QuoteRepository {
    if (typeof this._quote === 'undefined') {
      this._quote = new Quote();
    }

    return this._quote;
  },
};

export default container;
