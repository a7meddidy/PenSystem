const express = require("express");

const {
  getSections,
  createSections,
  getSection,
  updateSection,
  deleteSection,
} = require("../services/sectionService");

const router = express.Router();

router.route("/").get(getSections).post(createSections);

router.route("/:id").get(getSection).put(updateSection).delete(deleteSection);

module.exports = router;
