import { IPostsRepository, IPostsService, Posts } from "types/PostsTypes";

export class PostsService implements IPostsService {
  private PostsRepository: IPostsRepository;

  constructor(PostsRepository: IPostsRepository) {
    this.PostsRepository = PostsRepository;
  }

  async createPosts(posts: Posts): Promise<Posts> {
    return this.PostsRepository.create(posts);
  }

  async findPosts(): Promise<Posts[]> {
    return this.PostsRepository.find();
  }

  async findPostsById(id: string): Promise<Posts | null> {
    return this.PostsRepository.findById(id);
  }

  async updatePosts(id: string, posts: Partial<Posts>): Promise<Posts | null> {
    return this.PostsRepository.update(id, posts);
  }

  async deletePosts(id: string): Promise<boolean> {
    return this.PostsRepository.delete(id);
  }
}
