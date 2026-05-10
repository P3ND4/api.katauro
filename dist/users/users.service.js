"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma/prisma.service");
const users_repository_1 = require("./users.repository");
const bcrypt = __importStar(require("bcrypt"));
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let UsersService = class UsersService {
    prismaService;
    usersRepository;
    cloudyServ;
    constructor(prismaService, usersRepository, cloudyServ) {
        this.prismaService = prismaService;
        this.usersRepository = usersRepository;
        this.cloudyServ = cloudyServ;
    }
    async create(createUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        const defaultImage = 'https://res.cloudinary.com/dmhadvchw/image/upload/q_auto,f_auto/v1778375147/Captura_de_pantalla_2026-05-09_210500_mxi00l.png';
        createUserDto.image = defaultImage;
        return await this.usersRepository.createUser(createUserDto);
    }
    ;
    async findAll() {
        return this.usersRepository.findAllUsers();
    }
    async findOne(id) {
        return this.usersRepository.findUserById(id);
    }
    async update(id, updateUserDto) {
        let cloudyUpdate = updateUserDto.publicId && updateUserDto.image ? await this.cloudyServ.moveImage(updateUserDto.publicId, updateUserDto.image) : { link: updateUserDto.image, public_id: undefined };
        [updateUserDto.image, updateUserDto.publicId] = [cloudyUpdate.link, cloudyUpdate.public_id];
        if (updateUserDto.password)
            updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
        return this.usersRepository.updateUser(id, updateUserDto);
    }
    async remove(id) {
        return this.usersRepository.deleteUser(id);
    }
    async findUserByEmail(email) {
        return this.usersRepository.findUserByEmail(email);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, users_repository_1.UsersRepository, cloudinary_service_1.CloudinaryService])
], UsersService);
//# sourceMappingURL=users.service.js.map