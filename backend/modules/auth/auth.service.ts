import { Injectable } from '@nestjs/common';
import { User } from 'interfaces/user';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(input: User, pass: string): Promise<any> {
    const user = await this.usersService.findUser(input.email);
    const passCompared = await bcrypt.compare(input.password, user.password);
    if (pass == user && passCompared) {
      console.log('validate', passCompared);
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
