import { ICategory } from 'app/shared/model/category.model';

export interface IStudent {
  id?: number;
  firstname?: string;
  lastName?: string;
  school?: string;
  categories?: ICategory[];
}

export class Student implements IStudent {
  constructor(
    public id?: number,
    public firstname?: string,
    public lastName?: string,
    public school?: string,
    public categories?: ICategory[]
  ) {}
}
