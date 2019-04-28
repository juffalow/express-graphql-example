import quotes from '../resolvers/quotes';

export default class Author {
  constructor(id, firstName, lastName) {
    this.id = Buffer.from(`author-${id}`).toString('base64');
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  quotes(args) {
    return quotes({
      authorId: this._id,
      ...args
    });
  }
}
