import express from 'express';
import bodyParser from 'body-parser';

// handlers
import { MiscHandler } from './handlers/misc';
import { StatusHandler } from './handlers/status';

// services

// setup
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app: express.Application = express();

async function main() {

  app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  // status handlers
  app.post('/api/status/set', StatusHandler.set);
  app.post('/api/status/clear', StatusHandler.clear);

  // misc handlers
  app.get(['/', '/api/ping'], MiscHandler.getPingResponse);
  app.get('/api/docs', MiscHandler.getDocumentation);

  app.listen(PORT, () => console.info(`API listening on port ${PORT}`));

} main();