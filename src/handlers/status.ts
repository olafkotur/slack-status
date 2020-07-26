import express from 'express';
import { ResponseService } from '../services/response';
import { StatusService } from '../services/status';

export const StatusHandler = {

  set: async (req: express.Request, res: express.Response): Promise<void> => {
    const success = await StatusService.set(
      req.body.slack_token || '',
      req.body.text || '',
      req.body.emoji || '',
      parseInt(req.body.expiration || '0'),
    );

    return success
      ? ResponseService.ok('Status has been set', res)
      : ResponseService.bad('Something went wrong', res);
  },

  clear: async (req: express.Request, res: express.Response): Promise<void> => {
    const success = await StatusService.set(req.body.slack_token || '');
    return success
      ? ResponseService.ok('Status has been cleared', res)
      : ResponseService.bad('Something went wrong', res);
  },
}