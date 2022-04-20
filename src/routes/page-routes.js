import { validateRequest } from "../middleware/auth.js";
import * as pagecontroller from "../controllers/page-controller.js";

export default {
  index: {
    method: "GET",
    url: "/page",
    preHandler: [validateRequest],
    handler: pagecontroller.getAllPetweets,
  },
  GetPetweets: {
    method: "GET",
    url: "/pages",
    preHandler: [validateRequest],
    handler: pagecontroller.getPetweets,
  },
};
