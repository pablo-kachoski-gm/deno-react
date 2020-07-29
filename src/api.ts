import { Router } from "./deps.ts";
import getUsers from "./users/api/get-users.ts";
import getProducts from "./products/api/get-products.ts";

const router = new Router();
const apiBaseURL = "/api";
router.get("/", (ctx) => {
  ctx.response.body = "Hello World";
});

router.get(`${apiBaseURL}/users`, getUsers);
router.get(`${apiBaseURL}/products`, getProducts);

export default router;
