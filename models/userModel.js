const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//1-create Schema
const userSchema = new mongoose.Schema(
  {
    Username: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "username required"],
      minlength: [3, "Too Short username"],
      maxlength: [32, "Too long username"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    universityEmail: {
      type: String,
      unique: true,
      required: [true, "email required"],
      lowercase: true,
    },

    Phone: String,
    password: {
      type: String,
      required: [true, "password required"],
      minlength: [8, "too short password"],
    },
    passwordChangeAt: String,
    passwordResetCode: String,
    passwordResetExpires: Date,
    passwordResetVerified: Boolean,
    role: {
      type: String,
      default: "student",
      enum: ["admin", "student", "doctor", "assistant"],
    },
    city: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
    },
    joinYear: {
      type: Date,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   //Hashing user password
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// const setImageURL = (doc) => {
//   if (doc.profileImg) {
//     const imageUrl = `${process.env.BASE_URL}/users/${doc.profileImg}`;
//     doc.profileImg = imageUrl;
//   }
// };
// //findALL , findOne , update
// userSchema.post("init", (doc) => {
//   setImageURL(doc);
// });

// //create
// userSchema.post("save", (doc) => {
//   setImageURL(doc);
// });
const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/Users/${doc.image}`;
    doc.image = imageUrl;
  }
};

userSchema.post("init", (doc) => {
  //return image base url + image name
  setImageURL(doc);
});
userSchema.post("save", (doc) => {
  //return image base url + image name
  setImageURL(doc);
});

//2-create Model
module.exports = mongoose.model("User", userSchema);
