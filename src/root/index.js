export default {
  author: function(args, context) {
    return context.repository.author.get(args.id);
  },
  authors: function(args, context) {
    return context.resolver.authors(args);
  },
  quote: function(args, context) {
    return context.repository.quote.get(args.id);
  },
  quotes: function(args, context) {
    return context.resolver.quotes(args);
  },
  createAuthor: function(args, context) {
    return context.repository.author.create(args.firstName, args.lastName);
  }
};
