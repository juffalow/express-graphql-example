import Context from './Context';
import AuthorRepository from '../repositories/AuthorKnexRepository';
import QuoteRepository from '../repositories/QuoteKnexRepository';

const context: Context = {
  repositories: {
    author: new AuthorRepository(),
    quote: new QuoteRepository(),
  },
};

export default context;
