import { Blog } from './blog.entity';
import { User } from '../../users/entities/user.entity';

export class BlogView {
  blogId: string;
  UserId: string;
  viewedAt: Date;
  introduction: string;
  User?: User;
  Blog?: Blog;
}
