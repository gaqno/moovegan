import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRepository } from './repositories';

@Module({
  providers: [UserRepository, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
