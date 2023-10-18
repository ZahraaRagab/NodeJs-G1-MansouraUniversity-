const { body } = require("express-validator");
const mongoose = require("mongoose");
require("./../Model/childModel");

// use schema
const childSchema = mongoose.model("child");

exports.getAllChild = (request, response, next) => {
  childSchema
    .find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.addChild = (request, response, next) => {
  new childSchema({
 
    fullname: request.body.fullname,
    age: request.body.age,
    level: request.body.level,
    address: request.body.address,
  })
    .save() //insertOne
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateChild = (request, response, next) => {
  childSchema
    .updateOne(
      {
        _id: request.params.id,
      },
      {
        $set: {
          fullname: request.body.fullname,
          age: request.body.age,
          level: request.body.level,
          address: request.body.address,
        },
      }
    )
    .then((data) => {
      if (data.matchedCount == 0) {
        next(new Error("child not found for update"));
      } else response.status(200).json({ message: "child updated" });
    })
    .catch((error) => next(error));
};
exports.deleteChild = (request, response, next) => {
  childSchema
    .deleteOne({ _id: request.params.id })
    .then((data) => {
      if (data.deletedCount == 0) {
        next(new Error("child not found for delete"));
      } else response.status(204).json({ data });
    })
    .catch((error) => next(error));
};

exports.getChild = (request, response, next) => {
  childSchema
    .findOne({ _id: request.params.id })
    .then((data) => {
      if (data == null) {
        next(new Error("child not found "));
      } else response.status(200).json({ data });
    })
    .catch((error) => next(error));
};
