import Context from './Context';
import AuthorRepository from '../repositories/AuthorKnexRepository';
import QuoteRepository from '../repositories/QuoteKnexRepository';
import authorLoader from '../loaders/authorLoader';

const context: Context = {
  repositories: {
    author: new AuthorRepository(),
    quote: new QuoteRepository(),
  },
  loaders: {
    author: authorLoader,
  }
};

export default context;
