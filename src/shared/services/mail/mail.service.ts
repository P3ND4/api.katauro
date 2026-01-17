import { Injectable } from '@nestjs/common';

import * as nodemailer from 'nodemailer';


@Injectable()
export class MailService {
    private transporter = nodemailer.createTransport({
        host: 'mail.katauro.com',
        port: 465,
        secure: true,
        auth: {
            user: 'verificacion@katauro.com',
            pass: process.env.MAIL_PASS,
        },
    });

    async sendVerification(email: string, code: string) {
        await this.transporter.sendMail({
            from: '"Katauro" <verificacion@katauro.com>',
            to: email,
            subject: 'Código de verificación',
            html:
                `<p>Tu código de verificación es:</p>
                <h2>${code}</h2>
                <p>Este código expira en 5 minutos.</p>
            `,
            headers: {
                'X-Priority': '1',
                Importance: 'High',
            },
        });
    }
}


