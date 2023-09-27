import express from 'express';
import { AuthController } from '../controllers';

export default express.Router().get('/email/confirm', AuthController.confirmEmail);
