import { Module } from '@nestjs/common';
import { AuthModule } from 'modules/auth/auth.module';
import { PrismaModule } from 'modules/prisma';
import { UsersModule } from 'modules/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
