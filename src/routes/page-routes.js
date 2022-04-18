import { validateRequest } from "../middleware/auth.js";
import * as pagecontroller from "../controllers/page-controller.js";

export default {
  index: {
    method: "GET",
    url: "/page",
    preHandler: [validateRequest],
    handler: pagecontroller.index,
  },
  Userposts: {
    method: "GET",
    url: "/pages",
    preHandler: [validateRequest],
    handler: pagecontroller.userPosts,
  },
};
