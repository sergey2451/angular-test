export interface IAllData {
  total: number;
  data: IData[];
}

export interface IData {
  _id: string;
  amount: number;
  type: string;
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IName {
  first: string;
  last: string;
}
