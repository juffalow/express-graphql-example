import { Quote } from '../types';

export interface FindParameters {
  first: number;
  after?: number;
  authorId?: number;
  query?: string;
}

export interface CountParameters {
  authorId?: number;
  query?: string;
}

export default interface AuthorRepository {
  get(id: number): Promise<Quote>;

  find(params: FindParameters): Promise<Quote[]>;

  count(params: CountParameters): Promise<number>;
}
