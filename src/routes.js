
// routes.js
const { Router } = require("express"); // Correção aqui

const routes = new Router();

routes.get("/", (request, response) => {
  return response.json({ message: "hello world" });
});

module.exports = routes;
