const express = require("express");
const router = express.Router();

const {
  getLectures,
  createLecture,
  getLecture,
  updateLecture,
  deleteLecture,
} = require("../services/lectureService");

router.route("/").get(getLectures).post(createLecture);

router.route("/:id").get(getLecture).put(updateLecture).delete(deleteLecture);

module.exports = router;
