import { User } from "../../src/types/UsersTypes";

declare global {
  namespace Express {
    interface Request {
      currentUser: User;
    }
  }
}
