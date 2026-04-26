"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
class Blog {
    id;
    title;
    createdAt;
    updatedAt;
    introduction;
    images;
    blogContent;
    BlogView;
    tags;
}
exports.Blog = Blog;
class BlogTags {
    blogId;
    tagId;
    blog;
    tag;
}
//# sourceMappingURL=blog.entity.js.map