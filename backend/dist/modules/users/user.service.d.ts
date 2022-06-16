import { UserCreate } from './interfaces/user';
import { UserRepository } from './repositories';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(): Promise<any>;
    createUser(input: UserCreate): Promise<any>;
}
