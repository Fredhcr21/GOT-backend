import express from 'express';
import { UserController } from '../controllers';

export default express
  .Router()
  .get('/', UserController.find)
  .get('/:id', UserController.getById)
  .post('/', UserController.create)
  .put('/:id', UserController.update)
  .put('/:id/roles', UserController.updateUserRoles)
  .delete('/:id', UserController.deleteById);
