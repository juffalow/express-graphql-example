import authors from '../resolvers/authors';
import quotes from '../resolvers/quotes';
import AuthorRepository from '../repositories/AuthorRepository';
import QuoteRepository from '../repositories/QuoteRepository';

export default {
  resolver: {
    authors,
    quotes,
  },
  repository: {
    author: new AuthorRepository(),
    quote: new QuoteRepository(),
  },
};
