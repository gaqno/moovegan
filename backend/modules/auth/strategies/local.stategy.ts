import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from 'interfaces/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(input: User): Promise<any> {
    const user = await this.authService.validateUser(
      input.email,
      input.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
