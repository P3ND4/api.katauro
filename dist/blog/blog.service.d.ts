import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { BlogsRepository } from './repositories/blogs.repository';
import { CreateBlogContentDto, UpdateBlogContentDto, CreateBlogImageDto, UpdateBlogImageDto, CreateBlogViewDto, CreateTagsDto, UpdateTagsDto } from './dto';
import { Blog, BlogContent, BlogImage, BlogView, Tags } from './entities/index';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
export declare class BlogService {
    private readonly blogsRepository;
    private cloudinaryService;
    constructor(blogsRepository: BlogsRepository, cloudinaryService: CloudinaryService);
    create(createBlogDto: CreateBlogDto): Promise<Blog>;
    findAll(): Promise<Blog[]>;
    findOne(id: string): Promise<Blog | null>;
    update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog>;
    remove(id: string): Promise<boolean>;
    createBlogContent(blogId: string, createContentDto: CreateBlogContentDto): Promise<BlogContent>;
    updateBlogContent(contentId: string, updateContentDto: UpdateBlogContentDto): Promise<BlogContent>;
    removeBlogContent(contentId: string): Promise<boolean>;
    createBlogImage(blogId: string, createImageDto: CreateBlogImageDto): Promise<BlogImage>;
    updateBlogImage(imageId: string, updateImageDto: UpdateBlogImageDto): Promise<BlogImage>;
    removeBlogImage(imageId: string): Promise<boolean>;
    recordBlogView(createViewDto: CreateBlogViewDto): Promise<BlogView>;
    getBlogViews(blogId: string): Promise<BlogView[]>;
    getUserViews(userId: string): Promise<BlogView[]>;
    createTag(createTagDto: CreateTagsDto): Promise<Tags>;
    findAllTags(): Promise<Tags[]>;
    updateTag(id: string, updateTagDto: UpdateTagsDto): Promise<Tags>;
    removeTag(id: string): Promise<boolean>;
}
