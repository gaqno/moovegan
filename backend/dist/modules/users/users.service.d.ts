import { User } from '../../interfaces/user';
import { UserRepository } from './repositories';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<any>;
    createUser(input: User): Promise<any>;
    findUser(input: User): Promise<any>;
}
