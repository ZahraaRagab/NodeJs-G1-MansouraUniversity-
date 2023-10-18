const { body } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("./../Model/teacherModel");

const saltRounds = 10;
const teacherSchema = mongoose.model("teachers");

exports.getAllTeacher = (request, response, next) => {
  teacherSchema
    .find({})
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => next(error));
};

exports.getTeacherById = (request, response, next) => {
  teacherSchema
    .findById(request.params.id)
    .then((data) => {
      if (data == null) {
        next(new Error("teacher not found"));
      } else response.status(200).json({ teacher: data });
    })
    .catch((error) => next(error));
};

exports.addTeacher = (request, response, next) => {
  let hash = bcrypt.hashSync(request.body.password, saltRounds);
  new teacherSchema({
    _id: request.body._id,
    fullname: request.body.fullname,
    email: request.body.email,
    password: hash,
    image: request.body.image,
  })
    .save() //insertOne
    .then((data) => {
      response.status(201).json({ data });
    })
    .catch((error) => next(error));
};

exports.updateTeacher = (request, response, next) => {
  const teacher = teacherSchema
    .findByIdAndUpdate(request.params.id, request.body)
    .then((data) => {
      if (data == null) {
        next(new Error("teacher not found for update"));
      } else response.status(200).json({ message: "teacher updated" });
    });
};
exports.deleteTeacher = (request, response, next) => {
  teacherSchema
    .findByIdAndDelete(request.params.id)
    .then((data) => {
      if (!data) {
        next(new Error("teacher not found for delete"));
      } else response.status(204).json({ data });
    })
    .catch((error) => next(error));
};
