const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    level: {
      type: Number,
      enum: [1, 2, 3, 4],
      required: [true, "level required"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "student must be belong to user"],
    },
    department: {
      type: String,
      enum: ["CS", "IS", "Software", "Bio"],
      required: [true, "department required"],
    },

    lectureEnrollment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
        required: [true, "lectureEnrollment required"],
      },
    ],
    sectionEnrollment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: [true, "sectionEnrollment required"],
      },
    ],
  },
  { timestamps: true }
);

studentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "lectureEnrollment",
    select: "pdfs -_id",
  });
  this.populate({
    path: "sectionEnrollment",
    select: "pdfs -_id",
  });

  next();
});

module.exports = mongoose.model("Student", studentSchema);
