import { Router } from "express";
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesControllers";
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from "@controllers/usersControllers";
import { loginUser, registerUser } from "@controllers/auth/authControllers";
import { createPosts, deletePosts, findPosts, findPostsById, updatePosts } from "@controllers/postsControllers";
import { getPermissons, verifyToken } from "@middlewares/auth";
import { checkRoles } from "@middlewares/roles";

const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("Api is Healthy!!!");
  });

  // Auth Routes
  router.post("/auth/register", checkRoles, registerUser);
  router.post("/auth/login", loginUser);

  // Users Routes
  router.get("/users", verifyToken, getPermissons, findUsers);
  router.get("/users/:id", verifyToken, getPermissons, findUsersById);
  router.post("/users", verifyToken, getPermissons, checkRoles, createUser);
  router.put("/users/:id", verifyToken, getPermissons, updateUser);
  router.delete("/users/:id", verifyToken, getPermissons, deleteUser);

  // Roles Routes
  router.get("/roles", verifyToken, getPermissons, findRoles);
  router.get("/roles/:id", verifyToken, getPermissons, findRolesById);
  router.post("/roles", verifyToken, getPermissons, createRoles);
  router.put("/roles/:id", verifyToken, getPermissons, updateRoles);
  router.delete("/roles/:id", verifyToken, getPermissons, deleteRoles);

  // Posts Routes
  router.get("/posts", findPosts);
  router.get("/posts/:id", findPostsById);
  router.post("/posts", verifyToken, getPermissons, createPosts);
  router.put("/posts/:id", verifyToken, getPermissons, updatePosts);
  router.delete("/posts/:id", verifyToken, getPermissons, deletePosts);

  return router;
};
