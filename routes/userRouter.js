const express = require("express");
const router = express.Router();

const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require("../utils/Validator/userValidator");

const {
  getUser,
  createUsers,
  getUsers,
  updateUser,
  deleteUser,
  UploadUserImage,
  resizeImage,
} = require("../services/userService");

router
  .route("/")
  .get(getUsers)
  .post(UploadUserImage, resizeImage, createUserValidator, createUsers);

router
  .route("/:id")
  .get(getUser)
  .put(UploadUserImage, resizeImage, updateUser)
  .delete(deleteUser);

module.exports = router;
