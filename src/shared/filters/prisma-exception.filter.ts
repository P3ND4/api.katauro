import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common';
import { Prisma } from 'generated/prisma';


@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
    catch(
        exception: Prisma.PrismaClientKnownRequestError,
        host: ArgumentsHost,
    ) {
        const response = host.switchToHttp().getResponse();

        switch (exception.code) {
            case 'P2002':
                return response.status(HttpStatus.CONFLICT).json({
                    statusCode: 409,
                    message: 'Recurso duplicado',
                    error: 'Conflict',
                });

            case 'P2025':
                return response.status(HttpStatus.NOT_FOUND).json({
                    statusCode: 404,
                    message: 'Recurso no encontrado',
                    error: 'Not Found',
                });

            default:
                return response.status(HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: 'Error de base de datos',
                });
        }
    }
}
