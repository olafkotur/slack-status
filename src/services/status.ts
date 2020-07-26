import { IStatusOptions } from '../models/status';
import { setStatusUrl } from '../imports/slackUrls';

const fetch = require("node-fetch");

export const StatusService = {
  set: async (token: string, text?: string, emoji?: string, expiration?: number): Promise<boolean> => {
    const statusOptions: IStatusOptions = {
      status_text: text || '',
      status_emoji: emoji || '',
      status_expiration: expiration || 0,
    };

    // set status
    const encodedPayload: string = encodeURI(JSON.stringify(statusOptions));
    const res = await fetch(`${setStatusUrl}${encodedPayload}&token=${token}`, { method: 'POST'});
    return res.status === 200;
  },
};