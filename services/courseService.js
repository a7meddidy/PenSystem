const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

const Factory = require("./handlersFactory");
const { uploadSingleImage } = require("../middlewares/uploadImageMiddleware");
const Course = require("../models/courseModel");

exports.UploadCourseImage = uploadSingleImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `Course-${uuidv4()}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(600, 600)
    .toFormat("jpeg")
    .jpeg({ quality: 98 })
    .toFile(`uploads/Courses/${filename}`);

  //Save Imge In Our DB
  req.body.image = filename;
  next();
});
/**
 * @description Get List Courses
 * @route  Get /api/v1/Courses
 * @access Public
 */
exports.getCourses = Factory.getAll(Course);

/**
 * @description Get specific Course by  id
 * @route  Get /api/v1/Courses/:id
 * @access Public
 */
exports.getCourse = Factory.getOne(Course);

/**
 * @description Create Course
 * @route  POST /api/v1/Courses
 * @access Private
 */
exports.createCourse = Factory.createOne(Course);
/**
 * @description Update Course by id
 * @route  Put /api/v1/Courses/:id
 * @access Private
 */
exports.updateCourse = Factory.updateOne(Course);

/**
 * @description Delete Course by id
 * @route  delete /api/v1/Courses/:id
 * @access Private
 */

exports.deleteCourse = Factory.deleteOne(Course);

exports.FristYear = asyncHandler(async (req, res) => {
  const year = req.params.year;
  const courses = await Course.find({ year: year });

  res.status(200).json({ results: courses.length, data: courses });
  // .populate({ path: 'category', select: 'name -_id' });
});
