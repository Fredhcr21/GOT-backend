import { getAuth } from 'firebase-admin/auth';
import firebaseApp from './initialize-firebase-app';

export async function validateFibrebaseIdToken(token: string): Promise<string> {
  try {
    const user = await getAuth(firebaseApp).verifyIdToken(token);
    return user.uid;
  } catch (error) {
    const errorStr = String(error).toLowerCase();
    throw new Error(errorStr);
  }
}
