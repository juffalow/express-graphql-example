
import IAuthorRepository from '../repositories/IAuthorRepository';
import IQuoteRepository from '../repositories/IQuoteRepository';

interface IRepositoriesContext {
  author: IAuthorRepository;
  quote: IQuoteRepository;
}

export default interface IContext {
  repositories: IRepositoriesContext;
}
