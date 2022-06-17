import { UsersService } from './users.service';
import { User } from '../../interfaces/user';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAllUsers(): Promise<any>;
    createUser(input: User): Promise<any>;
}
