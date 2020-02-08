import { IStudent } from 'app/shared/model/student.model';

export interface ICategory {
  id?: number;
  language?: string;
  question?: string;
  answer?: string;
  students?: IStudent[];
}

export class Category implements ICategory {
  constructor(
    public id?: number,
    public language?: string,
    public question?: string,
    public answer?: string,
    public students?: IStudent[]
  ) {}
}
