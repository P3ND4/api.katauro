export declare class MailService {
    private transporter;
    sendVerification(email: string, code: string): Promise<void>;
}
