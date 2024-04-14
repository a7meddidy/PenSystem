const asyncHandler = require("express-async-handler");
const multer = require("multer");
const path = require("path");
const Pdf = require("../models/PdfModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
});

exports.UploadFile = upload.single("file");
exports.uploaadFile = asyncHandler(async (req, res) => {
  const { originalname, filename, size } = req.file;

  const fileData = new Pdf({
    originalName: originalname,
    filePath: path.join(__dirname, "uploads", filename),
    size,
  });
  await fileData.save();

  res.json(req.file);
});

(exports.uploadFiles = upload.array("files", 4)),
  (exports.uploaadFils = asyncHandler(async (req, res) => {
    const filesData = req.files.map((file) => ({
      originalName: file.originalname,
      filePath: path.join(__dirname, "uploads", file.filename),
      size: file.size,
    }));
    await Pdf.insertMany(filesData);

    res.json(req.files);
  }));

exports.getAllFiles = asyncHandler(async (req, res) => {
  const files = await Pdf.find({});
  res.json(files);
  if (!files) {
    return next(new ApiError(`Error reading files from database`, 404));
  }
});
