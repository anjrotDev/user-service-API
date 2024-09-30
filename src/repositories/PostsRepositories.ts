import { PostsModel } from "@models/Posts";
import { IPostsRepository, Posts } from "types/PostsTypes";

export class PostsRepository implements IPostsRepository {
  async create(data: Posts): Promise<Posts> {
    const newPosts = new PostsModel(data);
    return await newPosts.save();
  }

  async find(): Promise<Posts[]> {
    return await PostsModel.find().exec();
  }

  async findById(id: string): Promise<Posts | null> {
    return await PostsModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Posts>): Promise<Posts | null> {
    return await PostsModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await PostsModel.findByIdAndDelete(id).exec();
    return deleted !== null;
  }
}
