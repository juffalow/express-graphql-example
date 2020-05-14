export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: string;
}

export type Quote = {
  id: number;
  authorId: number;
  text: string;
  createdAt: string;
}

export type OrderBy = {
  field: string;
  direction: string;
}
