const express = require("express");
const UserRouter = express.Router();

// Controllers
const UserController = require("../Controller/UserController");

const {
} = require("../Validation/UserDataRules");

const {
} = require("../Validation/ValidationMiddleware");
const {
    userAuthorizationHandler,
} = require("./../Middleware/UserAuthorizationMiddleware");
UserRouter.route("/")
    .get(userAuthorizationHandler("admin"), UserController.getAllUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteAllUser);

UserRouter.route("/:id")
    .get(UserController.getSingleUser)
    .delete(userAuthorizationHandler("admin"), UserController.deleteUser);

module.exports = UserRouter;

