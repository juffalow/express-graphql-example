
import AuthorRepository from '../repositories/AuthorRepository';
import QuoteRepository from '../repositories/QuoteRepository';

interface RepositoriesContext {
  author: AuthorRepository;
  quote: QuoteRepository;
}

export default interface Context {
  repositories: RepositoriesContext;
}
