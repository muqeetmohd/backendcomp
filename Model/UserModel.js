const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    location: {
      type: String,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user"],
      default: "user",
    },
    resume: {
      type: String,
    },
    bio: {
      type: String,
    },
    profilePictures: [String],
  },
  { timestamps: true } // to keep track when the change was done
);

// Hashing Password
UserSchema.pre("save", async function (next) {
  const password = this.password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  this.password = hashedPassword;
  next();
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
