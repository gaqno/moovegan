import { User } from 'interfaces/user';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(input: User, pass: string): Promise<any>;
    login(user: User): Promise<{
        access_token: string;
    }>;
}
