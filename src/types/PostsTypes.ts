import { Query, Repository } from "./RepositoryTypes";

export interface Posts extends Document {
  title: string;
  description?: string;
  content?: string;
  featureImage?: string;
  author: string;
}

export interface IPostsRepository extends Repository<Posts> {}

export interface IPostsService {
  createPosts(Posts: Posts): Promise<Posts>;
  findPosts(query?: Query): Promise<Posts[]>;
  findPostsById(id: string): Promise<Posts | null>;
  updatePosts(id: string, Posts: Partial<Posts>): Promise<Posts | null>;
  deletePosts(id: string): Promise<boolean>;
}
