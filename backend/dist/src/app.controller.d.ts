import { User } from 'interfaces/user';
import { AuthService } from 'modules/auth/auth.service';
import { UsersService } from 'modules/users/users.service';
export declare class AppController {
    private authService;
    private usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<any>;
    getAllUsers(): Promise<any>;
    createUser(input: User): Promise<any>;
}
