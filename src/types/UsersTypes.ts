import { Repository } from "./RepositoryTypes";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface IUserRepository extends Repository<User> {}

export interface IUserService {
  createUser(user: User): Promise<User>;
  findUsers(): Promise<User[]>;
  findUsersById(id: string): Promise<User | null>;
  updateUser(id: string, user: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
}
