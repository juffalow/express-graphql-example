import DataLoader from 'dataloader';
import AuthorRepository from '../repositories/AuthorRepository';
import QuoteRepository from '../repositories/QuoteRepository';
import { Author } from '../types';

interface RepositoriesContext {
  author: AuthorRepository;
  quote: QuoteRepository;
}

interface LoadersContext {
  author: DataLoader<number, Author>;
}

export default interface Context {
  repositories: RepositoriesContext;
  loaders: LoadersContext;
}
