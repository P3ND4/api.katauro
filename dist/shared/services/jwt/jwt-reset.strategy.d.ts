import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JwtResetStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptions] | [opt: import("passport-jwt").StrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtResetStrategy extends JwtResetStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
    }>;
}
export {};
