const { Router } = require("express");
const {
  getUsersHandler,
  postUsersHandler,
} = require("../handlers/usersHandlers");
const usersRouter = Router();

usersRouter.post("/login", getUsersHandler);
usersRouter.post("/signup", postUsersHandler);

module.exports = usersRouter;
