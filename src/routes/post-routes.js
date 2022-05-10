import { validateRequest } from "../middleware/auth.js";
import * as postscontroller from "../controllers/post-controller.js";

export default {
  create: {
    method: "POST",
    url: "/petweet",
    preHandler: [validateRequest],
    handler: postscontroller.create,
  },
  removePost: {
    method: "DELETE",
    url: "/petweet",
    preHandler: [validateRequest],
    handler: postscontroller.removePost,
  },
  getPosts: {
    method: "GET",
    url: "/petweet",
    preHandler: [validateRequest],
    handler: postscontroller.getPosts,
  },
};
