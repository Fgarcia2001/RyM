const { Router } = require("express");
const {
  getCharacterHandler,
  getCharacterByIdHandler,
} = require("../handlers/characterHandler");

const characterRouter = Router();

characterRouter.get("/", getCharacterHandler);
characterRouter.get("/:id", getCharacterByIdHandler);
module.exports = characterRouter;
