import express, { Application, NextFunction, Request, Response } from "express";
import db from "./models";
import { users } from "./seeders/users.seeder";
import { posts } from "./seeders/posts.seeder";
import { PostAttributes } from "./types/post.types";

const app: Application = express();

const port = process.env.PORT || 3000;

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello World");
// });

// const createUser = () => {
//   db.User.create(users[0]);
// };

// createUser();

// const createPost = () => {
//   posts.map((post: PostAttributes) => {
//     db.Post.create(post);
//   });
// };

// createPost();

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log("Server running"));
});
