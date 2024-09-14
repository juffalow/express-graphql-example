import Context from './Context';
import repositories from '../repositories';
import authorLoader from '../loaders/authorLoader';

const context: Context = {
  repositories: {
    author: repositories.Author,
    quote: repositories.Quote,
  },
  loaders: {
    author: authorLoader,
  }
};

export default context;
