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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const blogs_repository_1 = require("./repositories/blogs.repository");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
let BlogService = class BlogService {
    blogsRepository;
    cloudinaryService;
    constructor(blogsRepository, cloudinaryService) {
        this.blogsRepository = blogsRepository;
        this.cloudinaryService = cloudinaryService;
    }
    async create(createBlogDto) {
        for (const image of createBlogDto.images || []) {
            if (image.publicId) {
                const uploadResult = await this.cloudinaryService.moveImage(image.publicId, image.link);
                image.link = uploadResult.link;
                image.publicId = uploadResult.public_id;
            }
        }
        return await this.blogsRepository.createBlogWithContent(createBlogDto);
    }
    async findAll() {
        return await this.blogsRepository.findAllBlogs();
    }
    async findOne(id) {
        return await this.blogsRepository.findBlogById(id);
    }
    async update(id, updateBlogDto) {
        return await this.blogsRepository.updateBlog(id, updateBlogDto);
    }
    async remove(id) {
        return await this.blogsRepository.deleteBlog(id);
    }
    async createBlogContent(blogId, createContentDto) {
        return await this.blogsRepository.createBlogContent(blogId, createContentDto);
    }
    async updateBlogContent(contentId, updateContentDto) {
        return await this.blogsRepository.updateBlogContent(contentId, updateContentDto);
    }
    async removeBlogContent(contentId) {
        return await this.blogsRepository.deleteBlogContent(contentId);
    }
    async createBlogImage(blogId, createImageDto) {
        return await this.blogsRepository.createBlogImage(blogId, createImageDto);
    }
    async updateBlogImage(imageId, updateImageDto) {
        return await this.blogsRepository.updateBlogImage(imageId, updateImageDto);
    }
    async removeBlogImage(imageId) {
        return await this.blogsRepository.deleteBlogImage(imageId);
    }
    async recordBlogView(createViewDto) {
        return await this.blogsRepository.createBlogView(createViewDto);
    }
    async getBlogViews(blogId) {
        return await this.blogsRepository.getBlogViews(blogId);
    }
    async getUserViews(userId) {
        return await this.blogsRepository.getUserBlogViews(userId);
    }
    async createTag(createTagDto) {
        return await this.blogsRepository.createTag(createTagDto);
    }
    async findAllTags() {
        return await this.blogsRepository.findAllTags();
    }
    async updateTag(id, updateTagDto) {
        return await this.blogsRepository.updateTag(id, updateTagDto);
    }
    async removeTag(id) {
        return await this.blogsRepository.deleteTag(id);
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [blogs_repository_1.BlogsRepository, cloudinary_service_1.CloudinaryService])
], BlogService);
//# sourceMappingURL=blog.service.js.map