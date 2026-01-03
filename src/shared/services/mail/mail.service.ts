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
            from: '"Mi App" <verificacion@katauro.com>',
            to: email,
            subject: 'Verifica tu correo',
            html: `<p>Tu código es <b>${code}</b></p>`,
        });
    }
}


