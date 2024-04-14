const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  term: {
    type: String,
    enum: ["first", "second"],
    required: [true, "term required"],
  },
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture",
    required: [true, "lecture required"],
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    required: [true, "section required"],
  },
  year: {
    type: String,
    enum: ["first", "second", "third", "forth"],
    required: [true, "year required"],
  },
  image: {
    type: String,
  },
});
const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/Courses/${doc.image}`;
    doc.image = imageUrl;
  }
};

courseSchema.post("init", (doc) => {
  //return image base url + image name
  setImageURL(doc);
});
courseSchema.post("save", (doc) => {
  //return image base url + image name
  setImageURL(doc);
});

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: "lecture",
    select: "doctor  lecturesNumber -_id",
  });
  this.populate({
    path: "section",
    select: "doctor sectionsNumber -_id",
  });

  next();
});

module.exports = mongoose.model("Course", courseSchema);
