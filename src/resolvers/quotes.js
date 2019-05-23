import QuoteRepository from '../repositories/QuoteRepository';
import toConnection from './toConnection';

export default async (args) => {
  const after = parseInt(Buffer.from(args.after, 'base64').toString('ascii').replace('cursor', ''));

  const quoteRepository = new QuoteRepository();
  const quotes = await quoteRepository.find(args.first, after, args.authorId, args.query);
  const quotesCount = await quoteRepository.count(args.authorId, args.query);

  const edges = nodesToEdges(quotes, after);

  return toConnection(edges, quotesCount);
}
