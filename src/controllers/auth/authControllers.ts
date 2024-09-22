import { UserRepository } from "@repositories/userRepositories";
import { UserService } from "@services/userService";
import { json, Request, Response } from "express";
import { IUserRepository, IUserService, User } from "types/UsersTypes";
import jwt from "jsonwebtoken";

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email }: User = req.body;
    const userExists = await userService.findUsersByEmail(email);
    if (userExists) return res.status(400).json({ message: "Email already exists!!!" });

    const newUser = await userService.createUser(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password }: User = req.body;

    const user = await userService.findUsersByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid user or password" });

    const comparePass = await user.comparePassword(password);
    if (!comparePass) return res.status(400).json({ message: "Invalid user or password" });

    const token = jwt.sign({ id: user._id, email: user.email, username: user.username }, "ClaveSecreta", { expiresIn: "1h" });

    res.json(token);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json(error);
  }
};
