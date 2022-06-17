import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { User } from 'interfaces/user';
import { AuthService } from 'modules/auth/auth.service';
import { JwtAuthGuard } from 'modules/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'modules/auth/guards/local-auth.guard';
import { UsersService } from 'modules/users/users.service';
import { yupUserCreate } from './yup/user';
@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }

  @Get('/users')
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post('/user')
  async createUser(@Body() input: User) {
    const isValidInput = yupUserCreate.isValidSync(input);
    if (!isValidInput) throw new BadRequestException('Seu input está inválido');
    return this.usersService.createUser(input);
  }
}
