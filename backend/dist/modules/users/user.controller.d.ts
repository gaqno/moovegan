import { UserService } from './user.service';
import { UserCreate } from './interfaces/user';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<any>;
    createUser(input: UserCreate): Promise<any>;
}
