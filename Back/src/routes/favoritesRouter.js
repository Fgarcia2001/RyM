const { Router } = require("express");
const {
  postFavoritesHandler,
  getFavoritesHandler,
} = require("../handlers/favoritesHandler");
const router = require(".");
const favoritesRouter = Router();

favoritesRouter.post("/", postFavoritesHandler);
favoritesRouter.get("/", getFavoritesHandler);
module.exports = favoritesRouter;
