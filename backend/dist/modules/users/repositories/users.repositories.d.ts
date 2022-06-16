import { Prisma } from '.prisma/client';
import { PrismaService } from 'modules/prisma';
export declare class UserRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<import(".prisma/client").User[]>;
    findUnique(input: Prisma.UserWhereUniqueInput): Promise<import(".prisma/client").User>;
    create(input: Prisma.UserCreateInput): Promise<import(".prisma/client").User>;
    update(input: Prisma.UserUpdateInput, id: number): Promise<import(".prisma/client").User>;
    delete(id: number): Promise<import(".prisma/client").User>;
}
