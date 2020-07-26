import express from 'express';
import moment from 'moment';
import { IResponse, IDataResponse } from '../models/response';

export const ResponseService = {
  ok: (msg: string, res: express.Response) => {
    const response: IResponse = {
      code: 200,
      status: 'ok',
      unix: moment().unix(),
      message: msg,
    };
    res.status(200);
    res.send(response);
  },

  create: (data: any, res: express.Response) => {
    const response: IDataResponse = {
      code: 201,
      status: 'created',
      unix: moment().unix(),
      result: data,
    };
    res.status(201);
    res.send(response);
  },

  bad: (msg: string, res: express.Response) => {
    const response: IResponse = {
      code: 400,
      status: 'bad request',
      unix: moment().unix(),
      message: msg,
    };
    res.status(400);
    res.send(response);
  },

  unauthorized: (msg: string, res: express.Response) => {
    const response: IResponse = {
      code: 401,
      status: 'unauthorized',
      unix: moment().unix(),
      message: msg,
    };
    res.status(401);
    res.send(response);
  },

  forbidden: (msg: string, res: express.Response) => {
    const response: IResponse = {
      code: 403,
      status: 'forbidden',
      unix: moment().unix(),
      message: msg,
    };
    res.status(403);
    res.send(response);
  },

  notFound: (msg: string, res: express.Response) => {
    const response: IResponse = {
      code: 404,
      status: 'not found',
      unix: moment().unix(),
      message: msg,
    };
    res.status(404);
    res.send(response);
  },

  data: (data: any, res: express.Response) => {
    const response: IDataResponse = {
      code: 200,
      status: 'ok',
      unix: moment().unix(),
      result: data,
    };
    res.status(200);
    res.send(response);
  },

  redirect: (uri: string, res: express.Response) => {
    res.status(301);
    res.redirect(uri);
  },

};