const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    default: 100,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
