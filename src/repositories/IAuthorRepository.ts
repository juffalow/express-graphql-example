export interface IFindParameters {
  first: number;
  after?: number;
  firstName?: string;
  lastName?: string;
  orderBy?: any[];
}

export interface ICountParameters {
  firstName?: string;
  lastName?: string;
}

export default interface IAuthorRepository {
  get(id: number): Promise<any>;

  create(firstName: string, lastName: string): Promise<any>;

  update(id: number, firstName: string, lastName: string): Promise<any>;

  find(params: IFindParameters): Promise<any>;

  count(params: ICountParameters): Promise<any>;
}
