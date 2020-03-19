import IContext from './IContext';
import AuthorRepository from '../repositories/AuthorRepository';
import QuoteRepository from '../repositories/QuoteRepository';

const context: IContext = {
  repositories: {
    author: new AuthorRepository(),
    quote: new QuoteRepository(),
  },
};

export default context;
