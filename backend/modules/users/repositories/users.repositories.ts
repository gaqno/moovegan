import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'modules/prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.user.findMany();
  }

  async findUnique(input: Prisma.UserWhereUniqueInput) {
    return this.prismaService.user.findUnique({
      where: input,
    });
  }

  async create(input: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    return this.prismaService.user.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });
  }

  async update(input: Prisma.UserUpdateInput, id: number) {
    return this.prismaService.user.update({
      data: input,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
