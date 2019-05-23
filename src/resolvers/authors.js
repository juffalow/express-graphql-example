import AuthorRepository from '../repositories/AuthorRepository';
import nodesToEdges from './nodesToEdges';
import toConnection from './toConnection';

export default async (args) => {
  const after = parseInt(Buffer.from(args.after, 'base64').toString('ascii').replace('cursor', ''));

  const authorRepository = new AuthorRepository();
  const authors = await authorRepository.find(args.first, after, args.firstName, args.lastName, args.orderBy);
  const authorsCount = await authorRepository.count(args.firstName, args.lastName);

  const edges = nodesToEdges(authors, after);

  return toConnection(edges, authorsCount);
}
