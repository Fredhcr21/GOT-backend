import { NextFunction, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { handleError, logger } from '../../core';

export const confirmEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { token } = req.query;
    logger.debug(`GET auth/email/confirm : secret params`);
    // @ts-ignore
    const result = await AuthService.confirmEmail(token, req);
    logger.debug(`GET /auth/email/confirm response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};
