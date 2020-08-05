import { Router, send } from "./deps.ts";
import getUsers from "./users/api/get-users.ts";
import getProducts from "./products/api/get-products.ts";

const router = new Router();
const apiBaseURL = "/api";
router.get(`${apiBaseURL}/users`, getUsers);
router.get(`${apiBaseURL}/products`, getProducts);

router.get("/", async (ctx) => {
  await send(ctx, "index.html", {
    root: `${Deno.cwd()}/../public`,
  });
});
export default router;
