const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  pdfs: {
    type: mongoose.Schema.ObjectId,
    ref: "Pdf",
    required: [true, "Pdf Required"],
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "section must be belong to doctor"],
  },
  lecturesNumber: {
    type: Number,
    required: [true, "lecturesNumber required"],
  },
});

lectureSchema.pre(/^find/, function (next) {
  this.populate({
    path: "pdfs",
    select: "originalName -_id",
  });
  this.populate({
    path: "doctor",
    select: "Username -_id",
  });

  next();
});

module.exports = mongoose.model("Lecture", lectureSchema);
