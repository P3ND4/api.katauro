import { Blog } from './blog.entity';
import { User } from '../../users/entities/user.entity';
export declare class BlogView {
    blogId: string;
    UserId: string;
    viewedAt: Date;
    introduction: string;
    User?: User;
    Blog?: Blog;
}
