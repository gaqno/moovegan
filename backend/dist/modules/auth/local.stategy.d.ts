import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { User } from 'interfaces/user';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(input: User): Promise<any>;
}
export {};
