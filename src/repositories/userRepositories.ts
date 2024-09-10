import { IUserRepository, User } from "types/UsersTypes";

export class UserRepository implements IUserRepository {
  private users: User[] = [];

  async create(data: User): Promise<User> {
    this.users.push(data);
    return data;
  }

  async find(): Promise<User[]> {
    return this.users;
  }
}
