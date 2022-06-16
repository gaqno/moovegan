"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../prisma");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getAll() {
        return this.prismaService.user.findMany();
    }
    async findUnique(input) {
        return this.prismaService.user.findUnique({
            where: input,
        });
    }
    async create(input) {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        return this.prismaService.user.create({
            data: Object.assign(Object.assign({}, input), { password: hashedPassword }),
        });
    }
    async update(input, id) {
        return this.prismaService.user.update({
            data: input,
            where: {
                id,
            },
        });
    }
    async delete(id) {
        return this.prismaService.user.delete({
            where: {
                id,
            },
        });
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_1.PrismaService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=users.repositories.js.map