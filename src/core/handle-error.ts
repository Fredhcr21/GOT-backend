import BaseError from './abstract-error';
import { UnexpectedError } from './api-errors';
import { logger } from './';

const handleError = (err: Error | BaseError | unknown): Error => {
  if (err instanceof BaseError) {
    logger.error(err.message, 'Error caught');
    return err;
  }

  const error = new UnexpectedError((err as Error).message);
  logger.error(error.message, 'Unexpected Error caught');
  return error;
};

export default handleError;
