import { Router } from "express";
import { createRoles, deleteRoles, findRoles, findRolesById, updateRoles } from "@controllers/rolesControllers";
import { createUser, deleteUser, findUsers, findUsersById, updateUser } from "@controllers/usersControllers";
import { loginUser, registerUser } from "@controllers/auth/authControllers";
import { createPosts, deletePosts, findPosts, findPostsById, updatePosts } from "@controllers/postsControllers";

const router = Router();

export default () => {
  router.get("/health", (req, res) => {
    res.send("Api is Healthy!!!");
  });

  // Auth Routes
  router.post("/auth/register", registerUser);
  router.post("/auth/login", loginUser);

  // Users Routes
  router.get("/users", findUsers);
  router.get("/users/:id", findUsersById);
  router.post("/users", createUser);
  router.put("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);

  // Roles Routes
  router.get("/roles", findRoles);
  router.get("/roles/:id", findRolesById);
  router.post("/roles", createRoles);
  router.put("/roles/:id", updateRoles);
  router.delete("/roles/:id", deleteRoles);

  // Roles Routes
  router.get("/posts", findPosts);
  router.get("/posts/:id", findPostsById);
  router.post("/posts", createPosts);
  router.put("/posts/:id", updatePosts);
  router.delete("/posts/:id", deletePosts);

  return router;
};
