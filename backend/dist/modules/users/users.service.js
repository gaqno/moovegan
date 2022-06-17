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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const repositories_1 = require("./repositories");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUsers() {
        try {
            return this.userRepository.getAll();
        }
        catch (_a) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async createUser(input) {
        const foundUserByEmail = await this.userRepository.findUnique({
            email: input.email,
        });
        if (foundUserByEmail)
            throw new common_1.ConflictException('Email já cadastrado.');
        try {
            return this.userRepository.create(Object.assign({}, input));
        }
        catch (_a) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findUser(input) {
        const foundUserByEmail = await this.userRepository.findUnique({
            email: input.email,
        });
        if (!foundUserByEmail)
            throw new common_1.ConflictException('Email não encontrado.');
        try {
            return this.userRepository.findUnique(foundUserByEmail);
        }
        catch (_a) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map