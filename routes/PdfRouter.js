const express = require("express");

const {
  getAllFiles,
  UploadFile,
  uploadFiles,
  uploaadFile,
  uploaadFils,
} = require("../services/PdfService");

const router = express.Router();

router.route("/").get(getAllFiles);
router.route("/uploads").post(UploadFile, uploaadFile);
router.route("/multi-upload").post(uploadFiles, uploaadFils);
module.exports = router;
