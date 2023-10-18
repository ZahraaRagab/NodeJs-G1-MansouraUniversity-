const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullname: { type: String, required: [true, "fullname is required"] },
  password: { type: String, required: [true, "password is required"] },
  email: { type: String, required: [true, "email is required"], unique: true },
  image: { type: String, required: [true, "image is required"] },
});

mongoose.model("teachers", schema);
