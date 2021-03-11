import { Author, OrderBy } from '../types';

export interface CreateParameters {
  firstName: string;
  lastName: string;
}

export interface FindParameters {
  first: number;
  after?: number;
  firstName?: string;
  lastName?: string;
  orderBy?: OrderBy[];
}

export interface CountParameters {
  firstName?: string;
  lastName?: string;
}

export default interface AuthorRepository {
  get(id: number): Promise<Author>;

  getMany(ids: number[]): Promise<Author[]>;

  create(params: CreateParameters): Promise<Author>;

  update(id: number, firstName: string, lastName: string): Promise<Author>;

  find(params: FindParameters): Promise<Author[]>;

  count(params: CountParameters): Promise<number>;

  delete(id: number): Promise<Author>;
}
