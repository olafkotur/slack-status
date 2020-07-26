export interface IResponse {
  code: number;
  status: string;
  unix: number;
  message: string;
}

export interface IDataResponse {
  code: number;
  status: string;
  unix: number;
  result: any
}