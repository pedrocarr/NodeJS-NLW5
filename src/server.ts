import express, { response } from "express";

const app = express();
/**
 * GET = BUSCAS
 * POST = CRIAÇÃO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO
 * 
 */

app.get("/", (request, response) => {
  return response.send("Olá NLW05!!")
})



app.listen(3333, () => console.log("Server is running on port 3333"));