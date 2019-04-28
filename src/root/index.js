import AuthorRepository from '../repositories/AuthorRepository';
import QuoteRepository from '../repositories/QuoteRepository';

import authors from '../resolvers/authors';
import quotes from '../resolvers/quotes';

export default {
  author: function(args) {
    const authorRepository = new AuthorRepository();
    return authorRepository.get(args.id);
  },
  authors,
  quote: function(args) {
    const quoteRepository = new QuoteRepository();
    return quoteRepository.get(args.id);
  },
  quotes,
}
