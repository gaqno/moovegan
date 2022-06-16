import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreate } from './interfaces/user';
import { yupUserCreate } from 'src/yup/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post('/user')
  async createUser(@Body() input: UserCreate) {
    const isValidInput = yupUserCreate.isValidSync(input);
    if (!isValidInput) throw new BadRequestException('Seu input está inválido');
    return this.userService.createUser(input);
  }
}
