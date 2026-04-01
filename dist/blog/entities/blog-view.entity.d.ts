import { Blog } from './blog.entity';
import { User } from '../../users/entities/user.entity';
export declare class BlogView {
    blogId: string;
    UserId: string;
    viewedAt: Date;
    User?: User;
    Blog?: Blog;
}
