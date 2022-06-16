import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserCreate } from './interfaces/user';
import { UserRepository } from './repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<any> {
    try {
      return this.userRepository.getAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async createUser(input: UserCreate): Promise<any> {
    const foundUserByEmail = await this.userRepository.findUnique({
      email: input.email,
    });
    if (foundUserByEmail) throw new ConflictException('Email já cadastrado.');
    try {
      return this.userRepository.create({
        ...input,
      });
      input.password = undefined;
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
