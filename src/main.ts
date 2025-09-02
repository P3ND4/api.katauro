import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logStream = fs.createWriteStream(__dirname + '/startup.log', { flags: 'a' });
  const logger = new Logger('Bootstrap');

  app.enableCors({
    origin: '*', // Permite todos los orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  try {
    app.use(cookieParser());
    await app.listen(process.env.PORT ?? 3000);

    const msg = `App listening on port ${process.env.PORT ?? 3000}`;
    logger.log(msg);
    logStream.write(`[OK] ${msg}\n`);
  } catch (error) {
    const msg = `Error starting app: ${error.message}`;
    logger.error(msg);
    logStream.write(`[ERROR] ${msg}\n`);
  }

}

dotenv.config();

bootstrap();
