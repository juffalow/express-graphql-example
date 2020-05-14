export interface FindParameters {
  first: number;
  after?: number;
  firstName?: string;
  lastName?: string;
  orderBy?: any[];
}

export interface CountParameters {
  firstName?: string;
  lastName?: string;
}

export default interface AuthorRepository {
  get(id: number): Promise<any>;

  create(firstName: string, lastName: string): Promise<any>;

  update(id: number, firstName: string, lastName: string): Promise<any>;

  find(params: FindParameters): Promise<any>;

  count(params: CountParameters): Promise<any>;
}
