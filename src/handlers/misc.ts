import express from 'express';
import { ResponseService } from '../services/response';

export const MiscHandler = {

  getPingResponse: (_req: express.Request, res: express.Response) => {
    return ResponseService.ok('PONG', res);
  },

  getDocumentation: (_req: express.Request, res: express.Response) => {
    return ResponseService.redirect('https://documenter.getpostman.com/view/8555555/SWT5gzbe?version=latest', res);
  },
}