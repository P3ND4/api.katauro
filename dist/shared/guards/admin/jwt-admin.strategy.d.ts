import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
declare const JwtAdminStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptions] | [opt: import("passport-jwt").StrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(req: Request, payload: any): Promise<any>;
}
export {};
