export default class Quote {
  constructor(id, authorId, quote) {
    this.id = Buffer.from(`quote-${id}`).toString('base64');
    this._id = id;
    this.authorId = authorId;
    this.quote = quote;
  }
}
