import { Application } from 'express';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

export default function routes(app: Application): void {
  //  Public
  app.use('/auth', authRoutes);
  app.use('/user', userRoutes);
}
