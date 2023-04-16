import { join } from 'path';
import { config } from 'dotenv';
import { developmentConfig } from './config/development.config';
import { productionConfig } from './config/production.config';
config({
  path: join(__dirname, '../.env'),
});

export const ConfigService = {
  provide: 'CONFIG_SERVICE',
  useValue:
    process.env.NODE_ENV === 'development'
      ? developmentConfig
      : productionConfig,
};
