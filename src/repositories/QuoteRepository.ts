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
  get(id: number): Promise<any>;

  find(params: FindParameters): Promise<any>;

  count(params: CountParameters): Promise<any>;
}
