const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const Factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadImageMiddleware");
const User = require("../models/userModel");

exports.UploadUserImage = uploadSingleImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `User-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(196, 196)
    .toFormat("jpeg")
    .jpeg({ quality: 98 })
    .toFile(`uploads/Users/${filename}`);

  //Save Imge In Our DB
  req.body.image = filename;
  next();
});
/**
 * @description Create User
 * @route  POST /api/v1/Users
 * @access Private
 */
exports.createUsers = Factory.createOne(User);

/**
 * @description Get List Users
 * @route  Get /api/v1/Users
 * @access Public
 */
exports.getUsers = Factory.getAll(User);

/**
 * @description Get specific User by  id
 * @route  Get /api/v1/Users/:id
 * @access Public
 */
exports.getUser = Factory.getOne(User);

/**
 * @description Update User by id
 * @route  Put /api/v1/Users/:id
 * @access Private
 */
exports.updateUser = Factory.updateOne(User);

/**
 * @description Delete User by id
 * @route  delete /api/v1/Users/:id
 * @access Private deleteSubCatergory
 */

exports.deleteUser = Factory.deleteOne(User);
