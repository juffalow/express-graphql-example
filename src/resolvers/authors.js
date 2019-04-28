import AuthorRepository from '../repositories/AuthorRepository';
import nodesToConnection from './nodesToConnection';

export default async (args) => {
  const authorRepository = new AuthorRepository();
  const authors = await authorRepository.find(args.first, args.after, args.firstName, args.lastName);
  const authorsCount = await authorRepository.count(args.firstName, args.lastName);

  return nodesToConnection(authors, authorsCount);
}
