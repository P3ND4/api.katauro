import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import { PrismaExceptionFilter } from './shared/filters/prisma-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // --- CORS robusto para desarrollo y producción ---
  const allowedOrigins = [
    'http://localhost:4200',
    'https://katauro.com',
    'https://admin.katauro.com',
    'https://katauro-luminaria-web.vercel.app'
  ];

  app.enableCors({
    origin: (origin, callback) => {
      // Permite requests sin origen (ej: Postman) o los que estén en la lista
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS no permitido por el servidor'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // --- Middleware adicional para asegurar headers CORS ---
  app.use((req, res, next) => {
    const origin = req.headers.origin as string;
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
      res.sendStatus(204); // Preflight request respondido
    } else {
      next();
    }
  });

  app.useGlobalFilters(new PrismaExceptionFilter());
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}

dotenv.config();

bootstrap();
