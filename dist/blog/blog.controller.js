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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const common_1 = require("@nestjs/common");
const blog_service_1 = require("./blog.service");
const create_blog_dto_1 = require("./dto/create-blog.dto");
const update_blog_dto_1 = require("./dto/update-blog.dto");
const dto_1 = require("./dto");
const admin_guard_1 = require("../shared/guards/admin/admin.guard");
const owner_guard_1 = require("../shared/guards/ouwner/owner.guard");
let BlogController = class BlogController {
    blogService;
    constructor(blogService) {
        this.blogService = blogService;
    }
    create(createBlogDto) {
        return this.blogService.create(createBlogDto);
    }
    findAll(sortBy, tags, search, page, includeDrafts) {
        return this.blogService.findAll({ sortBy, tags, search, page: page ? +page : undefined, includeDrafts: includeDrafts === 'true' });
    }
    findPages(tags, search, includeDrafts) {
        return this.blogService.getPages({ tags, search, includeDrafts: includeDrafts === 'true' });
    }
    getStatsOverview() {
        return this.blogService.getStatsOverview();
    }
    getStatsTimeline(months) {
        return this.blogService.getStatsTimeline(months ? +months : undefined);
    }
    getStatsArticles() {
        return this.blogService.getStatsArticles();
    }
    findOne(id, includeDrafts) {
        return this.blogService.findOne(id, includeDrafts === 'true');
    }
    update(id, updateBlogDto) {
        return this.blogService.update(id, updateBlogDto);
    }
    remove(id) {
        return this.blogService.remove(id);
    }
    createContent(blogId, createContentDto) {
        return this.blogService.createBlogContent(blogId, createContentDto);
    }
    updateContent(contentId, updateContentDto) {
        return this.blogService.updateBlogContent(contentId, updateContentDto);
    }
    removeContent(contentId) {
        return this.blogService.removeBlogContent(contentId);
    }
    createImage(blogId, createImageDto) {
        return this.blogService.createBlogImage(blogId, createImageDto);
    }
    updateImage(imageId, updateImageDto) {
        return this.blogService.updateBlogImage(imageId, updateImageDto);
    }
    removeImage(imageId) {
        return this.blogService.removeBlogImage(imageId);
    }
    recordView(createViewDto, userId) {
        createViewDto.UserId = userId;
        return this.blogService.recordBlogView(createViewDto);
    }
    getBlogViews(blogId) {
        return this.blogService.getBlogViews(blogId);
    }
    getUserViews(userId) {
        return this.blogService.getUserViews(userId);
    }
    recordPublicView(blogId, userId, req) {
        const ipAddress = req.ip || req.socket.remoteAddress || '';
        return this.blogService.recordView(blogId, userId, ipAddress);
    }
    updateMetrics(blogId, metrics) {
        return this.blogService.updateMetrics(blogId, metrics);
    }
    getAnalytics(blogId) {
        return this.blogService.getAnalytics(blogId);
    }
    createTag(createTagDto) {
        return this.blogService.createTag(createTagDto);
    }
    findAllTags() {
        return this.blogService.findAllTags();
    }
    updateTag(id, updateTagDto) {
        return this.blogService.updateTag(id, updateTagDto);
    }
    removeTag(id) {
        return this.blogService.removeTag(id);
    }
};
exports.BlogController = BlogController;
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_blog_dto_1.CreateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sortBy')),
    __param(1, (0, common_1.Query)('tags')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('includeDrafts')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('pages/total'),
    __param(0, (0, common_1.Query)('tags')),
    __param(1, (0, common_1.Query)('search')),
    __param(2, (0, common_1.Query)('includeDrafts')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findPages", null);
__decorate([
    (0, common_1.Get)('stats/overview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getStatsOverview", null);
__decorate([
    (0, common_1.Get)('stats/timeline'),
    __param(0, (0, common_1.Query)('months')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getStatsTimeline", null);
__decorate([
    (0, common_1.Get)('stats/articles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getStatsArticles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('includeDrafts')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_dto_1.UpdateBlogDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(':blogId/content'),
    __param(0, (0, common_1.Param)('blogId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateBlogContentDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createContent", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)('content/:contentId'),
    __param(0, (0, common_1.Param)('contentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateBlogContentDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateContent", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('content/:contentId'),
    __param(0, (0, common_1.Param)('contentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "removeContent", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)(':blogId/images'),
    __param(0, (0, common_1.Param)('blogId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.CreateBlogImageDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createImage", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Patch)('images/:imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateBlogImageDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateImage", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Delete)('images/:imageId'),
    __param(0, (0, common_1.Param)('imageId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "removeImage", null);
__decorate([
    (0, common_1.UseGuards)(owner_guard_1.OwnerGuard),
    (0, common_1.Post)('views/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateBlogViewDto, String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "recordView", null);
__decorate([
    (0, common_1.Get)(':blogId/views'),
    __param(0, (0, common_1.Param)('blogId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getBlogViews", null);
__decorate([
    (0, common_1.Get)('user/:userId/views'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getUserViews", null);
__decorate([
    (0, common_1.Post)(':id/view'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "recordPublicView", null);
__decorate([
    (0, common_1.Patch)(':id/metrics'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateBlogMetricsDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateMetrics", null);
__decorate([
    (0, common_1.Get)(':id/analytics'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "getAnalytics", null);
__decorate([
    (0, common_1.Post)('tags'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTagsDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "createTag", null);
__decorate([
    (0, common_1.Get)('tags/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "findAllTags", null);
__decorate([
    (0, common_1.Patch)('tags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateTagsDto]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "updateTag", null);
__decorate([
    (0, common_1.Delete)('tags/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogController.prototype, "removeTag", null);
exports.BlogController = BlogController = __decorate([
    (0, common_1.Controller)('blogs'),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogController);
//# sourceMappingURL=blog.controller.js.map