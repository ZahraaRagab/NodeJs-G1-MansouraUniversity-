const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, require: [true, "name is required"] },
  supervisor: { type: mongoose.Types.ObjectId, ref: "teachers" },
  children: { type: [mongoose.Types.ObjectId], ref: "child" },
});

mongoose.model("classes", schema);
