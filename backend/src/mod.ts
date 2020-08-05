import { Application, log, send } from "./deps.ts";
import api from "./api.ts";

const app = new Application();
const PORT = 8000;
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
  },
  loggers: {
    default: {
      level: "INFO",
      handlers: ["console"],
    },
  },
});

//Log error when crashed
app.addEventListener("error", (event) => {
  log.error(event.error);
});

//First Middleware - Catches APP errors and causes app to return 500 - internal server error
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.body = "Internal server error";
    throw err;
  }
});

//Second Middleware - Logs X-Response-Time
app.use(async function (ctx, next) {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  log.info(`${ctx.request.method} ${ctx.request.url}: ${time}`);
});

//Third Middleware - Adds server response time into X-Response-Time header
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

//Fourth Middleware - Handles api endpoints
app.use(api.routes());
//Fifth MiddleWare - Handles allowed methods
app.use(api.allowedMethods());

//Sixth MiddleWare - Handles static resources
app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = [
    "/index.html",
    "/bundle.js",
  ];
  if (fileWhitelist.includes(filePath)) {
    if (filePath === "/bundle.js") {
      await send(ctx, filePath, {
        root: `${Deno.cwd()}/../frontend/dist`,
      });
    } else {
      await send(ctx, filePath, {
        root: `${Deno.cwd()}/../public`,
      });
    }
  }
});

//Initializes server when called as main.
if (import.meta.main) {
  log.info(`Starting server on port ${PORT}...`);
  await app.listen({
    port: PORT,
  });
}
