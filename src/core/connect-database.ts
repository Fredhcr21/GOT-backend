import mongoose from 'mongoose';
import { logger } from './';
import { Config } from '../config';

const connectDatabase = (): void => {
  const userPass =
    Config.database.mongoUser && Config.database.mongoPassword
      ? `${Config.database.mongoUser}:${Config.database.mongoPassword}@`
      : '';
  const connectionURI =
    Config.database.mongoUri ??
    `mongodb://${userPass}${Config.database.mongoHost}:${Config.database.mongoPort}/${Config.database.mongoDB}`;
  mongoose.connect(connectionURI);
  const { connection } = mongoose;
  connection.on('error', (err) => logger.error('MongoDB connection error', err));
  connection.once('open', () => {
    logger.debug(`✔ MongoDB connection stablished`);
  });
};

export default connectDatabase;
