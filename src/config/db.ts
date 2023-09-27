/**
 *  Interfaz para los ajustes de configuración de la base de datos
 * @interface DataBaseConfig
 */
interface DataBaseConfig {
  mongoHost: string;
  mongoPort: number;
  mongoDB: string;
  mongoPassword?: string;
  mongoUser?: string;
  useAuth: boolean;
  mongoUri?: string;
}

const dataBaseConfig: DataBaseConfig = {
  mongoHost: process.env.MONGO_HOST || '127.0.0.1',
  mongoPort: Number(process.env.MONGO_PORT) || 27017,
  mongoDB: process.env.MONGO_DB || 'db',
  mongoUri: process.env.MONGO_URI,
  useAuth: Boolean(process.env.USE_AUTH) || false,
  mongoUser: process.env.USE_AUTH === 'true' ? process.env.MONGO_USER : '',
  mongoPassword: process.env.USE_AUTH === 'true' ? process.env.MONGO_PASSWORD : '',
};

export default dataBaseConfig;
