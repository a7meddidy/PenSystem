const mongoose = require("mongoose");

const PdfSchema = new mongoose.Schema({
  originalName: String,
  filePath: String,
  size: Number,
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pdf", PdfSchema);
