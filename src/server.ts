import express, { response } from "express";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));
/**
 * GET = BUSCAS
 * POST = CRIAÇÃO
 * PUT = ALTERAÇÃO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO
 * 
 */

/* app.get("/", (request, response) => {
  return response.json({
    message: "Hello NLW 05!",
  });
});

app.post("/", (request, response) => {
  return response.json({
  message: "User has been saved successfully!",
  });
});




*/