import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '../../interfaces/user';
import { UserRepository } from './repositories';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<any> {
    try {
      return this.userRepository.getAll();
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async createUser(input: User): Promise<any> {
    const foundUserByEmail = await this.userRepository.findUnique({
      email: input.email,
    });
    if (foundUserByEmail) throw new ConflictException('Email já cadastrado.');
    try {
      return this.userRepository.create({
        ...input,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUser(input: User): Promise<any> {
    const foundUserByEmail = await this.userRepository.findUnique({
      email: input.email,
    });
    if (!foundUserByEmail) throw new ConflictException('Email não encontrado.');
    try {
      return this.userRepository.findUnique(foundUserByEmail);
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
