import QuoteRepository from '../repositories/QuoteRepository';
import nodesToConnection from './nodesToConnection';

export default async (args) => {
  const quoteRepository = new QuoteRepository();
  const quotes = await quoteRepository.find(args.first, args.after, args.authorId, args.query);
  const quotesCount = await quoteRepository.count(args.authorId, args.query);

  return nodesToConnection(quotes, quotesCount);
}
