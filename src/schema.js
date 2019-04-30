import { buildSchema } from 'graphql';

export default buildSchema(`
  type Query {
    author(id: ID!): Author
    authors(first: Int = 10, after: ID, firstName: String, lastName: String): AuthorConnection

    quote(id: ID!): Quote
    quotes(first: Int = 10, after: ID, authorId: ID, query: String): QuoteConnection
  }

  type Mutation {
    createAuthor(input: NewAuthorInput): Author

    updateAuthor(input: UpdateAuthorInput): Author
  }

  interface Node {
    id: ID!
  }

  type Author implements Node {
    """Globally unique ID of the author"""
    id: ID!

    """Database ID of the author"""
    _id: ID!

    """Author's first name"""
    firstName: String!

    """Author's last name"""
    lastName: String!

    quotes(first: Int = 10, after: ID, query: String): QuoteConnection
  }

  type Quote implements Node {

    id: ID!

    _id: ID!

    quote: String
  }

  type PageInfo {
    """The item at the end of the edge."""
    endCursor: String

    """When paginating forwards, are there more items?"""
    hasNextPage: Boolean!

    """When paginating backwards, are there more items?"""
    hasPreviousPage: Boolean!

    """When paginating backwards, the cursor to continue."""
    startCursor: String
  }

  type AuthorEdge {
    """The item at the end of the edge."""
    node: Author

    """A cursor for pagination."""
    cursor: String
  }

  type AuthorConnection {
    """Identifies the total count of items in the connection."""
    totalCount: Int

    """A list of edges."""
    edges: [AuthorEdge]
    
    pageInfo: PageInfo
  }

  type QuoteEdge {
    """The item at the end of the edge."""
    node: Quote

    """A cursor for pagination."""
    cursor: String
  }

  type QuoteConnection {
    """Identifies the total count of items in the connection."""
    totalCount: Int

    """A list of edges."""
    edges: [QuoteEdge]
    
    pageInfo: PageInfo
  }

  input NewAuthorInput {
    firstName: String!
    lastName: String!
  }

  input UpdateAuthorInput {
    id: ID!
    firstName: String
    lastName: String
  }
`);
