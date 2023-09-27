import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { Config } from './config';
import { connectDatabase } from './core';
import routes from './api/routing';

const app = express();

app.use(bodyParser.json({ limit: Config.app.requestLimit }));
app.use(bodyParser.urlencoded({ extended: true, limit: Config.app.requestLimit }));
app.use(cors());
routes(app);
connectDatabase();

export default app;
