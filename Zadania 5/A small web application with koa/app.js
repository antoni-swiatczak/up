"use strict";

const PORT = 8080;

const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = `GO TO: http://127.0.0.1:${PORT}/hello OR http://127.0.0.1:${PORT}/goodbye`;
});

router.get("/hello", (ctx) => {
  ctx.body = "Hello, world";
});

router.get("/goodbye", (ctx) => {
  ctx.body = "Goodbye, world";
});

app.use(router.routes());

app.listen(PORT);
console.log(`App's listening under: http://127.0.0.1:${PORT}`);