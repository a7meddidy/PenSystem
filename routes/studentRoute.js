const express = require("express");

const {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../services/studentService");

const router = express.Router();

router.route("/").post(createStudent).get(getStudents);

router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
