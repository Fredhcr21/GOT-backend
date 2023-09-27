import { NextFunction, Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { handleError, logger } from '../../core';
import { Helpers } from '../../helpers';
import { User } from '../models';
import { UserService } from '../services';

export const find = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.debug(`GET /user : ${JSON.stringify(req.query)}`);
    const { filter = '{}' } = req.query;
    // @ts-ignore
    const result = await UserService.find(JSON.parse(filter), Helpers.utils.buildPaginationQuery(req.query));
    logger.debug(`GET /user response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.debug(`GET /user/:id : ${JSON.stringify(req.params)}`);
    const { id } = req.params;
    const result = await UserService.getById(id);
    logger.debug(`GET user/:id response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};

export const deleteById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    logger.debug(`DELETE /user/:id : ${JSON.stringify(req.params)}`);
    const { id } = req.params;
    const result = await UserService.deleteById(id);
    logger.debug(`DELETE user/:id response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};

export const create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = req.body;
    logger.debug(`PUT /user : ${JSON.stringify(req.body)}`);
    const result = await UserService.create(user);
    logger.debug(`PUT /user response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};

export const update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const user = req.body;
    logger.debug(`PUT user/:id : ${JSON.stringify(id, user)}`);
    const result = await UserService.update(id, user);
    logger.debug(`PUT user/:id response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};

export const updateUserRoles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { roles } = req.body;
    logger.debug(`PUT /user/:id/roles : ${JSON.stringify(req.params)}`);
    const result = await UserService.updateUserRoles(id, roles);
    logger.debug(`PUT /user/:id/roles response: ${JSON.stringify(result)}`);
    res.status(HttpStatus.OK).json(result);
    return next();
  } catch (error) {
    return next(handleError(error));
  }
};
