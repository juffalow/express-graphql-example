export interface IFindParameters {
  first: number;
  after?: number;
  authorId?: number;
  query?: string;
}

export interface ICountParameters {
  authorId?: number;
  query?: string;
}

export default interface IAuthorRepository {
  get(id: number): Promise<any>;

  find(params: IFindParameters): Promise<any>;

  count(params: ICountParameters): Promise<any>;
}
