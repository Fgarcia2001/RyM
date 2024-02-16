const { Router } = require("express");
const usersRouter = require("./usersRouter");
const characterRouter = require("./characterRouter");
const favoritesRouter = require("./favoritesRouter");
const router = Router();

router.use("/user", usersRouter);
router.use("/characters", characterRouter);
router.use("/favorites", favoritesRouter);
module.exports = router;
