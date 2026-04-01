import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { CreateBlogContentDto, UpdateBlogContentDto, CreateBlogImageDto, UpdateBlogImageDto, CreateBlogViewDto, CreateTagsDto, UpdateTagsDto } from './dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    create(createBlogDto: CreateBlogDto): Promise<import("./entities").Blog>;
    findAll(): Promise<import("./entities").Blog[]>;
    findOne(id: string): Promise<import("./entities").Blog | null>;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<import("./entities").Blog>;
    remove(id: string): Promise<boolean>;
    createContent(blogId: string, createContentDto: CreateBlogContentDto): Promise<import("./entities").BlogContent>;
    updateContent(contentId: string, updateContentDto: UpdateBlogContentDto): Promise<import("./entities").BlogContent>;
    removeContent(contentId: string): Promise<boolean>;
    createImage(blogId: string, createImageDto: CreateBlogImageDto): Promise<import("./entities").BlogImage>;
    updateImage(imageId: string, updateImageDto: UpdateBlogImageDto): Promise<import("./entities").BlogImage>;
    removeImage(imageId: string): Promise<boolean>;
    recordView(createViewDto: CreateBlogViewDto): Promise<import("./entities").BlogView>;
    getBlogViews(blogId: string): Promise<import("./entities").BlogView[]>;
    getUserViews(userId: string): Promise<import("./entities").BlogView[]>;
    createTag(createTagDto: CreateTagsDto): Promise<import("./entities").Tags>;
    findAllTags(): Promise<import("./entities").Tags[]>;
    updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<import("./entities").Tags>;
    removeTag(id: string): Promise<boolean>;
}
