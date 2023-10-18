const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullname: { type: String, required: true },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: [2, "age must be greater than 2"],
    max: [6, "age must be less than 6"],
  },

  level: {
    type: String,
    required: [true, "level is required"],
    enum: {
      values: ["PreKG", "KG1", "KG2"],
      message: "level must be PreKG or KG1 or KG2",
    },
  },
  address: { type: Object, required: [true, "address is required"] },
});

mongoose.model("child", schema);
