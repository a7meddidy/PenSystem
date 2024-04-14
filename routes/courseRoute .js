const express = require("express");

const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  FristYear,
  UploadCourseImage,
  resizeImage,
} = require("../services/courseService");

const router = express.Router();

router
  .route("/")
  .get(getCourses)
  .post(UploadCourseImage, resizeImage, createCourse);
router
  .route("/:id")
  .get(getCourse)
  .put(UploadCourseImage, resizeImage, updateCourse)
  .delete(deleteCourse);

module.exports = router;
