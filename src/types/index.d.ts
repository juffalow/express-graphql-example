type Author = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
}

type Quote = {
  id: number;
  authorId: number;
  text: string;
  createdAt: string;
}

type OrderBy = {
  field: string;
  direction: string;
}

type Edge<T> = {
  node: T;
  cursor: string;
}

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

type Connection<T> = {
  edges: Edge<T>[];
  pageInfo: PageInfo;
  totalCount: number;
}